import React from 'react';
import { InventoryMetrics } from '../utils/inventoryLogic';
import { AircraftCategory } from '../types/aircraft';
import { BarChart3, PieChart, Shield, Info, Layers, CheckCircle2 } from 'lucide-react';

interface InventoryDashboardProps {
  metrics: InventoryMetrics;
  onSelectCategory: (cat: AircraftCategory) => void;
}

export const InventoryDashboard: React.FC<InventoryDashboardProps> = ({
  metrics,
  onSelectCategory,
}) => {
  return (
    <section id="dashboard" className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#CBD5E1]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-4 bg-[#FF9933] rounded-xs"></span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#627D98]">
                FORCE STRUCTURE AUDIT
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#102A43]">
              Inventory Dashboard &amp; Analytics
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#627D98] max-w-md mt-2 md:mt-0">
            High-level distribution analysis across categories, domestic manufacturing share, and data confidence levels.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Key KPI Cards & Origin Breakdown (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* 4 Mini Stat Blocks */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs">
                <span className="font-mono text-[11px] text-[#627D98] uppercase block">
                  AIRCRAFT TYPES LISTED
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43] mt-1 block">
                  {metrics.totalTypesListed}
                </span>
                <span className="text-[11px] text-[#627D98]">Every listed platform accounted</span>
              </div>

              <div className="p-4 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs">
                <span className="font-mono text-[11px] text-[#627D98] uppercase block">
                  ESTIMATED FLEET SIZE
                </span>
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#102A43] mt-1 block">
                  ~1,720–1,940
                </span>
                <span className="text-[10px] text-[#D97706] font-mono font-medium uppercase">
                  Subject to verification
                </span>
              </div>

              <div className="p-4 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs">
                <span className="font-mono text-[11px] text-[#627D98] uppercase block">
                  DOCUMENTED QUANTITIES
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-[#138808] mt-1 block">
                  {metrics.documentedQuantityCount} / {metrics.totalTypesListed}
                </span>
                <span className="text-[11px] text-[#627D98]">High / medium confidence</span>
              </div>

              <div className="p-4 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs">
                <span className="font-mono text-[11px] text-[#627D98] uppercase block">
                  AIRCRAFT CATEGORIES
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43] mt-1 block">
                  {metrics.totalCategories}
                </span>
                <span className="text-[11px] text-[#627D98]">Operational divisions</span>
              </div>
            </div>

            {/* Origin Ratio Card: Domestic vs Foreign */}
            <div className="p-5 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase font-bold text-[#627D98] block">
                    DESIGN &amp; PRODUCTION ORIGIN
                  </span>
                  <h4 className="font-heading font-bold text-base text-[#102A43]">
                    Atmanirbhar Bharat Industrial Share
                  </h4>
                </div>
                <span className="font-mono text-sm font-bold text-[#FF9933] bg-white px-2 py-0.5 border border-[#CBD5E1] rounded-xs">
                  {metrics.domesticPercentage}% Indigenous / Domestic
                </span>
              </div>

              {/* Stacked Progress Bar */}
              <div className="w-full bg-[#E2E8F0] h-3 rounded-xs overflow-hidden flex">
                <div
                  className="bg-[#FF9933] h-full"
                  style={{ width: `${metrics.domesticPercentage}%` }}
                  title={`Domestic: ${metrics.domesticCount} types`}
                />
                <div
                  className="bg-[#102A43] h-full"
                  style={{ width: `${100 - metrics.domesticPercentage}%` }}
                  title={`Foreign Lineage: ${metrics.foreignCount} types`}
                />
              </div>

              {/* Legend */}
              <div className="flex items-center justify-between text-xs font-mono text-[#334E68] pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#FF9933] rounded-xs"></span>
                  <span>
                    Domestic / HAL / TASL ({metrics.domesticCount} types)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#102A43] rounded-xs"></span>
                  <span>Foreign Lineage ({metrics.foreignCount} types)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Category Distribution Chart (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F7F9FC] p-5 sm:p-6 border border-[#CBD5E1] rounded-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 size={18} className="text-[#102A43]" />
                  <h4 className="font-heading font-bold text-base text-[#102A43]">
                    Aircraft Types by Operational Category
                  </h4>
                </div>
                <span className="font-mono text-xs text-[#627D98]">Click row to filter</span>
              </div>

              {/* Category Distribution Bar Chart */}
              <div className="space-y-3">
                {metrics.categoryDistribution.map(({ category, count }) => {
                  const percent = Math.round((count / metrics.totalTypesListed) * 100);

                  return (
                    <button
                      key={category}
                      onClick={() => onSelectCategory(category)}
                      className="w-full text-left group p-2 hover:bg-white rounded-xs transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold mb-1">
                        <span className="text-[#102A43] group-hover:text-[#FF9933] transition-colors truncate max-w-[70%]">
                          {category}
                        </span>
                        <span className="font-mono text-[#627D98]">
                          <strong>{count}</strong> types ({percent}%)
                        </span>
                      </div>
                      <div className="w-full bg-[#E2E8F0] h-2 rounded-xs overflow-hidden">
                        <div
                          className="bg-[#102A43] group-hover:bg-[#FF9933] h-full transition-all duration-300"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Methodology Explainer Note Box */}
            <div className="mt-6 pt-4 border-t border-[#CBD5E1] flex items-start gap-3 bg-white p-3.5 rounded-xs border border-[#E2E8F0] text-xs text-[#486581]">
              <Info size={16} className="text-[#FF9933] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-[#102A43]">Why Inventory Estimates Differ:</strong> Open-source
                fleet counts fluctuate based on whether figures tally total airframes delivered,
                operational squadron strength, trainer variants, airframes undergoing depot-level
                overhaul (BRD), structural phase-outs, or future pipeline deliveries under contract.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
