'use client';

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Memoize the keydown handler to prevent unnecessary re-renders
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        if (document.fullscreenElement) {
          document.exitFullscreen().catch((err) => {
            console.error('Failed to exit fullscreen:', err);
          });
        }
        break;
      // Add more global shortcuts here if needed in the future
    }
  }, []);

  // Handle scrolling and cleanup
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Cleanup function
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [pathname]); // Re-run when pathname changes

  // Handle keyboard events
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        // Optionally trigger a state update or callback when exiting fullscreen
        console.log('Exited fullscreen mode');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    // Cleanup function
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div 
      className="min-h-screen w-full flex flex-col"
      style={{ overscrollBehavior: 'none' }} // Prevent overscroll bounce
    >
      {children}
    </div>
  );
}