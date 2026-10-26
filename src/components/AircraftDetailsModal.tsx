import React, { useEffect, useState } from 'react';
import { Aircraft } from '../types/aircraft';
import {
  X,
  Shield,
  ExternalLink,
  DollarSign,
  Layers,
  Wrench,
  FileText,
  Calendar,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ImageOff,
} from 'lucide-react';

interface AircraftDetailsModalProps {
  aircraft: Aircraft | null;
  onClose: () => void;
}

export const AircraftDetailsModal: React.FC<AircraftDetailsModalProps> = ({
  aircraft,
  onClose,
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'weapons' | 'pricing' | 'fleet' | 'sources'>('overview');

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (aircraft) {
      document.body.style.overflow = 'hidden';
      setImageFailed(false);
      setActiveTab('overview');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [aircraft]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!aircraft) return null;

  const getConfidenceBadge = (confidence: string) => {
    switch (confidence) {
      case 'High':
        return 'bg-[#138808]/15 text-[#138808] border-[#138808]/40';
      case 'Medium':
        return 'bg-[#FF9933]/15 text-[#B45309] border-[#FF9933]/40';
      default:
        return 'bg-[#627D98]/15 text-[#486581] border-[#627D98]/30';
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-aircraft-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
    >
      <div
        className="relative bg-white w-full max-w-4xl rounded-xs border border-[#CBD5E1] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* National Tricolor Top Stripe */}
        <div className="h-1.5 w-full grid grid-cols-3 shrink-0">
          <div className="bg-[#FF9933]"></div>
          <div className="bg-white"></div>
          <div className="bg-[#138808]"></div>
        </div>

        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-[#E2E8F0] flex items-start justify-between gap-4 bg-[#F7F9FC] shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#627D98]">
                {aircraft.category}
              </span>
              <span className="text-[#CBD5E1]">•</span>
              <span className="font-mono text-[10px] sm:text-xs text-[#102A43] font-semibold">
                {aircraft.countryOfOrigin}
              </span>
              {aircraft.isDomestic && (
                <span className="px-1.5 py-0.2 bg-[#FF9933] text-[#102A43] font-mono text-[9px] font-bold uppercase rounded-xs">
                  ATMANIRBHAR BHARAT
                </span>
              )}
            </div>
            <h2
              id="modal-aircraft-title"
              className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-[#102A43] leading-tight"
            >
              {aircraft.name}
            </h2>
            <p className="font-mono text-xs text-[#627D98] mt-0.5">{aircraft.designation}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close specifications dialog"
            className="p-1.5 rounded-xs text-[#627D98] hover:text-[#102A43] hover:bg-[#E2E8F0] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-6 border-b border-[#E2E8F0] bg-white overflow-x-auto no-scrollbar shrink-0 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#102A43] text-[#102A43]'
                : 'border-transparent text-[#627D98] hover:text-[#102A43]'
            }`}
          >
            Overview &amp; Capabilities
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'specs'
                ? 'border-[#102A43] text-[#102A43]'
                : 'border-transparent text-[#627D98] hover:text-[#102A43]'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('weapons')}
            className={`py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'weapons'
                ? 'border-[#102A43] text-[#102A43]'
                : 'border-transparent text-[#627D98] hover:text-[#102A43]'
            }`}
          >
            Weapons &amp; Roles
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'pricing'
                ? 'border-[#102A43] text-[#102A43]'
                : 'border-transparent text-[#627D98] hover:text-[#102A43]'
            }`}
          >
            Procurement Cost
          </button>
          <button
            onClick={() => setActiveTab('fleet')}
            className={`py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'fleet'
                ? 'border-[#102A43] text-[#102A43]'
                : 'border-transparent text-[#627D98] hover:text-[#102A43]'
            }`}
          >
            Fleet &amp; Service Status
          </button>
          <button
            onClick={() => setActiveTab('sources')}
            className={`py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'sources'
                ? 'border-[#102A43] text-[#102A43]'
                : 'border-transparent text-[#627D98] hover:text-[#102A43]'
            }`}
          >
            Sources &amp; References
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {/* TAB 1: OVERVIEW & CAPABILITIES */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Photograph Hero Banner */}
              <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-[#CBD5E1] bg-[#102A43]">
                {!imageFailed ? (
                  <img
                    src={aircraft.imageUrl}
                    alt={aircraft.imageAlt}
                    onError={() => setImageFailed(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#9FB3C8]">
                    <ImageOff size={32} className="mb-2 text-[#627D98]" />
                    <span className="font-mono text-sm font-bold text-white uppercase">
                      Photograph unavailable
                    </span>
                    <span className="text-xs text-[#829AB1] mt-1">{aircraft.name}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#FF9933] block">
                      {aircraft.primaryRole}
                    </span>
                    <h3 className="font-heading text-xl font-bold">{aircraft.name}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#D9E2EC] bg-black/60 px-2 py-0.5 rounded-xs border border-white/20">
                    {aircraft.imageAttribution}
                  </span>
                </div>
              </div>

              {/* Quick Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F7F9FC] p-4 rounded-xs border border-[#E2E8F0]">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#627D98] block">
                    MANUFACTURER
                  </span>
                  <span className="font-semibold text-xs text-[#102A43]">
                    {aircraft.manufacturer}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#627D98] block">
                    SERVICE ENTRY
                  </span>
                  <span className="font-mono font-bold text-xs text-[#102A43]">
                    {aircraft.specs.serviceEntryYear}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#627D98] block">
                    SERVICE STATUS
                  </span>
                  <span className="font-mono font-bold text-xs text-[#138808]">
                    {aircraft.fleet.status}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#627D98] block">
                    FLEET SIZE
                  </span>
                  <span className="font-mono font-bold text-xs text-[#102A43]">
                    {aircraft.fleet.estimatedQuantity.split('(')[0]}
                  </span>
                </div>
              </div>

              {/* Key Capabilities Section */}
              <div>
                <h4 className="font-heading font-bold text-base text-[#102A43] mb-3 flex items-center gap-2">
                  <Shield size={16} className="text-[#FF9933]" />
                  <span>Key Capabilities</span>
                </h4>
                <ul className="space-y-2">
                  {aircraft.keyCapabilities.map((cap, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334E68] bg-[#F7F9FC] p-3 rounded-xs border border-[#E2E8F0]"
                    >
                      <CheckCircle2 size={16} className="text-[#138808] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Secondary Roles */}
              {aircraft.secondaryRoles.length > 0 && (
                <div>
                  <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#627D98] mb-2">
                    Secondary &amp; Mission Roles
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {aircraft.secondaryRoles.map((role, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white border border-[#CBD5E1] text-[#102A43] rounded-xs font-mono text-xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TECHNICAL SPECIFICATIONS TABLE */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#CBD5E1]">
                <h4 className="font-heading font-bold text-base text-[#102A43]">
                  Technical Specifications Table
                </h4>
                <span className="font-mono text-xs text-[#627D98]">Publicly Documented Metrics</span>
              </div>

              <div className="overflow-x-auto border border-[#CBD5E1] rounded-xs">
                <table className="w-full text-left text-xs font-mono">
                  <tbody className="divide-y divide-[#E2E8F0]">
                    <tr className="bg-[#F7F9FC]">
                      <td className="py-2.5 px-4 font-semibold text-[#627D98] w-1/3">
                        Aircraft Type
                      </td>
                      <td className="py-2.5 px-4 font-sans font-medium text-[#102A43]">
                        {aircraft.specs.aircraftType}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-[#627D98]">Length</td>
                      <td className="py-2.5 px-4 text-[#102A43]">{aircraft.specs.length}</td>
                    </tr>
                    <tr className="bg-[#F7F9FC]">
                      <td className="py-2.5 px-4 font-semibold text-[#627D98]">
                        Wingspan / Rotor Diameter
                      </td>
                      <td className="py-2.5 px-4 text-[#102A43]">
                        {aircraft.specs.wingspanOrRotorDiameter}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-[#627D98]">Height</td>
                      <td className="py-2.5 px-4 text-[#102A43]">{aircraft.specs.height}</td>
                    </tr>
                    <tr className="bg-[#F7F9FC]">
                      <td className="py-2.5 px-4 font-semibold text-[#627D98]">
                        Maximum Take-Off Weight (MTOW)
                      </td>
                      <td className="py-2.5 px-4 text-[#102A43] font-bold">
                        {aircraft.specs.maxTakeoffWeight}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-[#627D98]">Maximum Speed</td>
                      <td className="py-2.5 px-4 text-[#102A43] font-bold text-[#FF9933]">
                        {aircraft.specs.maxSpeed}
                      </td>
                    </tr>
                    {aircraft.specs.cruiseSpeed && (
                      <tr className="bg-[#F7F9FC]">
                        <td className="py-2.5 px-4 font-semibold text-[#627D98]">Cruise Speed</td>
                        <td className="py-2.5 px-4 text-[#102A43]">{aircraft.specs.cruiseSpeed}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-[#627D98]">Ferry Range</td>
                      <td className="py-2.5 px-4 text-[#102A43]">{aircraft.specs.ferryRange}</td>
                    </tr>
                    {aircraft.specs.combatRadiusOrOperationalRange && (
                      <tr className="bg-[#F7F9FC]">
                        <td className="py-2.5 px-4 font-semibold text-[#627D98]">
                          Combat Radius / Operational Range
                        </td>
                        <td className="py-2.5 px-4 text-[#102A43] font-bold">
                          {aircraft.specs.combatRadiusOrOperationalRange}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-[#627D98]">Service Ceiling</td>
                      <td className="py-2.5 px-4 text-[#102A43]">{aircraft.specs.serviceCeiling}</td>
                    </tr>
                    <tr className="bg-[#F7F9FC]">
                      <td className="py-2.5 px-4 font-semibold text-[#627D98]">
                        Powerplant &amp; Engine Model
                      </td>
                      <td className="py-2.5 px-4 text-[#102A43]">
                        {aircraft.specs.engineModel} ({aircraft.specs.engineCount}{' '}
                        {aircraft.specs.engineCount === 1 ? 'Engine' : 'Engines'})
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-[#627D98]">Flight Crew</td>
                      <td className="py-2.5 px-4 text-[#102A43]">{aircraft.specs.crew}</td>
                    </tr>
                    {aircraft.specs.payloadCapacity && (
                      <tr className="bg-[#F7F9FC]">
                        <td className="py-2.5 px-4 font-semibold text-[#627D98]">
                          Payload Capacity
                        </td>
                        <td className="py-2.5 px-4 text-[#102A43] font-bold">
                          {aircraft.specs.payloadCapacity}
                        </td>
                      </tr>
                    )}
                    {aircraft.specs.passengerCapacity && (
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-[#627D98]">
                          Troop / Passenger Capacity
                        </td>
                        <td className="py-2.5 px-4 text-[#102A43]">
                          {aircraft.specs.passengerCapacity}
                        </td>
                      </tr>
                    )}
                    {aircraft.specs.hoverPerformance && (
                      <tr className="bg-[#F7F9FC]">
                        <td className="py-2.5 px-4 font-semibold text-[#627D98]">
                          Hover Performance (HIGE/HOGE)
                        </td>
                        <td className="py-2.5 px-4 text-[#102A43]">
                          {aircraft.specs.hoverPerformance}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-[#627D98]">
                        Radar &amp; Avionics
                      </td>
                      <td className="py-2.5 px-4 font-sans text-[#102A43]">
                        {aircraft.specs.radarAndAvionics}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: WEAPONS AND MISSION ROLES */}
          {activeTab === 'weapons' && (
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#CBD5E1]">
                <h4 className="font-heading font-bold text-base text-[#102A43]">
                  Weapons &amp; Mission Equipment Compatibility
                </h4>
                <p className="text-xs text-[#627D98] mt-0.5">
                  Based strictly on publicly documented capabilities cleared for Indian Air Force configurations.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {aircraft.weaponsAndEquipment.map((weapon, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs flex items-center gap-3"
                  >
                    <span className="w-6 h-6 rounded-xs bg-[#102A43] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-xs sm:text-sm text-[#102A43]">{weapon}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#F0F4F8] border border-[#D9E2EC] rounded-xs text-xs text-[#486581] flex items-start gap-2">
                <AlertCircle size={16} className="text-[#627D98] shrink-0 mt-0.5" />
                <p>
                  Compatibility indicates verified integration or flight certification. Not all
                  compatible weapon profiles are simultaneously mounted or permanently deployed in
                  daily peace-time operations.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: ESTIMATED PRICE & PROCUREMENT COST */}
          {activeTab === 'pricing' && (
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#CBD5E1]">
                <h4 className="font-heading font-bold text-base text-[#102A43]">
                  Estimated Price &amp; Procurement Cost
                </h4>
                <p className="text-xs text-[#627D98] mt-0.5">
                  Transparent breakdown distinguishing flyaway unit costs from complete procurement packages.
                </p>
              </div>

              {/* Main Price Card */}
              <div className="p-4 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs uppercase text-[#627D98] block">
                      ESTIMATED UNIT ACQUISITION COST
                    </span>
                    <span className="font-mono text-xl sm:text-2xl font-bold text-[#102A43]">
                      {aircraft.cost.unitCostFormatted}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-white border border-[#CBD5E1] rounded-xs text-xs font-mono font-bold text-[#B45309] w-max">
                    {aircraft.cost.costType}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#E2E8F0] text-xs">
                  <div>
                    <span className="font-mono text-[11px] text-[#627D98] block">
                      ORIGINAL CONTRACT SUM / CURRENCY
                    </span>
                    <span className="font-medium text-[#102A43]">
                      {aircraft.cost.originalAmount} ({aircraft.cost.originalCurrency})
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#627D98] block">
                      APPROXIMATE INR VALUE
                    </span>
                    <span className="font-medium text-[#102A43]">{aircraft.cost.estimatedInr}</span>
                  </div>
                </div>
              </div>

              {/* Detailed Explanation */}
              <div className="p-4 bg-white border border-[#CBD5E1] rounded-xs space-y-2 text-xs">
                <h5 className="font-heading font-semibold text-[#102A43]">
                  Procurement Structure &amp; Cost Scope
                </h5>
                <p className="text-[#334E68] leading-relaxed">
                  {aircraft.cost.pricingExplanation}
                </p>
                {aircraft.cost.contractContext && (
                  <p className="text-[#486581] leading-relaxed pt-2 border-t border-[#F0F4F8]">
                    <strong className="text-[#102A43]">Contract Context:</strong>{' '}
                    {aircraft.cost.contractContext}
                  </p>
                )}
              </div>

              {/* Source & Date */}
              <div className="text-xs text-[#627D98] font-mono flex items-center justify-between bg-[#F0F4F8] p-2.5 rounded-xs">
                <span>DOCUMENTED SOURCE: {aircraft.cost.sourceAndDate}</span>
              </div>
            </div>
          )}

          {/* TAB 5: FLEET QUANTITY & SERVICE STATUS */}
          {activeTab === 'fleet' && (
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#CBD5E1]">
                <h4 className="font-heading font-bold text-base text-[#102A43]">
                  Fleet Quantity &amp; Service Status
                </h4>
                <p className="text-xs text-[#627D98] mt-0.5">
                  Verified operational deployment status, reporting dates, and fleet notes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs">
                  <span className="font-mono text-[11px] text-[#627D98] block">
                    ESTIMATED FLEET QUANTITY
                  </span>
                  <span className="font-mono text-base font-bold text-[#102A43] mt-1 block">
                    {aircraft.fleet.estimatedQuantity}
                  </span>
                </div>
                <div className="p-3 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs">
                  <span className="font-mono text-[11px] text-[#627D98] block">SERVICE STATUS</span>
                  <span className="font-mono text-base font-bold text-[#138808] mt-1 block">
                    {aircraft.fleet.status}
                  </span>
                </div>
                <div className="p-3 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs">
                  <span className="font-mono text-[11px] text-[#627D98] block">
                    ESTIMATE CONFIDENCE
                  </span>
                  <span
                    className={`inline-block px-2 py-0.5 rounded-xs font-mono text-xs font-bold mt-1 border ${getConfidenceBadge(
                      aircraft.fleet.confidence
                    )}`}
                  >
                    {aircraft.fleet.confidence} Confidence
                  </span>
                </div>
              </div>

              {/* Delivery and Pipeline Tracking */}
              {(aircraft.fleet.deliveredCount || aircraft.fleet.orderedCount) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-white border border-[#CBD5E1] rounded-xs text-xs font-mono">
                  {aircraft.fleet.deliveredCount && (
                    <div>
                      <span className="text-[#627D98] block">DELIVERED TO DATE</span>
                      <span className="font-bold text-[#102A43]">
                        {aircraft.fleet.deliveredCount}
                      </span>
                    </div>
                  )}
                  {aircraft.fleet.orderedCount && (
                    <div>
                      <span className="text-[#627D98] block">ORDERED / FUTURE PIPELINE</span>
                      <span className="font-bold text-[#102A43]">{aircraft.fleet.orderedCount}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Operational Squadrons & Notes */}
              <div className="p-4 bg-white border border-[#CBD5E1] rounded-xs space-y-2 text-xs">
                <h5 className="font-heading font-semibold text-[#102A43]">
                  Operational Squadrons &amp; Theater Deployments
                </h5>
                <p className="text-[#334E68] leading-relaxed">{aircraft.fleet.notes}</p>
                <div className="pt-2 border-t border-[#F0F4F8] text-[11px] text-[#627D98] font-mono flex items-center justify-between">
                  <span>Reporting Date: {aircraft.fleet.reportingDate}</span>
                  <span>Source: {aircraft.fleet.source}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SOURCES AND REFERENCES */}
          {activeTab === 'sources' && (
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#CBD5E1]">
                <h4 className="font-heading font-bold text-base text-[#102A43]">
                  Data Sources &amp; Fact-Checking Citations
                </h4>
                <p className="text-xs text-[#627D98] mt-0.5">
                  Verified public references from official government bodies, manufacturer releases, and defense audits.
                </p>
              </div>

              <div className="space-y-3">
                {aircraft.sources.map((src, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-[#F7F9FC] border border-[#CBD5E1] rounded-xs space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="font-semibold text-xs sm:text-sm text-[#102A43]">
                        {src.title}
                      </h5>
                      {src.url && (
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#102A43] hover:text-[#FF9933] shrink-0 p-1"
                          title="Open official source link"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#627D98] font-mono">
                      <span>{src.organization}</span>
                      <span>•</span>
                      <span>{src.date}</span>
                    </div>
                    {src.note && (
                      <p className="text-xs text-[#486581] pt-1 border-t border-[#E2E8F0]">
                        {src.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-[#F7F9FC] border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#627D98] shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#138808]"></span>
            <span>OPEN-SOURCE REFERENCE • 2026 AUDIT</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#102A43] text-white hover:bg-[#1f3f61] rounded-xs font-bold tracking-wider uppercase transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
