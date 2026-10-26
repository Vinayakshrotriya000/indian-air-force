import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Printer, LayoutGrid, Download } from 'lucide-react';

interface TacticalDeckViewProps {
  onReturnToPortal: () => void;
}

export const TacticalDeckView: React.FC<TacticalDeckViewProps> = ({ onReturnToPortal }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 16;

  const scrollToSlide = (slideNum: number) => {
    let target = slideNum;
    if (target < 1) target = 1;
    if (target > totalSlides) target = totalSlides;
    setCurrentSlide(target);
    const element = document.getElementById(`tactical-slide-${target}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentSlide < totalSlides) scrollToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentSlide > 1) scrollToSlide(currentSlide - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="bg-[#070C15] text-[#F7F9FC] min-h-screen flex flex-col font-sans selection:bg-[#ffc174] selection:text-[#472a00]">
      {/* Top HUD Controller & Export Bar */}
      <header className="fixed top-0 w-full z-50 bg-[#070C15]/95 backdrop-blur-xl border-b border-white/10 pt-safe no-print">
        <div className="h-16 px-4 sm:px-6 flex items-center justify-between gap-2">
          {/* Title & Live Counter */}
          <div className="flex items-center gap-3">
            <button
              onClick={onReturnToPortal}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#111A2E] hover:bg-[#17233D] border border-[#1E2E4E] rounded-xs text-xs font-mono text-[#7bd0ff] transition-colors"
              title="Return to Main Portal"
            >
              <LayoutGrid size={14} />
              <span className="hidden sm:inline">Back to Portal</span>
            </button>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#F7F9FC]">
                  TACTICAL DECK
                </span>
                <span className="px-1.5 py-0.2 rounded-xs text-[10px] font-mono uppercase bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                  16 SLIDES READY
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#ffc174]">
                SLIDE {String(currentSlide).padStart(2, '0')} / 16 SLIDES (EXPORT READY)
              </span>
            </div>
          </div>

          {/* Slide Navigators & Print/PDF Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => scrollToSlide(currentSlide - 1)}
              disabled={currentSlide === 1}
              aria-label="Previous Slide"
              className="w-8 h-8 rounded-xs bg-[#111A2E] border border-[#1E2E4E] text-[#94A3B8] hover:text-[#ffc174] disabled:opacity-40 flex items-center justify-center transition-all"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scrollToSlide(currentSlide + 1)}
              disabled={currentSlide === totalSlides}
              aria-label="Next Slide"
              className="w-8 h-8 rounded-xs bg-[#111A2E] border border-[#1E2E4E] text-[#94A3B8] hover:text-[#ffc174] disabled:opacity-40 flex items-center justify-center transition-all"
            >
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => window.print()}
              className="px-2.5 py-1.5 rounded-xs bg-[#ffc174] text-[#472a00] font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md hover:bg-[#ffb95f] transition-all"
            >
              <Printer size={15} />
              <span className="hidden sm:inline">EXPORT 16-SLIDE PDF</span>
              <span className="sm:hidden">EXPORT</span>
            </button>
          </div>
        </div>

        {/* Quick Scrubber Pill Bar (1 to 16) */}
        <div className="px-4 sm:px-6 pb-2 overflow-x-auto no-scrollbar flex items-center gap-1 border-t border-white/5 pt-1.5">
          {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => scrollToSlide(num)}
              className={`px-2 py-0.5 rounded-xs text-[10px] font-mono transition-all ${
                currentSlide === num
                  ? 'bg-[#ffc174] text-[#472a00] font-bold'
                  : 'bg-[#111A2E] text-[#64748B] hover:text-[#F7F9FC]'
              }`}
            >
              {String(num).padStart(2, '0')}
            </button>
          ))}
        </div>
      </header>

      {/* 16 Slides Container */}
      <main className="flex flex-col relative w-full pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* SLIDE 01 */}
        <section
          id="tactical-slide-1"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse"></span>
              <span className="font-mono text-xs text-[#64748B] uppercase">
                AIR HQ • STRATEGIC THEATER READINESS
              </span>
            </div>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 01 / 16
            </span>
          </div>

          <div className="my-auto py-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#0B111E] border border-[#1E2E4E] text-[#FF9933] font-mono text-[11px] uppercase tracking-widest">
              DEFCON 3 ACTIVE • CLASSIFIED ORBAT 2026.04
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F9FC] tracking-tight">
                INDIAN AIR FORCE
              </h1>
              <h2 className="font-heading text-xl sm:text-2xl text-[#ffc174] font-semibold mt-1">
                ORDER OF BATTLE 2026
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] mt-2 max-w-xl">
                Strategic Theater Posture, Integrated Combat Aerospace Doctrine, and Total Fleet
                Inventory assessment across all five Operational Commands.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="bg-[#0B111E] rounded-xs p-3 border border-[#1E2E4E]">
                <span className="font-mono text-[10px] text-[#64748B] uppercase block">
                  ACTIVE INVENTORY
                </span>
                <div className="font-mono text-xl text-[#F7F9FC] font-bold mt-1">1,920+</div>
                <span className="text-[10px] text-[#10B981] font-mono">Airframes Deployed</span>
              </div>
              <div className="bg-[#0B111E] rounded-xs p-3 border border-[#1E2E4E]">
                <span className="font-mono text-[10px] text-[#64748B] uppercase block">
                  SQUADRON STATUS
                </span>
                <div className="font-mono text-xl text-[#ffc174] font-bold mt-1">31 / 42</div>
                <span className="text-[10px] text-[#F59E0B] font-mono">Authorized Force</span>
              </div>
              <div className="bg-[#0B111E] rounded-xs p-3 border border-[#1E2E4E]">
                <span className="font-mono text-[10px] text-[#64748B] uppercase block">
                  SERVICEABILITY
                </span>
                <div className="font-mono text-xl text-[#10B981] font-bold mt-1">84.6%</div>
                <span className="text-[10px] text-[#64748B] font-mono">Above 80% Baseline</span>
              </div>
              <div className="bg-[#0B111E] rounded-xs p-3 border border-[#1E2E4E]">
                <span className="font-mono text-[10px] text-[#64748B] uppercase block">
                  INDIGENOUS RATIO
                </span>
                <div className="font-mono text-xl text-[#FF9933] font-bold mt-1">42%</div>
                <span className="text-[10px] text-[#64748B] font-mono">Surging to 65% &apos;30</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>NEW DELHI AIR HQ • DIRECTORATE OF AIR OPERATIONS</span>
            <span className="text-[#ffc174]">SECTION: EXECUTIVE SUMMARY</span>
          </div>
        </section>

        {/* SLIDE 02 */}
        <section
          id="tactical-slide-2"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              READINESS MATRIX &amp; COMMAND TELEMETRY
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 02 / 16
            </span>
          </div>

          <div className="my-auto py-4 space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F7F9FC]">
              FLEET READINESS &amp; CAPABILITY METRICS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#0B111E] rounded-xs p-4 border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-xs uppercase text-[#64748B]">
                  Overall Serviceability
                </span>
                <div className="font-mono text-3xl font-bold text-[#10B981]">84.6%</div>
                <p className="text-xs text-[#94A3B8]">
                  Exceeds standard 80% baseline requirement across Western, Eastern, and Central Air Commands despite high-tempo Northern deployments.
                </p>
              </div>
              <div className="bg-[#0B111E] rounded-xs p-4 border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-xs uppercase text-[#64748B]">
                  Atmanirbhar Bharat Share
                </span>
                <div className="font-mono text-3xl font-bold text-[#FF9933]">42.0%</div>
                <p className="text-xs text-[#94A3B8]">
                  Surging with Tejas Mk1A deliveries, Prachand LCH inductions, and C-295 domestic manufacturing line in Vadodara.
                </p>
              </div>
              <div className="bg-[#0B111E] rounded-xs p-4 border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-xs uppercase text-[#64748B]">
                  Authorized Squadron Health
                </span>
                <div className="font-mono text-3xl font-bold text-[#F59E0B]">31 / 42</div>
                <p className="text-xs text-[#94A3B8]">
                  Roadmap underway to offset Jaguar and MiG phase-outs through Tejas Mk-1A/2 procurements and proposed MRFA tranches.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>SOURCE: AIR COMBAT COMMAND AUDIT 2026</span>
            <span className="text-[#ffc174]">SECTION: FORCE READINESS</span>
          </div>
        </section>

        {/* SLIDE 03 */}
        <section
          id="tactical-slide-3"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              COMBAT DOCTRINE &amp; THEATER SPECS
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 03 / 16
            </span>
          </div>

          <div className="my-auto py-4 space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F7F9FC]">
              4.5+ GEN AIR DOMINANCE DOCTRINE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#0B111E] rounded-xs p-4 border border-[#1E2E4E] space-y-1">
                <span className="font-mono text-xs font-bold text-[#ffc174]">01 // BVR First-Kill</span>
                <p className="text-xs text-[#94A3B8]">
                  Employment of Meteor BVRAAM (&gt;150 km no-escape zone) and Astra Mk-1/Mk-2 linked with Netra and Phalcon radar relays.
                </p>
              </div>
              <div className="bg-[#0B111E] rounded-xs p-4 border border-[#1E2E4E] space-y-1">
                <span className="font-mono text-xs font-bold text-[#7bd0ff]">02 // Sensor Fusion &amp; EW</span>
                <p className="text-xs text-[#94A3B8]">
                  Synchronizing Thales SPECTRA, indigenous D-29 EW suites, and IACCS real-time encrypted data link nodes across Himalayan sectors.
                </p>
              </div>
              <div className="bg-[#0B111E] rounded-xs p-4 border border-[#1E2E4E] space-y-1">
                <span className="font-mono text-xs font-bold text-[#FF9933]">03 // Standoff Interdiction</span>
                <p className="text-xs text-[#94A3B8]">
                  SCALP-EG cruise missile standoff (500+ km) and BrahMos-A supersonic strikes to neutralize hardened enemy airfields and C4ISR nodes.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>WESTERN &amp; EASTERN THEATER AIR DEFENSE</span>
            <span className="text-[#ffc174]">SECTION: COMBAT PHILOSOPHY</span>
          </div>
        </section>

        {/* SLIDE 04: Rafale */}
        <section
          id="tactical-slide-4"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              TIER-1 MULTIROLE OMNIROLE
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 04 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-3">
            <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-[#1E2E4E]">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1W3TgMRU1DXvIWBCj0qQxFTSJxCb6RwHlJl8zwZQcYqZZRGewiTqk_FnPj9QxF6AmwAlZV6PhNOgdk9Ddami7Aa3Zs69Z8yALt7nrAjsi6wTR_bPiS4eVV3zqGhdfJKmlLlVnWa-aUha749yChl-UyH_TpCD-t495VDuQ-MII5pMtYifF8SM7Hht2etx5Q8DG266UcUWzDgNKIdYhhOtrHIGJCfmqj-QlnO0rf0F2RvzpyPbIKk4CxlJg0"
                alt="Rafale F3-R"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#64748B] uppercase">DASSAULT AVIATION</span>
                  <h3 className="font-heading text-2xl font-bold text-white">Dassault Rafale F3-R</h3>
                </div>
                <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded-xs border border-[#10B981]/30">
                  36 ACTIVE • 96% OPERATIONAL
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-[#0B111E] p-2.5 rounded-xs font-mono text-center text-xs">
              <div>
                <span className="text-[#64748B] text-[10px] block">MAX SPEED</span>
                <strong className="text-[#F7F9FC]">Mach 1.8</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">COMBAT RADIUS</span>
                <strong className="text-[#ffc174]">1,850 km</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">PAYLOAD</span>
                <strong className="text-[#F7F9FC]">9,500 kg (14 HP)</strong>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              No. 17 &apos;Golden Arrows&apos; (Ambala) and No. 101 &apos;Falcons&apos; (Hashimara). RBE2 AESA radar, SPECTRA EW suite, cold-engine start for Himalayan operations, Meteor BVRAAM, and SCALP cruise missiles.
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>FRONTLINE ASSET SPECS • AIR DEFENSE WING</span>
            <span className="text-[#ffc174]">SLIDE 04 OF 16</span>
          </div>
        </section>

        {/* SLIDE 05: Su-30MKI */}
        <section
          id="tactical-slide-5"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              HEAVY AIR SUPERIORITY BACKBONE
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 05 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-3">
            <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-[#1E2E4E]">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wmea7m6O6Sq8wiRRcYKRf7jBgHDiIGsIC0i7fj_dnDvqrYRi6PPg0_-ii_n4N4HQK0-mlxbvnh6KgU1pPOhs-1sY6Bs15xiltFH1HAiDeybDb6oB9Xo3o_2AKGfGWXadjC8nSybGyJRSoP81x9aqgB-tJrJZi1rPChLKDW57eUK_QMsIueCpob8rS1s-qc_U4FQxgMu28IOPCLxtDwgra4bwWkSJShnWtEi5HA98Appf4OKtRVOQK5q8g"
                alt="Su-30MKI"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#64748B] uppercase">HAL NASHIK / SUKHOI</span>
                  <h3 className="font-heading text-2xl font-bold text-white">Su-30MKI Flanker-H</h3>
                </div>
                <span className="font-mono text-xs text-[#7bd0ff] bg-[#7bd0ff]/15 px-2 py-0.5 rounded-xs border border-[#7bd0ff]/30">
                  260+ ACTIVE INVENTORY
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-[#0B111E] p-2.5 rounded-xs font-mono text-center text-xs">
              <div>
                <span className="text-[#64748B] text-[10px] block">MAX SPEED</span>
                <strong className="text-[#F7F9FC]">Mach 2.0</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">FERRY RANGE</span>
                <strong className="text-[#7bd0ff]">3,000+ km</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">HARDPOINTS</span>
                <strong className="text-[#F7F9FC]">12 (8,130 kg)</strong>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Backbone of India&apos;s combat reach with 3D thrust-vectoring AL-31FP turbofans. Armed with 450 km BrahMos-A supersonic cruise missiles and Astra Mk-1 BVRAAM. Comprehensive Super Sukhoi modernization underway.
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>STRATEGIC PENETRATION ASSET • ORBAT 2026</span>
            <span className="text-[#ffc174]">SLIDE 05 OF 16</span>
          </div>
        </section>

        {/* SLIDE 06: Tejas */}
        <section
          id="tactical-slide-6"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              INDIGENOUS LIGHT COMBAT FIGHTER
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 06 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-3">
            <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-[#1E2E4E]">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wl0zz-4ImSzgBaiUQLy6bSbvIOevfIt0yMPL8BEvqKERfAQJWJdaBZKhajPp8Cb48jvO2M05hJKnLtgap8tXqa5iYmaYmyyKEw8MjfSUUnFbsktEgZVTKQHnOYPrtfIJtXfGDj8uuEUmL2_PLP-sPmocm1SK0bPRZqihJaE_XpLNwJMQ7fvQnrHcz_0UkuRffAvEfxe_oYF1cCV3GwUkygxzQ0rHTzb3DIdahA3lVOXicxt7dlnzKis3U"
                alt="HAL Tejas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#64748B] uppercase">HAL BENGALURU • INDIA</span>
                  <h3 className="font-heading text-2xl font-bold text-white">HAL Tejas Mk-1A</h3>
                </div>
                <span className="font-mono text-xs text-[#FF9933] bg-[#FF9933]/15 px-2 py-0.5 rounded-xs border border-[#FF9933]/30">
                  83 + 97 AIRFRAMES ON CONTRACT
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-[#0B111E] p-2.5 rounded-xs font-mono text-center text-xs">
              <div>
                <span className="text-[#64748B] text-[10px] block">MAX SPEED</span>
                <strong className="text-[#F7F9FC]">Mach 1.6</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">SERVICE CEILING</span>
                <strong className="text-[#FF9933]">50,000 ft</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">RADAR</span>
                <strong className="text-[#F7F9FC]">Uttam AESA</strong>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Lightest supersonic multi-role fighter featuring carbon-composite delta-wing architecture, digital fly-by-wire controls, mid-air refuelling, and DRDO Uttam active phased array radar.
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>ATMANIRBHAR BHARAT DEFENSE CORE</span>
            <span className="text-[#ffc174]">SLIDE 06 OF 16</span>
          </div>
        </section>

        {/* SLIDE 07: Jaguar & Mirage 2000 */}
        <section
          id="tactical-slide-7"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              FRONTLINE LEGACY DEEP STRIKE
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 07 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-4">
            <h3 className="font-heading text-2xl font-bold text-white">
              SEPECAT JAGUAR &amp; MIRAGE 2000
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0B111E] p-3 rounded-xs border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-[10px] text-[#F59E0B]">~115 ACTIVE • DARIN III</span>
                <h4 className="font-heading text-lg font-bold text-white">SEPECAT Jaguar &apos;Shamsher&apos;</h4>
                <p className="text-xs text-[#94A3B8]">
                  Dedicated low-level maritime and terrain-hugging strike aircraft fitted with DARIN III digital avionics, AESA radar, and over-wing ASRAAM missiles.
                </p>
              </div>
              <div className="bg-[#0B111E] p-3 rounded-xs border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-[10px] text-[#7bd0ff]">~50 ACTIVE • I/TI UPGRADE</span>
                <h4 className="font-heading text-lg font-bold text-white">Mirage 2000 &apos;Vajra&apos;</h4>
                <p className="text-xs text-[#94A3B8]">
                  Veteran of Kargil and Balakot strikes with RDY-2 radar, Mica BVRAAM missiles, and precision laser guided munitions from Gwalior.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>LEGACY FLEET MODERNIZATION ROADMAP</span>
            <span className="text-[#ffc174]">SLIDE 07 OF 16</span>
          </div>
        </section>

        {/* SLIDE 08: Comparison Table */}
        <section
          id="tactical-slide-8"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              TACTICAL COMPARISON MATRIX
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 08 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-3">
            <h3 className="font-heading text-2xl font-bold text-white">FIGHTER SPECIFICATION AUDIT</h3>
            <div className="overflow-x-auto bg-[#0B111E] rounded-xs p-3 border border-[#1E2E4E]">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-[#64748B]">
                    <th className="py-2">TACTICAL METRIC</th>
                    <th className="py-2 text-[#ffc174]">RAFALE F3-R</th>
                    <th className="py-2 text-[#7bd0ff]">SU-30MKI</th>
                    <th className="py-2 text-[#FF9933]">TEJAS MK-1A</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-2 text-[#64748B]">Maximum Speed</td>
                    <td className="py-2 text-[#ffc174]">Mach 1.8</td>
                    <td className="py-2 text-[#7bd0ff]">Mach 2.0</td>
                    <td className="py-2 text-[#FF9933]">Mach 1.6</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-[#64748B]">Combat Radius</td>
                    <td className="py-2 text-[#ffc174]">1,850 km</td>
                    <td className="py-2 text-[#7bd0ff]">1,500 km</td>
                    <td className="py-2 text-[#FF9933]">500 km</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-[#64748B]">Payload Cap</td>
                    <td className="py-2 text-[#ffc174]">9,500 kg</td>
                    <td className="py-2 text-[#7bd0ff]">8,130 kg</td>
                    <td className="py-2 text-[#FF9933]">5,300 kg</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-[#64748B]">Primary Radar</td>
                    <td className="py-2">Thales RBE2 AESA</td>
                    <td className="py-2">Bars PESA (AESA Upgr.)</td>
                    <td className="py-2">Uttam AESA</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-[#64748B]">BVRAAM Weapon</td>
                    <td className="py-2 text-[#ffc174]">Meteor (&gt;150 km)</td>
                    <td className="py-2 text-[#7bd0ff]">Astra Mk1 / R-77</td>
                    <td className="py-2 text-[#FF9933]">Astra Mk-1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>INTER-PLATFORM STRIKE EQUIVALENCY TABLE</span>
            <span className="text-[#ffc174]">SLIDE 08 OF 16</span>
          </div>
        </section>

        {/* SLIDE 09: Rotorcraft Doctrine */}
        <section
          id="tactical-slide-9"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              VERTICAL LIFT &amp; CAS DOCTRINE
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 09 / 16
            </span>
          </div>

          <div className="my-auto py-4 space-y-4">
            <h3 className="font-heading text-2xl font-bold text-white">COMBAT ROTORCRAFT DOCTRINE</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#0B111E] p-4 rounded-xs border border-[#1E2E4E] space-y-1">
                <span className="font-mono text-xs font-bold text-[#ffc174]">High-Altitude Dominance</span>
                <p className="text-xs text-[#94A3B8]">
                  Engineered for Siachen, Ladakh, and Arunachal high passes (&gt;16,000 ft) where thin air limits traditional gunships. Led by HAL Prachand.
                </p>
              </div>
              <div className="bg-[#0B111E] p-4 rounded-xs border border-[#1E2E4E] space-y-1">
                <span className="font-mono text-xs font-bold text-[#7bd0ff]">All-Weather Armor Hunting</span>
                <p className="text-xs text-[#94A3B8]">
                  Apache AH-64E fleet with Longbow millimeter-wave radar to acquire and destroy 16 heavy armored formations simultaneously.
                </p>
              </div>
              <div className="bg-[#0B111E] p-4 rounded-xs border border-[#1E2E4E] space-y-1">
                <span className="font-mono text-xs font-bold text-[#FF9933]">Tactical Underslung Artillery</span>
                <p className="text-xs text-[#94A3B8]">
                  CH-47F Chinooks airlifting M777 ultra-light howitzers directly to forward LAC mountaintops to guarantee immediate artillery fire superiority.
                </p>
              </div>
            </div>
            <div className="p-3 bg-[#0B111E] rounded-xs font-mono text-xs text-[#10B981] flex justify-between">
              <span>TOTAL ACTIVE ROTORCRAFT INVENTORY:</span>
              <span className="font-bold">500+ Multi-Mission Helicopters</span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>CLOSE AIR SUPPORT &amp; SPECIAL HELIBORNE OPS</span>
            <span className="text-[#ffc174]">SLIDE 09 OF 16</span>
          </div>
        </section>

        {/* SLIDE 10: Apache & Prachand */}
        <section
          id="tactical-slide-10"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              DEDICATED ATTACK PLATFORMS
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 10 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-4">
            <h3 className="font-heading text-2xl font-bold text-white">AH-64E APACHE &amp; HAL PRACHAND</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0B111E] p-3 rounded-xs border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-[10px] text-[#10B981]">22 ACTIVE • PATHANKOT / JORHAT</span>
                <h4 className="font-heading text-lg font-bold text-white">Boeing AH-64E Apache</h4>
                <p className="text-xs text-[#94A3B8]">
                  AN/APG-78 Longbow radar, AGM-114 Hellfire laser/radar missiles, 30mm chain gun. Dedicated tank-busting supremacy.
                </p>
              </div>
              <div className="bg-[#0B111E] p-3 rounded-xs border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-[10px] text-[#FF9933]">INDIGENOUS HIGH-ALTITUDE</span>
                <h4 className="font-heading text-lg font-bold text-white">HAL Prachand (LCH)</h4>
                <p className="text-xs text-[#94A3B8]">
                  World&apos;s sole attack helicopter capable of firing weapons at Siachen elevations above 16,000 ft. Armed with 20mm nose turret &amp; Helina missiles.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>ARMORED COMBAT WING TELEMETRY</span>
            <span className="text-[#ffc174]">SLIDE 10 OF 16</span>
          </div>
        </section>

        {/* SLIDE 11: Chinook & Dhruv */}
        <section
          id="tactical-slide-11"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              TACTICAL LIFT &amp; RECONNAISSANCE
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 11 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-4">
            <h3 className="font-heading text-2xl font-bold text-white">CH-47F CHINOOK &amp; HAL DHRUV/RUDRA</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0B111E] p-3 rounded-xs border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-[10px] text-[#10B981]">15 ACTIVE • CHANDIGARH / MOHANBARI</span>
                <h4 className="font-heading text-lg font-bold text-white">Boeing CH-47F Chinook</h4>
                <p className="text-xs text-[#94A3B8]">
                  Tandem-rotor heavy-lift platform executing underslung transport of heavy weaponry, border road equipment, and 55 combat troops.
                </p>
              </div>
              <div className="bg-[#0B111E] p-3 rounded-xs border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-[10px] text-[#7bd0ff]">120+ ACTIVE • INDIGENOUS ALH</span>
                <h4 className="font-heading text-lg font-bold text-white">HAL Dhruv / Rudra</h4>
                <p className="text-xs text-[#94A3B8]">
                  Indigenous utility and weaponized (Rudra) helicopter conducting SAR, casualty evacuation, troop insertion, and Sarang aerobatic displays.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>FRONTLINE VERTICAL LOGISTICS MATRIX</span>
            <span className="text-[#ffc174]">SLIDE 11 OF 16</span>
          </div>
        </section>

        {/* SLIDE 12: C-17 */}
        <section
          id="tactical-slide-12"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              STRATEGIC INTER-THEATER HEAVY AIRLIFT
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 12 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-3">
            <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-[#1E2E4E]">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1WjoPPtcNVj5HRZWNL4qArTVyhz0qKXjTpmH9obseofay9mdSa4CUSdea1mC3PgR4VXV2gminO9YMOB8ONopbShxAqnbyET0Ubszd3Q0YNDGiIulin0-rRAPEIBc57tlpevixNd1_gAYh_aEgUkWDuzNVjWrY8L6a3e1t6aKeAlumsHmfjbwgSahMmMfCu9MRGYwieg4p6Jnh63-7RVd_R6bKeefgvS50Iz7rMcMt-uHsgnL9abu86Chnk"
                alt="C-17 Globemaster"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#64748B] uppercase">BOEING GLOBAL AIRLIFT</span>
                  <h3 className="font-heading text-2xl font-bold text-white">C-17 Globemaster III</h3>
                </div>
                <span className="font-mono text-xs text-[#ffc174] bg-[#ffc174]/15 px-2 py-0.5 rounded-xs border border-[#ffc174]/30">
                  11 ACTIVE • 77.5 TONS
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-[#0B111E] p-2.5 rounded-xs font-mono text-center text-xs">
              <div>
                <span className="text-[#64748B] text-[10px] block">PAYLOAD CAP</span>
                <strong className="text-[#ffc174]">77,519 kg</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">RANGE</span>
                <strong className="text-[#F7F9FC]">4,480 km</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">AIRDROP</span>
                <strong className="text-[#F7F9FC]">102 Paratroopers</strong>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8]">
              No. 81 &apos;Skylords&apos; (Hindon AFS). Capable of landing T-90 tanks onto high-altitude Advanced Landing Grounds (ALGs) including Daulat Beg Oldie (16,614 ft) and Leh within hours.
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>GLOBAL HUMANITARIAN &amp; RAPID STRATEGIC MOBILITY</span>
            <span className="text-[#ffc174]">SLIDE 12 OF 16</span>
          </div>
        </section>

        {/* SLIDE 13: Airbus C295 */}
        <section
          id="tactical-slide-13"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              TACTICAL AIRLIFT &amp; VADODARA PROGRAM
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 13 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-3">
            <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-[#1E2E4E]">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VF8Zo3TUALIUZsHf0adCHF0-LaDA9RBKiYpL1mHloo1TB_DJRJA8mztt7aYJckO5bwmsJfpDDIczLMBe9ZkCBboxSdd3CyEM22M12Ay5-Wil_7p0qkW-Dw0i-6S79trGZgO9O2aBhn8-2c2DM5kqVLEhFyv1rIvORGHnMftA3OlEcOkSBSrRC-UAlv03Es_M7Lmr3ev43ZXJ_Z24In_BijoVIl92-Z_b7ksg0qDXY-dQc00oCcMuLbraA"
                alt="Airbus C295"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#64748B] uppercase">AIRBUS / TATA ADVANCED SYSTEMS</span>
                  <h3 className="font-heading text-2xl font-bold text-white">Airbus C-295MW</h3>
                </div>
                <span className="font-mono text-xs text-[#FF9933] bg-[#FF9933]/15 px-2 py-0.5 rounded-xs border border-[#FF9933]/30">
                  56 ON ORDER • 40 TATA VADODARA
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-[#0B111E] p-2.5 rounded-xs font-mono text-center text-xs">
              <div>
                <span className="text-[#64748B] text-[10px] block">PAYLOAD</span>
                <strong className="text-[#F7F9FC]">9,250 kg</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">TROOPS</span>
                <strong className="text-[#FF9933]">71 Infantry</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">STOL</span>
                <strong className="text-[#10B981]">Certified</strong>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8]">
              Phasing out the legacy HS-748 Avro transport fleet. Represents India&apos;s first private sector military aircraft assembly line in Vadodara, Gujarat.
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>DOMESTIC AEROSPACE INDUSTRIAL ECOSYSTEM</span>
            <span className="text-[#ffc174]">SLIDE 13 OF 16</span>
          </div>
        </section>

        {/* SLIDE 14: Il-78 Tanker */}
        <section
          id="tactical-slide-14"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              FORCE MULTIPLIER • AIR-TO-AIR REFUELING
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 14 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-3">
            <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-[#1E2E4E]">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UYeQmnJc4GY6B_RsHLwQSn4-ckwMryjOxtOXxYzf6RSIU5IF4Suyo8IfuJKwlwoH0QM736Hw2OqKp3zkDVlanKitDKxDHHXvdXiDPppxf8RWMFWzPTuYhKkOpr4IvMNKk-bXlkHAuvKMewlEMHTbWeq01pJRhbRy6PTssAiJ5g404Di1Gh70wf0PrNLqLlvjAHJd_0HosQccrUxRKaoko5VoCWa08483_Goxdyve4xqgiUIFeHChmcFwc"
                alt="Il-78 Tanker"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#64748B] uppercase">ILYUSHIN AVIATION</span>
                  <h3 className="font-heading text-2xl font-bold text-white">Il-78 MKI Tanker</h3>
                </div>
                <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded-xs border border-[#10B981]/30">
                  6 ACTIVE • No. 78 &apos;BATTLE CRY&apos;
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-[#0B111E] p-2.5 rounded-xs font-mono text-center text-xs">
              <div>
                <span className="text-[#64748B] text-[10px] block">FUEL CAPACITY</span>
                <strong className="text-[#ffc174]">110,000 kg</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">SYSTEM</span>
                <strong className="text-[#F7F9FC]">3-Point UPAZ-1M</strong>
              </div>
              <div>
                <span className="text-[#64748B] text-[10px] block">SIMULTANEOUS HOSE</span>
                <strong className="text-[#10B981]">3 Fighters</strong>
              </div>
            </div>
            <p className="text-xs text-[#94A3B8]">
              Strategic endurance enabler allowing Su-30MKI, Rafale, and Mirage-2000 squadrons to patrol the Indian Ocean and northern boundaries without returning to base.
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>STRATEGIC THEATER ENDURANCE ENABLERS</span>
            <span className="text-[#ffc174]">SLIDE 14 OF 16</span>
          </div>
        </section>

        {/* SLIDE 15: AEW&C */}
        <section
          id="tactical-slide-15"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              AIRBORNE EARLY WARNING &amp; C4I
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 15 / 16
            </span>
          </div>

          <div className="my-auto py-2 space-y-4">
            <h3 className="font-heading text-2xl font-bold text-white">DRDO NETRA &amp; A-50EI PHALCON</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0B111E] p-3 rounded-xs border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-[10px] text-[#FF9933]">DRDO INDIGENOUS • 3 ACTIVE + 6 ORDERED</span>
                <h4 className="font-heading text-lg font-bold text-white">DRDO Netra Mk1 / Mk1A</h4>
                <p className="text-xs text-[#94A3B8]">
                  Embraer-based AESA dorsal antenna providing 240° surveillance coverage, secure voice/data C4ISR links, and automated fighter vectoring.
                </p>
              </div>
              <div className="bg-[#0B111E] p-3 rounded-xs border border-[#1E2E4E] space-y-2">
                <span className="font-mono text-[10px] text-[#7bd0ff]">3 ACTIVE • STRATEGIC ROTODOME</span>
                <h4 className="font-heading text-lg font-bold text-white">Beriev A-50EI Phalcon</h4>
                <p className="text-xs text-[#94A3B8]">
                  Heavy 360° active electronically scanned array EL/W-2090 dome tracking up to 100 targets simultaneously across 400 km airspace depth.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>INTEGRATED AIR COMMAND &amp; CONTROL SYSTEM (IACCS)</span>
            <span className="text-[#ffc174]">SLIDE 15 OF 16</span>
          </div>
        </section>

        {/* SLIDE 16: Training & 2030 Roadmap */}
        <section
          id="tactical-slide-16"
          className="min-h-[calc(100vh-8rem)] flex flex-col justify-between p-6 bg-[#111A2E] rounded-xs border border-[#1E2E4E] shadow-xl relative"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="font-mono text-xs text-[#64748B] uppercase">
              TRAINING &amp; 2030 STEALTH HORIZON
            </span>
            <span className="font-mono text-xs text-[#ffc174] font-bold px-2 py-0.5 bg-[#ffc174]/10 rounded-xs border border-[#ffc174]/30">
              SLIDE 16 / 16 (END OF DECK)
            </span>
          </div>

          <div className="my-auto py-2 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#0B111E] p-3 rounded-xs border border-[#1E2E4E]">
                <span className="text-[10px] font-mono text-[#ffc174] uppercase block">STAGE-III LEAD-IN</span>
                <strong className="text-sm font-bold text-white block">BAE Hawk 132</strong>
                <span className="font-mono text-[11px] text-[#64748B]">100+ Active • Bidar &amp; SKAT</span>
              </div>
              <div className="bg-[#0B111E] p-3 rounded-xs border border-[#1E2E4E]">
                <span className="text-[10px] font-mono text-[#7bd0ff] uppercase block">STAGE-I BASIC</span>
                <strong className="text-sm font-bold text-white block">Pilatus PC-7 MkII</strong>
                <span className="font-mono text-[11px] text-[#64748B]">75 Active • AFA Dundigal</span>
              </div>
            </div>

            <div className="bg-[#0B111E] p-4 rounded-xs border border-[#1E2E4E] space-y-3">
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                IAF 2030 Modernization Vision
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 bg-black/40 rounded-xs border border-white/5 space-y-1">
                  <span className="text-[#ffc174] font-bold block">AMCA 5th-Gen Stealth</span>
                  <p className="text-[#94A3B8] text-[11px]">
                    Internal weapons bay, serpentine intakes, supercruise, and MUM-T drone wingmen.
                  </p>
                </div>
                <div className="p-2.5 bg-black/40 rounded-xs border border-white/5 space-y-1">
                  <span className="text-[#7bd0ff] font-bold block">Project Kusha (LR-SAM)</span>
                  <p className="text-[#94A3B8] text-[11px]">
                    3-tiered domestic air defense interceptors (150–350 km) integrating with S-400 batteries.
                  </p>
                </div>
                <div className="p-2.5 bg-black/40 rounded-xs border border-white/5 space-y-1">
                  <span className="text-[#FF9933] font-bold block">Tejas Mk-2 &amp; MRFA</span>
                  <p className="text-[#94A3B8] text-[11px]">
                    Medium weight combat aircraft induction to replace retiring MiG-29 and Mirage squadrons.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#0B111E] rounded-xs border border-[#1E2E4E] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                <span className="font-mono text-xs text-[#94A3B8]">
                  ALL 16 SECTIONS VERIFIED &amp; EXPORT READY
                </span>
              </div>
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-xs bg-[#ffc174] text-[#472a00] font-heading text-xs uppercase font-bold flex items-center gap-1 shadow hover:bg-[#ffb95f]"
              >
                <span>EXPORT 16-SLIDE PDF</span>
                <Download size={14} />
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>FINAL SLIDE • TOTAL 16 SECTIONS VERIFIED</span>
            <span className="text-[#ffc174]">SLIDE 16 OF 16</span>
          </div>
        </section>
      </main>

      {/* Bottom Floating Navigation Bar */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#070C15]/95 backdrop-blur-xl border-t border-white/10 pb-safe no-print">
        <div className="flex justify-around items-center h-14 max-w-lg mx-auto text-xs font-mono">
          <button onClick={() => scrollToSlide(1)} className="text-[#ffc174] hover:text-white">
            01 Overview
          </button>
          <button onClick={() => scrollToSlide(4)} className="text-[#94A3B8] hover:text-[#ffc174]">
            04 Fighters
          </button>
          <button onClick={() => scrollToSlide(10)} className="text-[#94A3B8] hover:text-[#ffc174]">
            10 Helos
          </button>
          <button onClick={() => scrollToSlide(12)} className="text-[#94A3B8] hover:text-[#ffc174]">
            12 Airlift
          </button>
          <button onClick={() => scrollToSlide(16)} className="text-[#94A3B8] hover:text-[#ffc174]">
            16 Vision
          </button>
        </div>
      </nav>
    </div>
  );
};
