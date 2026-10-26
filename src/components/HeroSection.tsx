import React from 'react';
import { ArrowRight, Layers, Plane, Info, ShieldCheck, Calendar } from 'lucide-react';
import { InventoryMetrics } from '../utils/inventoryLogic';

interface HeroSectionProps {
  metrics: InventoryMetrics;
  onExploreClick: () => void;
  onViewInventoryClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  metrics,
  onExploreClick,
  onViewInventoryClick,
}) => {
  return (
    <section id="home" className="relative bg-white border-b border-[#E2E8F0] overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#102A43 1px, transparent 1px), radial-gradient(#102A43 1px, #ffffff 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Editorial Information */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Top Tag & National Saffron Accent */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F4F8] border border-[#D9E2EC] rounded-xs w-max">
              <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse"></span>
              <span className="font-mono text-[11px] font-bold text-[#102A43] tracking-wider uppercase">
                STRATEGIC AEROSPACE REFERENCE • 2026 AUDIT
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#102A43] tracking-tight leading-tight">
                INDIAN AIR FORCE
              </h1>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-[#627D98] mt-1">
                Aircraft Inventory 2026
              </h2>
            </div>

            {/* Core Brief Body Copy */}
            <p className="text-base sm:text-lg text-[#334E68] leading-relaxed max-w-2xl">
              Explore the aircraft that support India&apos;s air defence, air mobility, training,
              surveillance, and aerial refuelling capabilities across 30 documented types and variants.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#102A43] text-white hover:bg-[#1f3f61] rounded-xs font-semibold text-xs sm:text-sm tracking-wide shadow-xs active:scale-95 transition-all"
              >
                <span>EXPLORE AIRCRAFT</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={onViewInventoryClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#102A43] border border-[#BCCCDC] hover:bg-[#F7F9FC] rounded-xs font-semibold text-xs sm:text-sm tracking-wide active:scale-95 transition-all"
              >
                <span>VIEW INVENTORY</span>
                <Layers size={16} className="text-[#627D98]" />
              </button>
            </div>

            {/* Transparent Methodology Disclaimer Note */}
            <div className="pt-2 flex items-start gap-2 text-xs text-[#627D98] max-w-xl">
              <Info size={15} className="shrink-0 mt-0.5 text-[#FF9933]" />
              <p className="leading-normal">
                <strong className="text-[#102A43]">Methodology Note:</strong> Fleet statistics are
                drawn from official parliamentary answers, Ministry of Defence publications, and
                defense aerospace reviews. Approximations account for maintenance cycles, phased
                retirements, and pipeline orders.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Authentic Aircraft Photographic Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xs overflow-hidden border border-[#CBD5E1] shadow-md bg-[#102A43]">
              <div className="relative aspect-4/3 w-full">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Wmea7m6O6Sq8wiRRcYKRf7jBgHDiIGsIC0i7fj_dnDvqrYRi6PPg0_-ii_n4N4HQK0-mlxbvnh6KgU1pPOhs-1sY6Bs15xiltFH1HAiDeybDb6oB9Xo3o_2AKGfGWXadjC8nSybGyJRSoP81x9aqgB-tJrJZi1rPChLKDW57eUK_QMsIueCpob8rS1s-qc_U4FQxgMu28IOPCLxtDwgra4bwWkSJShnWtEi5HA98Appf4OKtRVOQK5q8g"
                  alt="Indian Air Force Sukhoi Su-30MKI multirole air superiority fighter jet"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/90 via-transparent to-black/20" />
                
                {/* Image Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF9933] block">
                      AIR DOMINANCE BACKBONE
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg">
                      Sukhoi Su-30MKI (Flanker-H)
                    </h3>
                    <p className="text-[11px] text-[#D9E2EC] line-clamp-1">
                      HAL Nashik licensed production • 260+ operational in service
                    </p>
                  </div>
                  <span className="shrink-0 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-[10px] font-mono text-[#D9E2EC] rounded-xs border border-white/20">
                    IAF PHOTOGRAPH
                  </span>
                </div>
              </div>

              {/* Caption Bar */}
              <div className="px-3 py-2 bg-[#0B1D30] text-[11px] text-[#9FB3C8] font-mono flex items-center justify-between border-t border-[#1E3A56]">
                <span>NO. 20 SQN &apos;LIGHTNINGS&apos;</span>
                <span className="text-[#FF9933]">SUPERCRUISE CAPABLE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Compact Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-[#E2E8F0]">
          {/* Card 1: Aircraft Categories */}
          <div className="bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs p-4 hover:border-[#102A43] transition-colors">
            <div className="flex items-center justify-between text-[#627D98] mb-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                1. AIRCRAFT CATEGORIES
              </span>
              <Layers size={16} className="text-[#102A43]" />
            </div>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43]">
              {metrics.totalCategories}
            </div>
            <p className="text-xs text-[#627D98] mt-1">
              Fighters, Transport, Helos, Trainers, Surveillance, Tankers
            </p>
          </div>

          {/* Card 2: Aircraft Types Listed */}
          <div className="bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs p-4 hover:border-[#102A43] transition-colors">
            <div className="flex items-center justify-between text-[#627D98] mb-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                2. AIRCRAFT TYPES LISTED
              </span>
              <Plane size={16} className="text-[#102A43]" />
            </div>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43]">
              {metrics.totalTypesListed}
            </div>
            <p className="text-xs text-[#627D98] mt-1">
              Complete catalog with specifications and procurement costs
            </p>
          </div>

          {/* Card 3: Estimated Fleet Size */}
          <div className="bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs p-4 hover:border-[#102A43] transition-colors">
            <div className="flex items-center justify-between text-[#627D98] mb-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                3. ESTIMATED FLEET SIZE
              </span>
              <ShieldCheck size={16} className="text-[#138808]" />
            </div>
            <div className="font-heading text-xl sm:text-2xl font-bold text-[#102A43]">
              ~1,720–1,940
            </div>
            <p className="text-[11px] text-[#627D98] mt-1">
              <span className="text-[#D97706] font-medium font-mono text-[10px] uppercase">
                Approx. Estimate
              </span>{' '}
              • Depends on inventory methodology
            </p>
          </div>

          {/* Card 4: Reference Year */}
          <div className="bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs p-4 hover:border-[#102A43] transition-colors">
            <div className="flex items-center justify-between text-[#627D98] mb-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                4. INVENTORY REFERENCE YEAR
              </span>
              <Calendar size={16} className="text-[#FF9933]" />
            </div>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43]">
              2026
            </div>
            <p className="text-xs text-[#627D98] mt-1">
              Reflects Tejas Mk1A and C295 deliveries in progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
