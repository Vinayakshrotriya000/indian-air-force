import React from 'react';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { AircraftCategory } from '../types/aircraft';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface CategoryNavigationProps {
  selectedCategory: AircraftCategory | 'All';
  onSelectCategory: (category: AircraftCategory) => void;
}

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const handleCategoryClick = (category: AircraftCategory) => {
    onSelectCategory(category);
    const inventorySection = document.getElementById('inventory');
    if (inventorySection) {
      inventorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-12 sm:py-16 bg-[#F7F9FC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#CBD5E1]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-4 bg-[#FF9933] rounded-xs"></span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#627D98]">
                FLEET STRUCTURE
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#102A43]">
              Aircraft Categories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#627D98] max-w-md mt-2 md:mt-0">
            Organized across operational defense mandates: air superiority, strategic mobility, rotary combat, pilot training, surveillance, and refuelling.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = selectedCategory === cat.name;

            return (
              <article
                key={cat.id}
                className={`group bg-white rounded-xs border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#102A43] ring-2 ring-[#102A43] shadow-md'
                    : 'border-[#CBD5E1] hover:border-[#102A43] hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Real Aircraft Photography Thumbnail */}
                  <div className="relative aspect-16/9 w-full bg-[#102A43] overflow-hidden">
                    <img
                      src={cat.heroImage}
                      alt={cat.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badge: Listed Aircraft Types */}
                    <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded-xs text-[11px] font-mono font-bold text-white border border-white/20">
                      {cat.count} {cat.count === 1 ? 'TYPE' : 'TYPES'}
                    </div>

                    {/* Short Role Callout */}
                    <div className="absolute bottom-2 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono text-[#FF9933] uppercase font-bold tracking-wider block">
                        CATEGORY {cat.id.toUpperCase()}
                      </span>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white line-clamp-1">
                        {cat.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-[#486581] leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                  <button
                    onClick={() => handleCategoryClick(cat.name)}
                    className={`w-full py-2 px-3 rounded-xs text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all ${
                      isSelected
                        ? 'bg-[#102A43] text-white shadow-xs'
                        : 'bg-[#F0F4F8] text-[#102A43] hover:bg-[#102A43] hover:text-white'
                    }`}
                  >
                    <span>VIEW AIRCRAFT</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
