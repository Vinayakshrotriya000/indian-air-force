---
name: Aerospace Tactical Fleet Interface
colors:
  surface: '#19120a'
  surface-dim: '#19120a'
  surface-bright: '#41382e'
  surface-container-lowest: '#140d06'
  surface-container-low: '#221a12'
  surface-container: '#261e15'
  surface-container-high: '#31281f'
  surface-container-highest: '#3c3329'
  on-surface: '#f0e0d1'
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#f0e0d1'
  inverse-on-surface: '#382f25'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#8fd5ff'
  on-tertiary: '#00344a'
  tertiary-container: '#1abdff'
  on-tertiary-container: '#004966'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#c5e7ff'
  tertiary-fixed-dim: '#7fd0ff'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6a'
  background: '#19120a'
  on-background: '#f0e0d1'
  surface-variant: '#3c3329'
  aerospace-black: '#070C15'
  surface-deep: '#0B111E'
  surface-card: '#111A2E'
  surface-card-elevated: '#17233D'
  surface-border: '#1E2E4E'
  surface-border-subtle: rgba(255, 255, 255, 0.08)
  iaf-saffron: '#FF9933'
  iaf-green: '#138808'
  iaf-white: '#F7F9FC'
  status-operational: '#10B981'
  status-standby: '#F59E0B'
  status-grounded: '#EF4444'
  text-primary: '#F7F9FC'
  text-secondary: '#94A3B8'
  text-muted: '#64748B'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  data-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  data-mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  data-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
  label-tactical:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.25rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system embodies high-precision military aviation engineering: authoritative, calculated, and mission-critical. Designed specifically for tactical fleet inventory tracking, flight operations readiness, and airborne asset telemetry, it combines the discipline of an aerospace HUD (Head-Up Display) with the fluid responsiveness of modern command applications.

### Personality & Tone
- **Authoritative & Mission-Ready:** Uncompromising clarity, uncompromising reliability, and institutional gravitas.
- **Precision Engineering:** Clean geometric structures, dense data hierarchies, micro-borders, and technical telemetry readouts.
- **National Pride & Vigilance:** Refined, deliberate integration of Indian Air Force heraldry—subtle saffron and emerald indicators balanced against deep midnight skies.

### Design Movement: Tactical Aerospace Glass & Dark HUD
The visual language merges **Modern Corporate Precision** with **Tactical Glass/Micro-Borders**. High-contrast typography sits atop dark aerospace navy containers (`#0B111E` to `#162238`), bound by low-opacity hairline borders and energized with luminous readiness tags (Operational Green, Standby Amber, Maintenance Orange).

## Colors

The palette is engineered for low-light cockpit environments and high-stress command scenarios, minimizing eye fatigue while maximizing information salience.

### Primary & Accent Structure
- **Tactical Amber / Gold (`#F59E0B`):** The primary focus driver. Used for active filters, critical callouts, squadron designations, and selected states.
- **Avionics Cyan (`#38BDF8`):** The secondary chromatic accent. Dedicated to secondary navigational points, technical data accents, radar links, and link elements.
- **National Tricolor Touches:**
  - `iaf-saffron` (`#FF9933`): Heraldic badges, roundel accents, and priority-grade operational tiers.
  - `iaf-white` (`#F7F9FC`): Primary technical readings, titles, and maximum-contrast display copy.
  - `iaf-green` (`#138808` / `#10B981`): Service readiness indicators, green fleet health telemetry, and cleared-for-flight confirmations.

### Surface Architecture
Layering relies on blue-tinted midnight neutrals rather than desaturated grays:
- Base canvas: `#070C15` to `#0B111E`.
- Tactical cards and panels: `#111A2E`.
- Interactive headers and floating utility bars: `#17233D`.
- Micro-borders: `#1E2E4E` or `rgba(255, 255, 255, 0.08)` to outline edges cleanly without heavy visual weight.

## Typography

The typographic hierarchy enforces immediate legibility under dense informational conditions:

1. **Space Grotesk (Display & Section Headers):** Geometric, authoritative, and contemporary. Lends structural weight to aircraft classifications, squadron divisions, and operational summaries.
2. **Plus Jakarta Sans (Body & Contextual Narrative):** Balanced and highly legible on small displays. Delivers effortless scanning for tactical summaries, equipment variants, and technical overviews.
3. **JetBrains Mono (Technical Readouts & Telemetry):** Monospaced precision for tail numbers, speed envelopes (Mach), payload capacities, ceiling limits, and active readiness counters. Ensures tabular numbers line up flawlessly across comparative grids.

### Mobile Adjustments
- `display-hero` collapses from standard 40px down to `36px` on narrow screens.
- Monospace tags retain tight line-heights and slight letter-spacing (`0.05em`) to ensure instant legibility in bright sunlight or night ops modes.

## Layout & Spacing

The layout is built for high information density without visual clutter, allowing fleet commanders and technicians to survey multiple squadrons on handheld devices.

### Layout Model
- **Grid Architecture:** 4-column layout on mobile devices (`<640px`), expanding to a 12-column layout on tablets and field consoles.
- **Compact Vertical Cadence:** 8px baseline rhythm ensures tight module coherence. Vertical gaps between telemetry metrics use `space-sm` (0.5rem), while distinct asset cards separate with `space-md` (0.75rem) to maximize screen real estate.
- **Safe Margins:** Dynamic safe area insets accommodate modern handheld notch and gesture areas, standardizing outer padding to `1rem` on mobile.

## Elevation & Depth

Visual hierarchy is maintained through **tonal container layering** and **hairline micro-borders** rather than heavy blurred drop shadows.

### Elevation Principles
- **Base Level (Canvas):** Dark background (`#070C15` to `#0B111E`), non-reflective, anchoring the interface.
- **Level 1 (Cards & Modules):** Filled with `#111A2E`, delineated by a crisp `1px solid rgba(255, 255, 255, 0.08)` or `#1E2E4E` border.
- **Level 2 (Active Panels & Modals):** Filled with `#17233D`, framed by a distinct 1px border tinted with secondary cyan (`rgba(56, 189, 248, 0.25)`) or tactical amber.
- **HUD Glow Effects:** Critical readiness states and badges utilize subtle ambient glow (`0 0 12px rgba(16, 185, 129, 0.25)` for active readiness; `0 0 12px rgba(245, 158, 11, 0.25)` for standby alerts).

## Shapes

The design system uses **Soft / Technical Geometry** (`roundedness: 1`).

- **Structural Containers & Fleet Cards:** 4px border radius (`0.25rem`). This sharp, restrained curvature echoes avionic instruments, heads-up displays, and tactical equipment.
- **Buttons & Tactical Badges:** 4px radius for standard controls; pill or 9999px radius strictly reserved for small circular operational status dots and circular fleet counters.
- **Metric Micro-Chips:** Crisp chamfered or 2px–4px corners to communicate precision tooling.

## Components

### Buttons
- **Primary Tactical Action:** Amber background (`#F59E0B`), dark midnight typography (`#070C15`), font-weight 700, 4px border radius. Used for "Filter Fleet", "Deploy Asset", or "Export Telemetry".
- **Secondary Ghost Action:** Deep surface (`#111A2E`), 1px hairline border (`#1E2E4E`), white text (`#F7F9FC`). Hover/Active state shifts border to Cyan (`#38BDF8`).

### Status Badges & Chips
- **Fleet Readiness Indicators:**
  - *Operational / Active:* Semi-transparent emerald base (`rgba(16, 185, 129, 0.12)`), solid emerald text (`#10B981`), 1px border (`rgba(16, 185, 129, 0.3)`), accompanied by a 6px glowing indicator dot.
  - *Standby / Refit:* Semi-transparent amber base (`rgba(245, 158, 11, 0.12)`), amber text (`#F59E0B`), 1px border (`rgba(245, 158, 11, 0.3)`).
  - *Grounded / Overhaul:* Red base (`rgba(239, 68, 68, 0.12)`), red text (`#EF4444`).
- **Role Chips:** JetBrains Mono uppercase tags (`FIGHTER / MULTIROLE`, `STRATEGIC AIRLIFT`, `AWACS`) with subtle dark backgrounds and soft cyan hairline outlines.

### Fleet Asset Cards
- **Card Header:** Visual preview badge or aircraft silhouette thumbnail with high-contrast asset callsign (`Su-30MKI`, `Rafale DH`, `Tejas Mk1A`).
- **Telemetry Grid:** A balanced 2x2 or 3x2 monospaced key-value grid within each card showing Max Speed (Mach), Combat Range (km), Service Ceiling (ft), and Current Squadron Strength. Values rendered in `data-mono-md` (`#F7F9FC`), labels in `label-tactical` (`#64748B`).
- **Card Accent:** A 2px high-visibility tricolor ribbon or saffron indicator along the top edge of elite strike assets.

### Input Fields & Search Bars
- Background `#0B111E`, border `1px solid #1E2E4E`.
- Text in `JetBrains Mono` or `Plus Jakarta Sans`. Focused state transitions the border to active avionics cyan (`#38BDF8`) with no thick browser rings.

### Lists & Telemetry Feeds
- Alternating subtle row backgrounds (`#111A2E` and `#0E1627`).
- Dense divider lines using `#1E2E4E`.
- Numeric data columns right-aligned in monospaced font for instant comparison scanning.