import React, { useState } from 'react';
import { Aircraft, AircraftCategory, ServiceStatus } from '../types/aircraft';
import { AircraftCard } from './AircraftCard';
import { FilterOptions, SortOption, filterAircraft, sortAircraft } from '../utils/inventoryLogic';
import { Search, Filter, ArrowUpDown, X, Check, SlidersHorizontal, Layers } from 'lucide-react';

interface AircraftGridProps {
  aircraftList: Aircraft[];
  selectedCategory: AircraftCategory | 'All';
  onCategoryChange: (cat: AircraftCategory | 'All') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onViewSpecs: (aircraft: Aircraft) => void;
}

const CATEGORY_TABS: { label: string; value: AircraftCategory | 'All' }[] = [
  { label: 'All Aircraft (30)', value: 'All' },
  { label: 'Fighter Jets (6)', value: 'Fighter Jets and Combat Aircraft' },
  { label: 'Transport (7)', value: 'Transport Aircraft' },
  { label: 'Helicopters (7)', value: 'Helicopters' },
  { label: 'Trainers (7)', value: 'Training Aircraft' },
  { label: 'Surveillance (2)', value: 'Surveillance and Special-Mission Aircraft' },
  { label: 'Tankers (1)', value: 'Aerial Refuelling Aircraft' },
];

const STATUS_FILTERS: { label: string; value: ServiceStatus | 'All' }[] = [
  { label: 'All Statuses', value: 'All' },
  { label: 'In Service', value: 'In service' },
  { label: 'Deliveries Underway / Ordered', value: 'Deliveries underway' },
  { label: 'Phased Retirement', value: 'In phased retirement' },
];

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: 'Alphabetical (A to Z)', value: 'name-asc' },
  { label: 'Alphabetical (Z to A)', value: 'name-desc' },
  { label: 'Estimated Fleet (Highest First)', value: 'fleet-desc' },
  { label: 'Estimated Fleet (Lowest First)', value: 'fleet-asc' },
  { label: 'Service Entry (Newest First)', value: 'year-desc' },
  { label: 'Service Entry (Oldest First)', value: 'year-asc' },
  { label: 'Category Grouping', value: 'category' },
];

export const AircraftGrid: React.FC<AircraftGridProps> = ({
  aircraftList,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  onViewSpecs,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<ServiceStatus | 'All'>('All');
  const [isDomesticOnly, setIsDomesticOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>('fleet-desc');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  // Apply filters and sorting
  const filtered = filterAircraft(aircraftList, {
    searchQuery,
    category: selectedCategory,
    serviceStatus: selectedStatus,
    isDomesticOnly,
  });

  const sortedList = sortAircraft(filtered, sortBy);

  const activeFilterCount =
    (selectedCategory !== 'All' ? 1 : 0) +
    (selectedStatus !== 'All' ? 1 : 0) +
    (isDomesticOnly ? 1 : 0) +
    (searchQuery ? 1 : 0);

  const handleResetFilters = () => {
    onCategoryChange('All');
    setSelectedStatus('All');
    setIsDomesticOnly(false);
    onSearchChange('');
    setSortBy('fleet-desc');
  };

  return (
    <section id="inventory" className="py-12 sm:py-16 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#CBD5E1]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-4 bg-[#FF9933] rounded-xs"></span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#627D98]">
                SEARCH &amp; FILTER CATALOG
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#102A43]">
              Aircraft Inventory Database
            </h2>
          </div>
          <div className="mt-2 md:mt-0 font-mono text-xs text-[#627D98] flex items-center gap-2">
            <span>Showing</span>
            <span className="font-bold text-[#102A43] bg-white px-2 py-0.5 border border-[#CBD5E1] rounded-xs">
              {sortedList.length} of {aircraftList.length} Aircraft
            </span>
          </div>
        </div>

        {/* Primary Category Tabs Filter */}
        <div className="overflow-x-auto no-scrollbar pb-2 mb-4">
          <div className="flex items-center gap-1.5 min-w-max">
            {CATEGORY_TABS.map((tab) => {
              const active = selectedCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => onCategoryChange(tab.value)}
                  className={`px-3 py-1.5 rounded-xs text-xs font-semibold tracking-wide transition-all ${
                    active
                      ? 'bg-[#102A43] text-white shadow-xs'
                      : 'bg-white text-[#334E68] border border-[#CBD5E1] hover:border-[#102A43] hover:text-[#102A43]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Toolbar: Search + Secondary Filters + Sort */}
        <div className="bg-white p-3 sm:p-4 rounded-xs border border-[#CBD5E1] shadow-xs mb-8 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Box in Grid */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Filter by name, manufacturer, country, or weapon..."
              aria-label="Filter aircraft"
              className="w-full bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs pl-9 pr-3 py-2 text-xs text-[#172B4D] placeholder-[#627D98] focus:bg-white focus:border-[#102A43] focus:ring-1 focus:ring-[#102A43]"
            />
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#627D98] pointer-events-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#627D98] hover:text-black font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Secondary Controls Group */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Status Dropdown */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as ServiceStatus | 'All')}
              aria-label="Filter by service status"
              className="bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs px-2.5 py-2 text-xs text-[#172B4D] font-medium focus:border-[#102A43] focus:bg-white"
            >
              {STATUS_FILTERS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>

            {/* Indigenous Domestic Toggle */}
            <button
              onClick={() => setIsDomesticOnly(!isDomesticOnly)}
              className={`px-2.5 py-2 rounded-xs text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                isDomesticOnly
                  ? 'bg-[#FF9933]/15 text-[#102A43] border-[#FF9933] font-bold'
                  : 'bg-[#F7F9FC] text-[#627D98] border-[#CBD5E1] hover:text-[#102A43]'
              }`}
            >
              <span>Atmanirbhar / Indigenous</span>
              {isDomesticOnly && <Check size={13} className="text-[#102A43]" />}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs px-2 py-1.5">
              <ArrowUpDown size={13} className="text-[#627D98] shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort aircraft inventory"
                className="bg-transparent text-xs text-[#172B4D] font-medium focus:outline-hidden"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filters Button */}
            {activeFilterCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="px-2.5 py-2 rounded-xs text-xs font-bold text-[#DC2626] hover:bg-[#FEE2E2] flex items-center gap-1 transition-colors"
                title="Clear all active search and filter constraints"
              >
                <X size={13} />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter / Filter Indicator */}
        {activeFilterCount > 0 && (
          <div className="mb-4 flex items-center justify-between text-xs text-[#627D98]">
            <span className="font-mono">
              Filtered to <strong>{sortedList.length}</strong> matching aircraft
            </span>
            <span className="font-mono text-[11px]">
              {activeFilterCount} active {activeFilterCount === 1 ? 'filter' : 'filters'}
            </span>
          </div>
        )}

        {/* Aircraft Cards Grid */}
        {sortedList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedList.map((aircraft) => (
              <AircraftCard
                key={aircraft.id}
                aircraft={aircraft}
                onViewSpecs={onViewSpecs}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-xs border border-[#CBD5E1] p-12 text-center max-w-lg mx-auto">
            <Search size={36} className="mx-auto text-[#627D98] mb-3" />
            <h3 className="font-heading font-bold text-lg text-[#102A43] mb-1">
              No matching aircraft found
            </h3>
            <p className="text-xs text-[#627D98] mb-4">
              We couldn&apos;t find any aircraft matching &quot;{searchQuery}&quot; under the
              selected filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-[#102A43] text-white text-xs font-bold tracking-wider rounded-xs hover:bg-[#1f3f61]"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
