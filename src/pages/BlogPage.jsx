import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { BLOG_POSTS } from '../data/travelData';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-16 sm:pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-[#2e3a2f]/95 via-[#2e3a2f]/90 to-[#2e3a2f] text-white py-14 sm:py-16 md:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Blog & Articles', path: '/blog' }]} />
          <div className="max-w-3xl mt-4">
            <span className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#c96f4f]/20 text-[#e5b382] border border-[#c96f4f]/40">
              Field Notes & Insights
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              Sundarban Travel Articles & Stories
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              Practical tips, wildlife observation journals, and packing recommendations written by experienced Bengal naturalists.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#d9c9b2]/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-[#6c7a6b] mb-3">
                  <span className="font-semibold text-[#c96f4f] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c2e24] mb-3 leading-snug group-hover:text-[#2d5a3f] transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-[#4a5548] leading-relaxed mb-6 flex-grow">
                  {post.content}
                </p>

                <div className="border-t border-[#d9c9b2]/40 pt-4 flex items-center justify-between">
                  <span className="text-xs text-[#6c7a6b] font-medium">{post.date}</span>
                  <Link 
                    to="/sundarban-tour-packages" 
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#2d5a3f] hover:text-[#c96f4f] transition-colors"
                  >
                    <span>Explore Tours</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
