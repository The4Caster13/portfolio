
import React from 'react';

interface TableOfContentsProps {
  onNavigate: (pageIndex: number) => void;
}

const TableOfContentsPage: React.FC<TableOfContentsProps> = ({ onNavigate }) => {
  const contents = [
    { title: "About Me", page: 2 },
    { title: "Featured Projects", page: 3 },
    { title: "Design Philosophy", page: 4 },
    { title: "Contact", page: 5 },
  ];

  return (
    <div className="h-full p-12 flex flex-col">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold font-display text-gray-900 mb-4">
          Table of Contents
        </h1>
        <div className="w-16 h-px bg-gray-900"></div>
      </div>

      {/* Contents List */}
      <div className="flex-1 space-y-6">
        {contents.map((item, index) => (
          <button
            key={index}
            onClick={() => onNavigate(item.page)}
            className="group w-full text-left flex items-center justify-between py-4 border-b border-gray-200 hover:border-gray-400 transition-colors"
          >
            <span className="text-xl font-light text-gray-800 group-hover:text-gray-900 transition-colors">
              {item.title}
            </span>
            <span className="text-sm font-mono text-gray-500 group-hover:text-gray-700 transition-colors">
              {String(item.page + 1).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-sm text-gray-500 italic">
        Use arrow keys or click to navigate
      </div>

    </div>
  );
};

export default TableOfContentsPage;
