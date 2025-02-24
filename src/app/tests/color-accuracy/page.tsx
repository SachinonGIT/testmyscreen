'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize, Minimize, X, ZoomIn, ZoomOut, Info, Palette } from 'lucide-react';
import Link from 'next/link';

const colorSections = [
  {
    title: 'Primary Colors',
    description: 'Fundamental RGB colors forming digital displays',
    colors: [
      { name: 'Red', value: '#FF0000', desc: 'Pure Red (255, 0, 0)' },
      { name: 'Green', value: '#00FF00', desc: 'Pure Green (0, 255, 0)' },
      { name: 'Blue', value: '#0000FF', desc: 'Pure Blue (0, 0, 255)' },
    ],
  },
  {
    title: 'Secondary Colors',
    description: 'Colors from mixing two primary colors',
    colors: [
      { name: 'Cyan', value: '#00FFFF', desc: 'Green + Blue (0, 255, 255)' },
      { name: 'Magenta', value: '#FF00FF', desc: 'Red + Blue (255, 0, 255)' },
      { name: 'Yellow', value: '#FFFF00', desc: 'Red + Green (255, 255, 0)' },
    ],
  },
  {
    title: 'Grayscale',
    description: 'Test brightness and contrast differentiation',
    colors: [
      { name: 'White', value: '#FFFFFF', desc: '100% Brightness' },
      { name: 'Light Gray', value: '#CCCCCC', desc: '80% Brightness' },
      { name: 'Mid Gray', value: '#808080', desc: '50% Brightness' },
      { name: 'Dark Gray', value: '#333333', desc: '20% Brightness' },
      { name: 'Black', value: '#000000', desc: '0% Brightness' },
    ],
  },
];

const gradients = [
  { name: 'RGB Cycle', gradient: 'linear-gradient(to right, #FF0000, #00FF00, #0000FF, #FF0000)', desc: 'Full RGB transition' },
  { name: 'Grayscale', gradient: 'linear-gradient(to right, #000000, #FFFFFF)', desc: 'Brightness range' },
  { name: 'Warm-Cool', gradient: 'linear-gradient(to right, #FF4500, #1E90FF)', desc: 'Warm to cool tones' },
  { name: 'Pastel', gradient: 'linear-gradient(to right, #FFB6C1, #98FB98, #87CEFA)', desc: 'Subtle color shift' },
];

export default function ColorAccuracyTest() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [showInstructions, setShowInstructions] = useState(true);
  const [activePreview, setActivePreview] = useState<{ type: 'color' | 'gradient', value: string } | null>(null);
  const [showControls, setShowControls] = useState(true);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
        setShowInstructions(false);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
        setShowInstructions(true);
      }
    } catch (err) {
      console.error('Fullscreen toggle failed:', err);
    }
  }, []);

  const handleZoom = (direction: 'in' | 'out') => {
    setZoom((prev) => {
      const newZoom = direction === 'in' ? prev + 0.2 : prev - 0.2;
      return Math.min(Math.max(newZoom, 0.5), 3);
    });
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        if (document.fullscreenElement) {
          document.exitFullscreen();
          setIsFullscreen(false);
          setShowInstructions(true);
        }
        if (activePreview) {
          setActivePreview(null);
        }
        break;
      case '+':
      case '=':
        handleZoom('in');
        break;
      case '-':
        handleZoom('out');
        break;
      case 'h':
        setShowControls((prev) => !prev);
        break;
      case 'r':
        setZoom(1);
        break;
    }
  }, [activePreview]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Fullscreen preview */}
      <AnimatePresence>
        {activePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            style={{
              background: activePreview.type === 'gradient' ? activePreview.value : activePreview.value,
            }}
            onClick={() => setActivePreview(null)}
          >
            <div className="absolute bottom-4 left-4 text-white/80 text-sm">
              Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-4 right-4 flex justify-between items-center card p-4 z-40"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="flex items-center gap-4">
              <Link href="/" className="button-secondary flex items-center gap-2 hover:bg-white/10">
                <X className="w-5 h-5" />
                <span>Exit Test</span>
              </Link>
              <button
                onClick={() => setShowInstructions(true)}
                className="button-secondary p-2 hover:bg-white/10"
                title="Show Instructions (I)"
              >
                <Info className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleZoom('out')}
                className="button-secondary p-2 hover:bg-white/10"
                disabled={zoom <= 0.5}
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-white/70 min-w-[4ch] text-center">{Math.round(zoom * 100)}%</span>
              <button
                onClick={() => handleZoom('in')}
                className="button-secondary p-2 hover:bg-white/10"
                disabled={zoom >= 3}
                title="Zoom In (+)"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="button-secondary p-2 hover:bg-white/10"
                title="Reset Zoom (R)"
              >
                <Palette className="w-5 h-5" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="button-secondary hover:bg-white/10"
                title={isFullscreen ? 'Exit Fullscreen (ESC)' : 'Enter Fullscreen'}
              >
                {isFullscreen ? (
                  <Minimize className="w-5 h-5" />
                ) : (
                  <Maximize className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main test area */}
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full pt-24 pb-8 px-4">
          <div 
            className="container mx-auto space-y-16"
            style={{ 
              transform: `scale(${zoom})`,
              transformOrigin: 'top center',
            }}
          >
            {/* Gradients section */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold text-white">Color Gradients</h2>
                <button 
                  onClick={() => setShowInstructions(true)}
                  className="button-secondary p-2 hover:bg-white/10" 
                  title="Gradient Information"
                >
                  <Info className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gradients.map((gradient) => (
                  <motion.div
                    key={gradient.name}
                    className="card overflow-hidden"
                    whileHover={{ scale: zoom <= 1 ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="h-40 w-full cursor-pointer"
                      style={{ background: gradient.gradient }}
                      onClick={() => setActivePreview({ type: 'gradient', value: gradient.gradient })}
                    />
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-semibold text-white">{gradient.name}</h3>
                      <p className="text-sm text-gray-300">{gradient.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Color sections */}
            {colorSections.map((section) => (
              <section key={section.title} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                  <p className="text-gray-300">{section.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.colors.map((color) => (
                    <motion.div
                      key={color.name}
                      className="card overflow-hidden"
                      whileHover={{ scale: zoom <= 1 ? 1.02 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="h-40 w-full cursor-pointer"
                        style={{ backgroundColor: color.value }}
                        onClick={() => setActivePreview({ type: 'color', value: color.value })}
                      />
                      <div className="p-4 space-y-2">
                        <h3 className="text-lg font-semibold text-white">{color.name}</h3>
                        <p className="text-sm text-gray-300">{color.desc}</p>
                        <p className="text-xs font-mono text-gray-400">{color.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Instructions overlay */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm z-50"
          >
            <div 
              className="card p-6 max-w-md w-full space-y-6"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold text-white">Color Accuracy Test</h2>
                <button 
                  onClick={() => setShowInstructions(false)}
                  className="button-secondary p-2 hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4 text-white">
                <p className="text-sm text-gray-300">
                  Evaluate your display&apos;s color accuracy and reproduction capabilities with solid colors and gradients.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Testing Tips:</p>
                  <ul className="text-sm text-gray-200 space-y-2 list-disc list-inside">
                    <li>Look for vivid, distinct colors without tinting</li>
                    <li>Check gradients for smooth transitions (no banding)</li>
                    <li>Click colors/gradients for fullscreen preview</li>
                    <li>Use zoom to inspect pixel-level accuracy</li>
                    <li>Test in a controlled lighting environment</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Controls:</p>
                  <ul className="text-sm text-gray-200 space-y-1">
                    <li><span className="font-mono bg-gray-800 px-1 rounded">+/-</span> - Zoom in/out</li>
                    <li><span className="font-mono bg-gray-800 px-1 rounded">R</span> - Reset zoom</li>
                    <li><span className="font-mono bg-gray-800 px-1 rounded">H</span> - Hide/show controls</li>
                    <li><span className="font-mono bg-gray-800 px-1 rounded">ESC</span> - Exit fullscreen/preview</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end gap-4 pt-2">
                <button
                  onClick={() => setShowInstructions(false)}
                  className="button-secondary hover:bg-white/10"
                >
                  Close
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="button-primary"
                >
                  Start Test
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}