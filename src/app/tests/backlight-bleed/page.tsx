'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize, Minimize, X, Sun, Info, Grid2X2, Eye } from 'lucide-react';
import Link from 'next/link';

const backgroundOptions = [
  { name: 'Black', value: '#000000', desc: 'Best for detecting light leakage' },
  { name: 'Dark Gray', value: '#1A1A1A', desc: 'Subtle bleed detection' },
  { name: 'Gray', value: '#808080', desc: 'Moderate contrast test' },
];

export default function BacklightBleedTest() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [brightness, setBrightness] = useState(50);
  const [showInstructions, setShowInstructions] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [background, setBackground] = useState(0);
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

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        if (document.fullscreenElement) {
          document.exitFullscreen();
          setIsFullscreen(false);
          setShowInstructions(true);
        }
        break;
      case 'g':
        setShowGrid((prev) => !prev);
        break;
      case 'h':
        setShowControls((prev) => !prev);
        break;
      case 'b':
        setBackground((prev) => (prev + 1) % backgroundOptions.length);
        break;
      case 'ArrowUp':
        setBrightness((prev) => Math.min(100, prev + 5));
        break;
      case 'ArrowDown':
        setBrightness((prev) => Math.max(1, prev - 5));
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div 
      className="min-h-screen relative transition-all duration-300"
      style={{
        backgroundColor: backgroundOptions[background].value,
        filter: `brightness(${brightness / 50})`,
      }}
    >
      {/* Grid overlay */}
      {showGrid && (
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="w-full h-full grid grid-cols-3 grid-rows-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border border-white/20" />
            ))}
          </div>
        </div>
      )}

      {/* Corner markers */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 left-0 w-48 h-48">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20" />
          <div className="absolute top-0 left-0 h-full w-[2px] bg-white/20" />
          <div className="absolute top-8 left-8 text-white/60 text-sm">Top Left</div>
        </div>
        <div className="absolute top-0 right-0 w-48 h-48">
          <div className="absolute top-0 right-0 w-full h-[2px] bg-white/20" />
          <div className="absolute top-0 right-0 h-full w-[2px] bg-white/20" />
          <div className="absolute top-8 right-8 text-white/60 text-sm">Top Right</div>
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48">
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20" />
          <div className="absolute bottom-0 left-0 h-full w-[2px] bg-white/20" />
          <div className="absolute bottom-8 left-8 text-white/60 text-sm">Bottom Left</div>
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48">
          <div className="absolute bottom-0 right-0 w-full h-[2px] bg-white/20" />
          <div className="absolute bottom-0 right-0 h-full w-[2px] bg-white/20" />
          <div className="absolute bottom-8 right-8 text-white/60 text-sm">Bottom Right</div>
        </div>
      </div>

      {/* Top controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-4 right-4 flex justify-between items-center card p-4 z-50"
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
                title="Show Instructions"
              >
                <Info className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <Sun className="w-5 h-5 text-white/70" />
                <div className="relative w-32 h-8 flex items-center">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:w-4 
                      [&::-webkit-slider-thumb]:h-4 
                      [&::-webkit-slider-thumb]:rounded-full 
                      [&::-webkit-slider-thumb]:bg-white 
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:hover:bg-white/90
                      [&::-webkit-slider-thumb]:transition-colors
                      [&::-moz-range-thumb]:w-4
                      [&::-moz-range-thumb]:h-4
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-white
                      [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:hover:bg-white/90
                      [&::-moz-range-thumb]:transition-colors
                      [&::-moz-range-track]:bg-white/20
                      [&::-moz-range-track]:rounded-full
                      [&::-moz-range-track]:h-2"
                  />
                  <div 
                    className="absolute left-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-white/40 pointer-events-none transition-all duration-200"
                    style={{ width: `${brightness}%` }}
                  />
                </div>
                <span className="min-w-[4ch] text-center text-white/70 tabular-nums">{brightness}%</span>
              </div>

              <button
                onClick={() => setBackground((prev) => (prev + 1) % backgroundOptions.length)}
                className="button-secondary flex items-center gap-2 hover:bg-white/10"
                title="Change Background"
              >
                <span>{backgroundOptions[background].name}</span>
              </button>

              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`button-secondary p-2 hover:bg-white/10 ${showGrid ? 'bg-[var(--primary)]' : ''}`}
                title="Toggle Grid (G)"
              >
                <Grid2X2 className="w-5 h-5" />
              </button>

              <button
                onClick={() => setShowControls(false)}
                className="button-secondary p-2 hover:bg-white/10"
                title="Hide Controls (H)"
              >
                <Eye className="w-5 h-5" />
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
              className="card p-8 max-w-lg w-full space-y-6"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-semibold text-white">Backlight Bleed Test</h2>
                <button 
                  onClick={() => setShowInstructions(false)}
                  className="button-secondary p-2 hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4 text-white">
                <p className="text-sm">
                  Identify backlight bleeding on your LCD display by examining light leakage along edges and corners,
                  especially noticeable in dark scenes or at different brightness levels.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Testing Tips:</p>
                  <ul className="text-sm space-y-2 list-disc list-inside text-gray-200">
                    <li>Test in a dark room for maximum visibility</li>
                    <li>Use fullscreen mode to check all edges</li>
                    <li>Vary brightness to detect bleed intensity</li>
                    <li>Enable grid to pinpoint problem areas</li>
                    <li>Try different backgrounds to reveal subtle bleed</li>
                    <li>Minor bleeding is common in LCD technology</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Keyboard Shortcuts:</p>
                  <ul className="text-sm space-y-1 text-gray-200">
                    <li><span className="font-mono bg-gray-800 px-1 rounded">ESC</span> - Exit fullscreen</li>
                    <li><span className="font-mono bg-gray-800 px-1 rounded">G</span> - Toggle grid</li>
                    <li><span className="font-mono bg-gray-800 px-1 rounded">H</span> - Hide/show controls</li>
                    <li><span className="font-mono bg-gray-800 px-1 rounded">B</span> - Cycle backgrounds</li>
                    <li><span className="font-mono bg-gray-800 px-1 rounded">↑↓</span> - Adjust brightness</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end gap-4">
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