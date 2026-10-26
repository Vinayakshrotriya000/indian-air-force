import React, { useState } from 'react';
import { IafEmblem } from './IafEmblem';
import { Search, Menu, X, LayoutGrid, SlidersHorizontal, Presentation } from 'lucide-react';
import { AircraftCategory } from '../types/aircraft';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory: (category: AircraftCategory | 'All') => void;
  selectedCategory: AircraftCategory | 'All';
  viewMode: 'portal' | 'deck';
  onToggleViewMode: (mode: 'portal' | 'deck') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  onSelectCategory,
  selectedCategory,
  viewMode,
  onToggleViewMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleNavClick = (
    category: AircraftCategory | 'All',
    sectionId: string = 'inventory'
  ) => {
    onSelectCategory(category);
    setMobileMenuOpen(false);

    // If in deck mode, switch back to portal when navigating categories
    if (viewMode === 'deck') {
      onToggleViewMode('portal');
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
      {/* National Tricolor Top Accent Line */}
      <div className="h-1 w-full grid grid-cols-3">
        <div className="bg-[#FF9933]"></div>
        <div className="bg-white"></div>
        <div className="bg-[#138808]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Brand Logo & Title */}
          <button
            onClick={() => handleNavClick('All', 'home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <IafEmblem size={40} className="shrink-0 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg tracking-wider text-[#102A43] uppercase leading-tight">
                INDIAN AIR FORCE
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-widest text-[#627D98] uppercase">
                AIRCRAFT INVENTORY 2026
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold tracking-wide text-[#172B4D]">
            <button
              onClick={() => handleNavClick('All', 'home')}
              className="px-2.5 py-1.5 rounded-sm hover:bg-[#F0F4F8] hover:text-[#102A43] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('All', 'inventory')}
              className={`px-2.5 py-1.5 rounded-sm transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-[#102A43] text-white'
                  : 'hover:bg-[#F0F4F8] hover:text-[#102A43]'
              }`}
            >
              All Aircraft (30)
            </button>
            <button
              onClick={() => handleNavClick('Fighter Jets and Combat Aircraft', 'inventory')}
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                selectedCategory === 'Fighter Jets and Combat Aircraft'
                  ? 'bg-[#102A43] text-white'
                  : 'hover:bg-[#F0F4F8] hover:text-[#102A43]'
              }`}
            >
              Fighter Jets
            </button>
            <button
              onClick={() => handleNavClick('Transport Aircraft', 'inventory')}
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                selectedCategory === 'Transport Aircraft'
                  ? 'bg-[#102A43] text-white'
                  : 'hover:bg-[#F0F4F8] hover:text-[#102A43]'
              }`}
            >
              Transport
            </button>
            <button
              onClick={() => handleNavClick('Helicopters', 'inventory')}
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                selectedCategory === 'Helicopters'
                  ? 'bg-[#102A43] text-white'
                  : 'hover:bg-[#F0F4F8] hover:text-[#102A43]'
              }`}
            >
              Helicopters
            </button>
            <button
              onClick={() => handleNavClick('Training Aircraft', 'inventory')}
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                selectedCategory === 'Training Aircraft'
                  ? 'bg-[#102A43] text-white'
                  : 'hover:bg-[#F0F4F8] hover:text-[#102A43]'
              }`}
            >
              Trainers
            </button>
            <button
              onClick={() =>
                handleNavClick('Surveillance and Special-Mission Aircraft', 'inventory')
              }
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                selectedCategory === 'Surveillance and Special-Mission Aircraft'
                  ? 'bg-[#102A43] text-white'
                  : 'hover:bg-[#F0F4F8] hover:text-[#102A43]'
              }`}
            >
              Special Missions
            </button>
            <button
              onClick={() => handleNavClick('All', 'about')}
              className="px-2.5 py-1.5 rounded-sm hover:bg-[#F0F4F8] hover:text-[#102A43] transition-colors"
            >
              About
            </button>
          </nav>

          {/* Search Box & Controls */}
          <div className="flex items-center gap-2">
            {/* Search Input Bar (Desktop) */}
            <div className="relative hidden sm:block w-48 md:w-60 lg:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search Su-30, Rafale, role..."
                aria-label="Search aircraft by name, role, manufacturer"
                className="w-full bg-[#F7F9FC] border border-[#CBD5E1] rounded-sm pl-8 pr-3 py-1.5 text-xs text-[#172B4D] placeholder-[#627D98] focus:bg-white focus:border-[#102A43] focus:ring-1 focus:ring-[#102A43] transition-all"
              />
              <Search
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#627D98] pointer-events-none"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#627D98] hover:text-[#172B4D] text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile Search Button Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle mobile search"
              className="sm:hidden p-2 rounded-sm text-[#102A43] hover:bg-[#F0F4F8]"
            >
              <Search size={18} />
            </button>

            {/* View Mode Toggle Button */}
            <button
              onClick={() => onToggleViewMode(viewMode === 'portal' ? 'deck' : 'portal')}
              aria-label={
                viewMode === 'portal'
                  ? 'Switch to 16-Slide Tactical Deck Presentation Mode'
                  : 'Switch to Editorial Reference Portal View'
              }
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border text-xs font-semibold transition-all ${
                viewMode === 'deck'
                  ? 'bg-[#102A43] text-white border-[#102A43] shadow-xs'
                  : 'bg-white text-[#102A43] border-[#CBD5E1] hover:bg-[#F7F9FC]'
              }`}
              title={
                viewMode === 'portal'
                  ? 'Open 16-Slide Tactical Presentation HUD'
                  : 'Return to Editorial Catalog'
              }
            >
              {viewMode === 'portal' ? (
                <>
                  <Presentation size={15} className="text-[#FF9933]" />
                  <span className="hidden sm:inline">Tactical Deck</span>
                </>
              ) : (
                <>
                  <LayoutGrid size={15} className="text-[#138808]" />
                  <span className="hidden sm:inline">Portal View</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-sm text-[#102A43] hover:bg-[#F0F4F8]"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expandable */}
        {searchOpen && (
          <div className="sm:hidden pb-3 pt-1">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search Su-30, Rafale, helicopter..."
                className="w-full bg-[#F7F9FC] border border-[#CBD5E1] rounded-sm pl-8 pr-3 py-2 text-xs text-[#172B4D]"
                autoFocus
              />
              <Search
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#627D98]"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#CBD5E1] px-4 py-3 space-y-1 text-sm font-medium">
          <button
            onClick={() => handleNavClick('All', 'home')}
            className="w-full text-left px-3 py-2 rounded-sm text-[#172B4D] hover:bg-[#F7F9FC]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('All', 'inventory')}
            className="w-full text-left px-3 py-2 rounded-sm text-[#172B4D] hover:bg-[#F7F9FC] flex justify-between"
          >
            <span>All Aircraft Inventory</span>
            <span className="font-mono text-xs text-[#627D98]">30 Types</span>
          </button>
          <button
            onClick={() => handleNavClick('Fighter Jets and Combat Aircraft', 'inventory')}
            className="w-full text-left px-3 py-2 rounded-sm text-[#172B4D] hover:bg-[#F7F9FC] pl-6 text-xs flex justify-between"
          >
            <span>Fighter Jets and Combat</span>
            <span className="font-mono text-[11px] text-[#627D98]">6</span>
          </button>
          <button
            onClick={() => handleNavClick('Transport Aircraft', 'inventory')}
            className="w-full text-left px-3 py-2 rounded-sm text-[#172B4D] hover:bg-[#F7F9FC] pl-6 text-xs flex justify-between"
          >
            <span>Transport Aircraft</span>
            <span className="font-mono text-[11px] text-[#627D98]">7</span>
          </button>
          <button
            onClick={() => handleNavClick('Helicopters', 'inventory')}
            className="w-full text-left px-3 py-2 rounded-sm text-[#172B4D] hover:bg-[#F7F9FC] pl-6 text-xs flex justify-between"
          >
            <span>Helicopters</span>
            <span className="font-mono text-[11px] text-[#627D98]">7</span>
          </button>
          <button
            onClick={() => handleNavClick('Training Aircraft', 'inventory')}
            className="w-full text-left px-3 py-2 rounded-sm text-[#172B4D] hover:bg-[#F7F9FC] pl-6 text-xs flex justify-between"
          >
            <span>Training Aircraft</span>
            <span className="font-mono text-[11px] text-[#627D98]">7</span>
          </button>
          <button
            onClick={() =>
              handleNavClick('Surveillance and Special-Mission Aircraft', 'inventory')
            }
            className="w-full text-left px-3 py-2 rounded-sm text-[#172B4D] hover:bg-[#F7F9FC] pl-6 text-xs flex justify-between"
          >
            <span>Surveillance and AEW&C</span>
            <span className="font-mono text-[11px] text-[#627D98]">2</span>
          </button>
          <button
            onClick={() => handleNavClick('Aerial Refuelling Aircraft', 'inventory')}
            className="w-full text-left px-3 py-2 rounded-sm text-[#172B4D] hover:bg-[#F7F9FC] pl-6 text-xs flex justify-between"
          >
            <span>Aerial Refuelling Tankers</span>
            <span className="font-mono text-[11px] text-[#627D98]">1</span>
          </button>
          <div className="border-t border-[#E2E8F0] pt-2">
            <button
              onClick={() => handleNavClick('All', 'dashboard')}
              className="w-full text-left px-3 py-2 rounded-sm text-[#172B4D] hover:bg-[#F7F9FC]"
            >
              Fleet Analytics Dashboard
            </button>
            <button
              onClick={() => handleNavClick('All', 'about')}
              className="w-full text-left px-3 py-2 rounded-sm text-[#172B4D] hover:bg-[#F7F9FC]"
            >
              About & Data Methodology
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
