import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-8 bg-white border-b-2 border-gray-200 text-xs text-[#1C1C1C]/70">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
        <Link to="/" className="flex items-center gap-1 hover:text-[#9a3820] transition-colors focus:outline-none">
          <Home className="w-3.5 h-3.5 text-[#A88616]" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-[#A88616]" />
              {isLast || !item.path ? (
                <span className="font-semibold text-[#9a3820] truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-[#9a3820] transition-colors focus:outline-none">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
