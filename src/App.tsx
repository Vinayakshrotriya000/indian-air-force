import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryNavigation } from './components/CategoryNavigation';
import { AircraftGrid } from './components/AircraftGrid';
import { AircraftDetailsModal } from './components/AircraftDetailsModal';
import { InventoryDashboard } from './components/InventoryDashboard';
import { AboutAndDisclaimer } from './components/AboutAndDisclaimer';
import { Footer } from './components/Footer';
import { TacticalDeckView } from './components/TacticalDeckView';
import { AIRCRAFT_INVENTORY } from './data/aircraftData';
import { calculateFleetMetrics } from './utils/inventoryLogic';
import { Aircraft, AircraftCategory } from './types/aircraft';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<AircraftCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAircraft, setSelectedAircraft] = useState<Aircraft | null>(null);
  const [viewMode, setViewMode] = useState<'portal' | 'deck'>('portal');

  // Compute fleet metrics from our 30-aircraft dataset
  const metrics = useMemo(() => calculateFleetMetrics(AIRCRAFT_INVENTORY), []);

  const handleExploreClick = () => {
    setSelectedCategory('All');
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewInventoryClick = () => {
    setSelectedCategory('All');
    const inventorySection = document.getElementById('inventory');
    if (inventorySection) {
      inventorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#172B4D] flex flex-col font-sans">
      {/* Navbar with Sticky Positioning and Search */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
      />

      {viewMode === 'deck' ? (
        /* Tactical 16-Slide Presentation HUD View */
        <TacticalDeckView onReturnToPortal={() => setViewMode('portal')} />
      ) : (
        /* Main Editorial Aviation Portal View */
        <main className="flex-1">
          {/* Section 1: Homepage Hero Section */}
          <HeroSection
            metrics={metrics}
            onExploreClick={handleExploreClick}
            onViewInventoryClick={handleViewInventoryClick}
          />

          {/* Section 2: Aircraft Category Navigation (6 Categories) */}
          <CategoryNavigation
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
          />

          {/* Section 3: Aircraft Inventory Database (30 Aircraft Cards with Search & Filters) */}
          <AircraftGrid
            aircraftList={AIRCRAFT_INVENTORY}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onViewSpecs={(plane) => setSelectedAircraft(plane)}
          />

          {/* Section 4: Inventory Dashboard & Statistics */}
          <InventoryDashboard
            metrics={metrics}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              const element = document.getElementById('inventory');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />

          {/* Section 5: About and Legal / Pricing Disclaimers */}
          <AboutAndDisclaimer />
        </main>
      )}

      {/* Footer */}
      {viewMode === 'portal' && (
        <Footer onSelectCategory={(cat) => setSelectedCategory(cat)} />
      )}

      {/* Detailed Specifications Modal */}
      <AircraftDetailsModal
        aircraft={selectedAircraft}
        onClose={() => setSelectedAircraft(null)}
      />
    </div>
  );
}
