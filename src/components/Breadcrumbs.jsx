import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-xs sm:text-sm text-sand/85 mb-5 flex-wrap"
    >
      <Link to="/" className="inline-flex items-center gap-1 text-inherit hover:text-white transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            {isLast ? (
              <span className="font-semibold text-accent">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="text-inherit hover:text-white transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
