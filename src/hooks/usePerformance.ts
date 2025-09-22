import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
}

export const usePerformance = (componentName: string) => {
  const startTime = useRef<number>(Date.now());
  const renderStartTime = useRef<number>(Date.now());

  useEffect(() => {
    const loadTime = Date.now() - startTime.current;
    
    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`🚀 ${componentName} loaded in ${loadTime}ms`);
      
      // Check if Performance API is available
      if (typeof performance !== 'undefined' && performance.memory) {
        const memoryUsage = performance.memory.usedJSHeapSize / 1024 / 1024; // MB
        console.log(`💾 Memory usage: ${memoryUsage.toFixed(2)}MB`);
      }
    }
  }, [componentName]);

  const measureRender = (callback: () => void) => {
    renderStartTime.current = Date.now();
    callback();
    const renderTime = Date.now() - renderStartTime.current;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`⚡ ${componentName} rendered in ${renderTime}ms`);
    }
  };

  return { measureRender };
};

export const useImagePreload = (imageUrls: string[]) => {
  useEffect(() => {
    const preloadImages = () => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    // Preload images after component mounts
    const timeoutId = setTimeout(preloadImages, 100);
    
    return () => clearTimeout(timeoutId);
  }, [imageUrls]);
};

export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      observerRef.current = new IntersectionObserver(callback, {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, options]);

  return observerRef.current;
};
