import React, { useState } from 'react';
import { Aircraft } from '../types/aircraft';
import { Eye, Shield, Globe, Award, DollarSign, ImageOff } from 'lucide-react';

interface AircraftCardProps {
  aircraft: Aircraft;
  onViewSpecs: (aircraft: Aircraft) => void;
}

export const AircraftCard: React.FC<AircraftCardProps> = ({ aircraft, onViewSpecs }) => {
  const [imageFailed, setImageFailed] = useState(false);

  // Status Badge Styling Helper
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In service':
        return 'bg-[#138808]/10 text-[#138808] border-[#138808]/30';
      case 'Deliveries underway':
      case 'Ordered':
        return 'bg-[#FF9933]/15 text-[#B45309] border-[#FF9933]/40';
      case 'In phased retirement':
        return 'bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/30';
      default:
        return 'bg-[#627D98]/10 text-[#486581] border-[#627D98]/30';
    }
  };

  return (
    <article className="group bg-white rounded-xs border border-[#CBD5E1] hover:border-[#102A43] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Real Aircraft Photography Container */}
        <div className="relative aspect-16/10 w-full bg-[#0F1E2E] overflow-hidden">
          {!imageFailed ? (
            <img
              src={aircraft.imageUrl}
              alt={aircraft.imageAlt || `${aircraft.name} of the Indian Air Force`}
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#102A43] text-[#9FB3C8]">
              <ImageOff size={28} className="mb-2 text-[#627D98]" />
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Photograph unavailable
              </span>
              <span className="text-[11px] text-[#829AB1] mt-1">{aircraft.name}</span>
            </div>
          )}

          {/* Top Gradient & Badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Category Chip Top Left */}
          <div className="absolute top-2.5 left-2.5">
            <span className="px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold tracking-wider uppercase bg-[#102A43]/90 text-white border border-white/20 backdrop-blur-xs">
              {aircraft.category.replace(' and Combat Aircraft', '').replace(' Aircraft', '')}
            </span>
          </div>

          {/* Domestic / Indigenous Emblem Top Right */}
          {aircraft.isDomestic && (
            <div className="absolute top-2.5 right-2.5">
              <span className="px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold tracking-wider uppercase bg-[#FF9933] text-[#102A43] shadow-xs">
                INDIGENOUS
              </span>
            </div>
          )}

          {/* Bottom Title on Image */}
          <div className="absolute bottom-2.5 left-3 right-3 text-white">
            <span className="text-[10px] font-mono text-[#D9E2EC] uppercase tracking-wider block">
              {aircraft.designation}
            </span>
            <h3 className="font-heading font-bold text-lg text-white leading-tight">
              {aircraft.name}
            </h3>
          </div>
        </div>

        {/* Card Body - Metadata Specs */}
        <div className="p-4 space-y-3 text-xs">
          {/* Primary Role */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#627D98] block">
              PRIMARY ROLE
            </span>
            <p className="font-semibold text-[#102A43] line-clamp-1">{aircraft.primaryRole}</p>
          </div>

          {/* Two-column Specs Summary */}
          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#F0F4F8]">
            {/* Manufacturer */}
            <div>
              <span className="text-[10px] font-mono uppercase text-[#627D98] block">
                MANUFACTURER
              </span>
              <p className="text-[#334E68] font-medium line-clamp-1" title={aircraft.manufacturer}>
                {aircraft.manufacturer.split('/')[0]}
              </p>
            </div>

            {/* Country of Origin */}
            <div>
              <span className="text-[10px] font-mono uppercase text-[#627D98] block">
                ORIGIN
              </span>
              <p className="text-[#334E68] font-medium line-clamp-1">
                {aircraft.countryOfOrigin}
              </p>
            </div>
          </div>

          {/* Fleet Quantity & Service Status */}
          <div className="pt-2 border-t border-[#F0F4F8] flex items-center justify-between gap-1">
            <div className="flex-1 pr-1">
              <span className="text-[10px] font-mono uppercase text-[#627D98] block">
                ESTIMATED FLEET
              </span>
              <p className="font-mono text-xs font-bold text-[#102A43] truncate">
                {aircraft.fleet.estimatedQuantity.split('(')[0]}
              </p>
            </div>
            <span
              className={`shrink-0 px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold uppercase border ${getStatusBadge(
                aircraft.fleet.status
              )}`}
            >
              {aircraft.fleet.status}
            </span>
          </div>

          {/* Estimated Unit / Procurement Cost */}
          <div className="p-2 bg-[#F7F9FC] border border-[#E2E8F0] rounded-xs">
            <div className="flex items-center justify-between text-[#627D98] text-[10px] font-mono uppercase">
              <span>ESTIMATED PROCUREMENT COST</span>
              <span className="text-[9px] text-[#B45309]">{aircraft.cost.costType}</span>
            </div>
            <p className="font-mono text-xs font-bold text-[#102A43] mt-0.5 truncate">
              {aircraft.cost.unitCostFormatted}
            </p>
          </div>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="p-4 pt-0">
        <button
          onClick={() => onViewSpecs(aircraft)}
          className="w-full py-2 px-3 bg-white hover:bg-[#102A43] text-[#102A43] hover:text-white border border-[#102A43] rounded-xs text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95"
        >
          <Eye size={14} />
          <span>VIEW SPECIFICATIONS</span>
        </button>
      </div>
    </article>
  );
};
