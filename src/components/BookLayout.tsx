
import React, { useState, useEffect } from 'react';
import { ChevronRight, BookOpen, TableOfContents } from 'lucide-react';
import { cn } from "@/lib/utils";

interface BookPage {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface BookLayoutProps {
  pages: BookPage[];
}

const BookLayout: React.FC<BookLayoutProps> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const turnPage = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (direction === 'next' && currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToPage = (pageIndex: number) => {
    if (isAnimating || pageIndex === currentPage) return;
    setIsAnimating(true);
    setCurrentPage(pageIndex);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') turnPage('next');
      if (e.key === 'ArrowLeft') turnPage('prev');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl aspect-[16/10] bg-white shadow-2xl overflow-hidden">
        
        {/* Book Spine */}
        <div className="absolute left-0 top-0 w-8 h-full bg-gray-900 flex items-center justify-center">
          <BookOpen className="text-white w-4 h-4 rotate-90" />
        </div>

        {/* Page Container */}
        <div className="ml-8 h-full flex">
          
          {/* Current Page */}
          <div className={cn(
            "w-full h-full relative overflow-hidden transition-transform duration-600 ease-in-out",
            isAnimating ? "transform scale-95" : "transform scale-100"
          )}>
            <div className={cn(
              "absolute inset-0 transition-opacity duration-300",
              isAnimating ? "opacity-0" : "opacity-100"
            )}>
              {pages[currentPage]?.content}
            </div>
          </div>

        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 right-6 flex items-center space-x-4">
          
          {/* Page Counter */}
          <div className="text-sm text-gray-500 font-mono">
            {String(currentPage + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')}
          </div>

          {/* Turn Page Button */}
          {currentPage < pages.length - 1 && (
            <button
              onClick={() => turnPage('next')}
              disabled={isAnimating}
              className="group flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
            >
              <span>Turn Page</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}

        </div>

        {/* Previous Page Button */}
        {currentPage > 0 && (
          <button
            onClick={() => turnPage('prev')}
            disabled={isAnimating}
            className="absolute bottom-6 left-12 text-sm text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
          >
            ← Previous
          </button>
        )}

        {/* Table of Contents Access */}
        {currentPage !== 1 && (
          <button
            onClick={() => goToPage(1)}
            disabled={isAnimating}
            className="absolute top-6 right-6 p-2 text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
            title="Table of Contents"
          >
            <TableOfContents className="w-5 h-5" />
          </button>
        )}

      </div>
    </div>
  );
};

export default BookLayout;
