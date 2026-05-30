/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service } from "./types";

export const SERVICES: Service[] = [
  {
    id: "service-design",
    title: "Tampa Coastal Geotechnical & Architectural Design",
    description: "We engineer and reinforce every foundation, completely removing the risk of your pool shifting, settling, or cracking in soft coastal soil.",
    iconName: "PenTool",
    details: [
      "Davis Islands elevation & marine mapping",
      "Hurricane-resilient structural reinforcement",
      "Sunken dry lounge acoustics planning"
    ],
    priceEst: "Included in elite layout"
  },
  {
    id: "service-acrylic",
    title: "Acrylic Viewing Portals & Infinity Barriers",
    description: "Constructed with thick, marine-grade laminated acrylic and seamless leakproof seals, guaranteed to never cloud, crack, or leak under Florida weather.",
    iconName: "Layers",
    details: [
      "Marine-grade double laminated acrylic",
      "UV-deflecting chemical hardcoat layers",
      "Seam-free edge locks with 100% clarity"
    ],
    priceEst: "Custom architectural addon"
  },
  {
    id: "service-tech",
    title: "Gulf Smart Flow & Bioluminescent Glow",
    description: "Equipped with self-cleaning, smartphone-controlled eco-filtration and energy-efficient climate control, taking the complexity and high utility costs out of pool ownership.",
    iconName: "Cpu",
    details: [
      "Custom smartphone app aura remote controls",
      "Dual-climate heat exchangers for humid summers",
      "Fiber-optic floor resembling Gulf starglow"
    ],
    priceEst: "Standard in all custom builds"
  }
];

export const CORE_VILLA_SPECS = [
  { value: "License #CPC-94002-POOLS", label: "State Certified" },
  { value: "Since 2012", label: "Backyard Excellence" },
  { value: "1,200+", label: "Pools Serviced" },
  { value: "100%", label: "Satisfaction Guarantee" }
];

export interface CustomFinish {
  id: string;
  name: string;
  colorHex: string;
  glowingClass: string;
  description: string;
  baseCharge: number;
}

export const POOL_FINISHES: CustomFinish[] = [
  {
    id: "tampa-cobalt",
    name: "Tampa Cobalt Quartz",
    colorHex: "#0047AB",
    glowingClass: "shadow-[0_0_30px_rgba(0,71,171,0.6)] border-blue-500 bg-gradient-to-tr from-[#021f54] to-[#0047AB]",
    description: "Deep, majestic navy quartz finish that reflects the depth of the open ocean. Best paired with gold spotlights.",
    baseCharge: 12000,
  },
  {
    id: "davis-turquoise",
    name: "Davis Island Glass Turquoise",
    colorHex: "#0D9DA4",
    glowingClass: "shadow-[0_0_30px_rgba(13,157,164,0.6)] border-turquoise-400 bg-gradient-to-tr from-[#03252a] to-[#0D9DA4]",
    description: "Highly reflecting glass-bead surface glowing in high contrast turquoise during sunrise. Energetic look.",
    baseCharge: 16500,
  },
  {
    id: "clearwater-pearl",
    name: "Clearwater Emerald Pearl",
    colorHex: "#319795",
    glowingClass: "shadow-[0_0_30px_rgba(49,151,149,0.6)] border-teal-500 bg-gradient-to-tr from-[#002220] to-[#319795]",
    description: "A rare gemstone shimmer with subtle gold flakes that gleams beautifully through warm sunset water lines.",
    baseCharge: 19000,
  },
];

export interface AddonOption {
  id: string;
  name: string;
  cost: number;
  description: string;
}

export const ADDONS: AddonOption[] = [
  { id: "fire-bowls", name: "Bespoke Lava & Fire Columns", cost: 14500, description: "Automated gas fire bowls flanking the corners of the pool." },
  { id: "acrylic-wall", name: "10-foot Submerged Acrylic Glass Wall", cost: 38000, description: "A crystal clear transparent pool wall offering seamless views." },
  { id: "swim-up-bar", name: "Swim-up Teak Dry Bar & Sunken stools", cost: 18500, description: "Submerged seating paired with a dry pavilion service counter." },
  { id: "cascade-canopy", name: "Modern Travertine Sheet Waterfall Canopy", cost: 12000, description: "Continuous micro-cascade sheet waterfall for acoustics. " },
];

