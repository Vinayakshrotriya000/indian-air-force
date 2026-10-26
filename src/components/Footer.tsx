import React from 'react';
import { IafEmblem } from './IafEmblem';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { AircraftCategory } from '../types/aircraft';

interface FooterProps {
  onSelectCategory: (cat: AircraftCategory | 'All') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: AircraftCategory | 'All') => {
    onSelectCategory(cat);
    const element = document.getElementById('inventory');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#102A43] text-white border-t border-[#1E3A56] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#243B53]">
          {/* Brand & Mission (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <IafEmblem size={44} className="shrink-0" />
              <div>
                <span className="font-heading font-bold text-lg tracking-wider text-white uppercase block leading-tight">
                  INDIAN AIR FORCE
                </span>
                <span className="font-mono text-xs font-semibold tracking-widest text-[#FF9933] uppercase">
                  AIRCRAFT INVENTORY 2026
                </span>
              </div>
            </div>
            <p className="text-xs text-[#9FB3C8] leading-relaxed max-w-sm">
              An independent, minimal aviation encyclopedia documenting the 30 aircraft types and
              variants associated with India&apos;s air defense, mobility, training, and strategic deterrence.
            </p>
            <div className="pt-1">
              <a
                href="https://indianairforce.nic.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#FF9933] hover:text-white transition-colors font-mono"
              >
                <span>Visit Official Indian Air Force Website</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Quick Categories Navigation (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF9933]">
              Fleet Categories
            </h4>
            <ul className="space-y-1.5 text-xs text-[#D9E2EC]">
              <li>
                <button
                  onClick={() => handleCategoryClick('Fighter Jets and Combat Aircraft')}
                  className="hover:text-white transition-colors"
                >
                  Fighter Jets and Combat Aircraft (6)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Transport Aircraft')}
                  className="hover:text-white transition-colors"
                >
                  Transport Aircraft (7)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Helicopters')}
                  className="hover:text-white transition-colors"
                >
                  Helicopters (7)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Training Aircraft')}
                  className="hover:text-white transition-colors"
                >
                  Training Aircraft (7)
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleCategoryClick('Surveillance and Special-Mission Aircraft')
                  }
                  className="hover:text-white transition-colors"
                >
                  Surveillance &amp; Special-Mission (2)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Aerial Refuelling Aircraft')}
                  className="hover:text-white transition-colors"
                >
                  Aerial Refuelling Tankers (1)
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Jump Top (3 Cols) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF9933]">
                Information
              </h4>
              <ul className="space-y-1.5 text-xs text-[#D9E2EC]">
                <li>
                  <a href="#dashboard" className="hover:text-white transition-colors">
                    Inventory Dashboard
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    Data Methodology
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    Pricing Disclaimers
                  </a>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#1E3A56] hover:bg-[#2E5580] text-xs font-mono font-semibold rounded-xs w-max transition-colors text-white"
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar with Tricolor Line & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#829AB1] font-mono gap-3">
          <p>
            © 2026 Independent Educational Reference • Not affiliated with the Indian Air Force or MoD India.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9933]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#138808]"></span>
            <span className="ml-1 text-[#D9E2EC]">INVENTORY REFERENCE 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
