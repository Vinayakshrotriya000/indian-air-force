import React from 'react';
import { ExternalLink, ShieldAlert, FileText, AlertTriangle, Scale, Globe } from 'lucide-react';

export const AboutAndDisclaimer: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#F7F9FC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#CBD5E1]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-4 bg-[#FF9933] rounded-xs"></span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#627D98]">
                EDITORIAL STANDARDS &amp; LEGAL NOTICES
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#102A43]">
              About &amp; Disclaimer Notices
            </h2>
          </div>
          <div className="mt-2 md:mt-0 flex items-center gap-2">
            <a
              href="https://indianairforce.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#102A43] text-white hover:bg-[#1f3f61] rounded-xs text-xs font-semibold tracking-wide transition-colors"
            >
              <Globe size={14} className="text-[#FF9933]" />
              <span>Official Indian Air Force Portal</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* 4 Cards Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#334E68]">
          {/* Card 1: About the Website */}
          <div className="bg-white p-6 rounded-xs border border-[#CBD5E1] shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#102A43]">
              <FileText size={18} className="text-[#FF9933]" />
              <h3 className="font-heading font-bold text-base text-[#102A43]">
                About the Website
              </h3>
            </div>
            <p className="leading-relaxed">
              This portal is an independent educational and research reference covering aircraft
              associated with the Indian Air Force for the reference year 2026. Designed with a
              minimal, high-precision editorial layout inspired by authoritative defense reference
              compendiums, it compiles verified specifications, procurement histories, and
              authentic photography.
            </p>
            <div className="p-3 bg-[#F0F4F8] rounded-xs font-mono text-[11px] text-[#486581]">
              Independent open-source encyclopedia • No classified data or official endorsement.
            </div>
          </div>

          {/* Card 2: Data Disclaimer */}
          <div className="bg-white p-6 rounded-xs border border-[#CBD5E1] shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#102A43]">
              <AlertTriangle size={18} className="text-[#D97706]" />
              <h3 className="font-heading font-bold text-base text-[#102A43]">
                Data &amp; Fleet Disclaimer
              </h3>
            </div>
            <p className="leading-relaxed">
              Aircraft quantities, serviceability ratings, procurement costs, and operational
              deployments are synthesized from publicly available documents (Parliamentary Standing
              Committee reports, Ministry of Defence annual audits, Press Information Bureau releases,
              and reputable defense publications). <strong>Estimated inventory figures must not be
              interpreted as a verified count of operational airframes.</strong>
            </p>
            <p className="text-xs text-[#627D98]">
              Operational fleet counts vary continually due to scheduled depot overhauls, training
              cycles, reserve status, and ongoing serial deliveries.
            </p>
          </div>

          {/* Card 3: Pricing Disclaimer */}
          <div className="bg-white p-6 rounded-xs border border-[#CBD5E1] shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#102A43]">
              <Scale size={18} className="text-[#138808]" />
              <h3 className="font-heading font-bold text-base text-[#102A43]">
                Pricing &amp; Procurement Disclaimer
              </h3>
            </div>
            <p className="leading-relaxed">
              Aircraft procurement expenditures depend on comprehensive contract scope: airframe flyaway
              costs, India-specific enhancements, specialized weapons packages, maintenance tooling,
              performance-based logistics, infrastructure development, and inflation indices.
            </p>
            <p className="leading-relaxed text-[#486581]">
              Published estimates reflect historical contract milestones and must not be treated as
              current commercial replacement prices. All currency conversions to INR specify the
              historical or contextual baseline exchange rates.
            </p>
          </div>

          {/* Card 4: Official Affiliation & Copyright */}
          <div className="bg-white p-6 rounded-xs border border-[#CBD5E1] shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#102A43]">
              <ShieldAlert size={18} className="text-[#102A43]" />
              <h3 className="font-heading font-bold text-base text-[#102A43]">
                Official Standing &amp; Copyright Notice
              </h3>
            </div>
            <p className="leading-relaxed">
              <strong>Non-Affiliation Statement:</strong> This website is an independent reference
              project. It is not affiliated with, authorized by, sponsored by, or endorsed by the
              Indian Air Force, the Ministry of Defence, or the Government of India.
            </p>
            <p className="text-xs text-[#627D98] pt-2 border-t border-[#E2E8F0]">
              All aircraft photography belongs to their respective official photographers, Indian
              Air Force media archives, and Wikimedia Commons licensors under fair use and open
              educational guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
