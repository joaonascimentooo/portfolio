"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ScreenshotCarouselProps {
  screenshots: string[];
  projectName: string;
}

export default function ScreenshotCarousel({ screenshots, projectName }: ScreenshotCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative w-full">
        {/* Main Carousel */}
        <div 
          className="relative w-full rounded-xl overflow-hidden border border-cyan-500/30 bg-gray-900/50 backdrop-blur-sm shadow-lg shadow-cyan-500/10 cursor-pointer group" 
          style={{ aspectRatio: '16/9', maxHeight: '500px' }}
          onClick={() => setIsFullscreen(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={screenshots[currentIndex]}
                alt={`${projectName} screenshot ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority={currentIndex === 0}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-500/90 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Clique para expandir
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        {/* Navigation Arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center group shadow-lg z-10"
              aria-label="Previous screenshot"
            >
              <svg className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center group shadow-lg z-10"
              aria-label="Next screenshot"
            >
              <svg className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Counter */}
        {screenshots.length > 1 && (
          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/30 text-cyan-400 text-xs font-bold">
            {currentIndex + 1} / {screenshots.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {screenshots.length > 1 && (
        <div className="mt-4 flex gap-2 justify-center flex-wrap">
          {screenshots.map((screenshot, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-cyan-400 ring-2 ring-cyan-400/30 shadow-lg shadow-cyan-400/20'
                  : 'border-gray-700 hover:border-cyan-400/50 opacity-50 hover:opacity-100'
              }`}
              style={{ width: '80px', height: '50px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={screenshot}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {index === currentIndex && (
                <motion.div
                  layoutId="activeThumbnail"
                  className="absolute inset-0 bg-cyan-400/10"
                />
              )}
            </motion.button>
          ))}
        </div>
      )}
    </div>

    {/* Fullscreen Modal */}
    <AnimatePresence>
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-red-500/80 hover:bg-red-500 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close fullscreen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[currentIndex]}
              alt={`${projectName} screenshot ${currentIndex + 1}`}
              fill
              className="object-contain"
            />

            {/* Navigation in fullscreen */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/50 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center group shadow-xl"
                  aria-label="Previous screenshot"
                >
                  <svg className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/50 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center group shadow-xl"
                  aria-label="Next screenshot"
                >
                  <svg className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Counter in fullscreen */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/50 text-cyan-400 text-base font-bold">
                  {currentIndex + 1} / {screenshots.length}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
}
