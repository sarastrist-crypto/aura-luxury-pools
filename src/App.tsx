/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import {
  PenTool,
  Layers,
  Cpu,
  Check,
  ArrowRight,
  Menu,
  X,
  Waves,
  PhoneCall,
  Sparkles,
  MapPin,
  Calendar,
  Compass,
  ShieldCheck
} from "lucide-react";
import { SERVICES, CORE_VILLA_SPECS, POOL_FINISHES, ADDONS } from "./data";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import TestimonialsSlider from "./components/TestimonialsSlider";
import ReservationForm from "./components/ReservationForm";
import arthurPortrait from "./arthur_portrait.png";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroPoolHue, setHeroPoolHue] = useState<"turquoise" | "emerald" | "cobalt">("turquoise");

  // Configurator Studio States
  const [confSize, setConfSize] = useState<"compact" | "estate" | "mega-villa">("estate");
  const [confFinish, setConfFinish] = useState<string>("davis-turquoise");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["fire-bowls"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case "PenTool":
        return <PenTool className="h-5 w-5 text-gold-400" />;
      case "Layers":
        return <Layers className="h-5 w-5 text-turquoise-400" />;
      case "Cpu":
        return <Cpu className="h-5 w-5 text-turquoise-300" />;
      default:
        return <Waves className="h-5 w-5 text-turquoise-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030611] text-slate-100 flex flex-col relative">
      
      {/* FLOATING GLASSMORPHIC NAVIGATION BAR */}
      <nav
        id="navbar-root"
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/75 border-turquoise-500/20 shadow-lg shadow-turquoise-500/5 backdrop-blur-xl py-3"
            : "bg-slate-950/40 border-white/5 backdrop-blur-md py-4"
        }`}
      >
        <div className="px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand/Logo Design */}
          <button
            onClick={() => scrollToSection("hero-top")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-gradient-to-tr from-turquoise-500 to-gold-400 p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-slate-950 transition-colors group-hover:bg-slate-900">
                <Waves className="h-4.5 w-4.5 text-turquoise-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="text-left">
              <span className="font-display font-extrabold text-sm md:text-md tracking-wider text-white">
                AURA
              </span>
              <span className="block text-[9px] font-mono tracking-widest text-gold-400 -mt-0.5 uppercase">
                LUXURY POOLS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-slate-300">
            <button
              id="nav-link-experience"
              onClick={() => scrollToSection("before-after-gallery")}
              className="hover:text-gold-300 transition-colors cursor-pointer"
            >
              Gallery Experience
            </button>
            <button
              id="nav-link-services"
              onClick={() => scrollToSection("service-section")}
              className="hover:text-gold-300 transition-colors cursor-pointer"
            >
              Service Portfolios
            </button>
            <button
              id="nav-link-configurator"
              onClick={() => scrollToSection("aurasol-configurator")}
              className="hover:text-gold-300 text-turquoise-300 transition-colors cursor-pointer font-bold border-b border-turquoise-400/30"
            >
              Oasis Lab
            </button>
            <button
              id="nav-link-testimonials"
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-gold-300 transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              id="nav-link-contact"
              onClick={() => scrollToSection("reservation-form-section")}
              className="hover:text-gold-300 transition-colors cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Call / Action button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18005555555"
              className="flex items-center gap-2 text-[11px] font-mono font-medium text-slate-400 hover:text-white transition-colors"
            >
              <PhoneCall className="h-3.5 w-3.5 text-turquoise-400" />
              <span>1-800-AURA-POOL</span>
            </a>
            <button
              id="nav-cta-button"
              onClick={() => scrollToSection("reservation-form-section")}
              className="rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 px-4 py-2 text-xs font-display font-bold text-slate-950 tracking-wider shadow-md hover:shadow-gold-500/20 active:scale-95 transition-all cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/5 px-6 pb-6 bg-slate-950/95 space-y-4 rounded-b-2xl animate-fade-in text-center flex flex-col items-center">
            <button
              onClick={() => scrollToSection("before-after-gallery")}
              className="block w-full py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white"
            >
              Gallery Experience
            </button>
            <button
              onClick={() => scrollToSection("service-section")}
              className="block w-full py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white"
            >
              Service Portfolios
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("reservation-form-section")}
              className="block w-full py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white"
            >
              Get a Free Quote
            </button>

            <div className="h-[1px] w-full bg-white/5 my-2" />
            
            <a
              href="tel:+18005555555"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white"
            >
              <PhoneCall className="h-3.5 w-3.5 text-turquoise-400" />
              <span>1-800-AURA-POOL</span>
            </a>
            
            <button
              onClick={() => scrollToSection("reservation-form-section")}
              className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 py-3 text-xs font-display font-medium text-slate-950 tracking-widest uppercase shadow-md"
            >
              Get a Free Quote
            </button>
          </div>
        )}
      </nav>

      {/* FULL-SCREEN TWILIGHT INF_POOL HERO SECTION */}
      <header
        id="hero-top"
        className="relative min-h-[101vh] flex items-center justify-center overflow-hidden"
      >
        {/* Absolute Beautiful Twilight Glass Villa Infinity Pool Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1920"
            alt="Gorgeous Modern Glass Villa infinity pool twilight sunset"
            className="h-full w-full object-cover scale-102"
            referrerPolicy="no-referrer"
          />
          {/* Dynamic real-time twilight pool color water tint */}
          <div className={`absolute inset-0 transition-all duration-1000 mix-blend-color opacity-75 ${
            heroPoolHue === "turquoise" ? "bg-cyan-500/15" :
            heroPoolHue === "emerald" ? "bg-emerald-500/15" :
            "bg-blue-600/20"
          }`} />
          {/* Dynamic real-time ambient glowing pool backlights */}
          <div className={`absolute bottom-32 left-1/4 h-[450px] w-[550px] rounded-full blur-[170px] opacity-35 transition-all duration-1000 pointer-events-none ${
            heroPoolHue === "turquoise" ? "bg-[#0D9DA4]" :
            heroPoolHue === "emerald" ? "bg-[#319795]" :
            "bg-[#1e40af]"
          }`} />

          {/* Sophisticated dark blue/turquoise vignettes overlay to keep text ultra-legible and transition downstream */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/75 to-[#030611]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-[#030611]" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-turquoise-950/15 to-transparent blur-3xl pointer-events-none" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 flex flex-col justify-center h-full text-center items-center">
          
          {/* Accent Gold Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-950/50 px-4 py-1.5 text-xs text-gold-300 tracking-widest uppercase mb-6 animate-pulse select-none shadow-[0_0_15px_rgba(231,212,161,0.15)]">
            <Compass className="h-3.5 w-3.5 text-gold-400" />
            <span>Unrivalled Turquoise Escapism</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] max-w-5xl">
            ENJOY YOUR TAMPA <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise-300 via-teal-100 to-gold-300">
              BACKYARD OASIS
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block font-light tracking-wide text-slate-300 mt-4 normal-case">
              Not the Upkeep
            </span>
          </h1>

          {/* Elegant gold subtitle description */}
          <h2 className="mt-6 max-w-xl text-xs sm:text-sm md:text-base font-medium tracking-widest text-gold-400 font-display uppercase">
            Architectural Infinity Pools & Glass Lagoons for Luxury Estates
          </h2>

          <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-slate-300/90 leading-relaxed font-sans font-light">
            Bespoke infinity edge engineering and professional maintenance serving Hillsborough County since 2012.
          </p>

          {/* Interactive Twilight Glow Cycle Controls */}
          <div className="mt-8 flex flex-col items-center gap-2.5 select-none animate-fade-in">
            <span className="text-[10px] font-mono tracking-widest text-[#bdcbea]/70 uppercase flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-ping"></span>
              Live: Toggle Gulf Twilight Glow
            </span>
            <div className="flex flex-wrap justify-center gap-3 p-1.5 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl">
              <button
                onClick={() => setHeroPoolHue("turquoise")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  heroPoolHue === "turquoise"
                    ? "bg-turquoise-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(29,194,202,0.45)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Waves className="h-3 w-3" />
                Bayshore Turquoise
              </button>
              <button
                onClick={() => setHeroPoolHue("emerald")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  heroPoolHue === "emerald"
                    ? "bg-[#319795] text-white font-bold shadow-[0_0_15px_rgba(49,151,149,0.45)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Waves className="h-3 w-3" />
                Clearwater Emerald
              </button>
              <button
                onClick={() => setHeroPoolHue("cobalt")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  heroPoolHue === "cobalt"
                    ? "bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.45)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Waves className="h-3 w-3" />
                Davis Island Cobalt
              </button>
            </div>
          </div>

          {/* Action Call for custom interactions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button
              id="hero-reserve-btn"
              onClick={() => scrollToSection("reservation-form-section")}
              className="group w-full sm:w-auto relative cursor-pointer overflow-hidden rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 font-display font-semibold text-slate-950 px-8 py-4 text-sm tracking-wide shadow-xl shadow-gold-500/20 hover:shadow-gold-500/35 transition-all duration-300 active:scale-97 flex items-center justify-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-scroll-gallery-btn"
              onClick={() => scrollToSection("before-after-gallery")}
              className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white tracking-wide hover:border-turquoise-400 hover:bg-turquoise-950/20 hover:text-turquoise-300 transition-all duration-300 active:scale-97 cursor-pointer"
            >
              Explore Transformation Gallery
            </button>
          </div>

          {/* Spec details at base */}
          <div className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl border-t border-white/5 pt-8 select-none">
            {CORE_VILLA_SPECS.map((spec, i) => (
              <div key={i} className="text-center">
                <p className="font-mono text-xl md:text-2xl font-semibold text-turquoise-300">
                  {spec.value}
                </p>
                <p className="text-[10px] md:text-xs font-sans text-slate-400 uppercase tracking-widest mt-1">
                  {spec.label}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Downwards Transition gradient mask */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030611] to-transparent pointer-events-none" />
      </header>

      {/* CORE MODULAR THREE-COLUMN CARD SECTION */}
      <section
        id="service-section"
        className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
      >
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-turquoise-950/40 border border-turquoise-500/20 px-3 py-1 text-xs text-turquoise-300 tracking-wider">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-turquoise-400" />
            <span>Exquisite Architecture Portfolios</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Custom Glass & Infinity Architecture
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Every pool is a bespoke geological artifact. We execute micro-precision civil structural engineering utilizing award-winning components.
          </p>
        </div>

        {/* THREE COLUMN SEMI-TRANSLUCENT SLATE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className="group relative rounded-2xl p-6 md:p-8 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              style={{
                backgroundColor: "rgba(13, 20, 42, 0.45)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              {/* Custom Turquoise Hover Glow Aura */}
              <div className="absolute -inset-px bg-gradient-to-br from-turquoise-500/0 via-transparent to-turquoise-400/0 group-hover:from-turquoise-500/10 group-hover:to-gold-400/5 transition-all duration-500 rounded-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 h-40 w-40 bg-gradient-to-tr from-turquoise-500/2 via-transparent to-transparent blur-2xl pointer-events-none transition-all group-hover:from-turquoise-500/10" />

              <div className="space-y-6">
                {/* ICON & Price badge */}
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-turquoise-400/40 shadow-inner group-hover:shadow-[0_0_15px_rgba(29,194,202,0.15)]">
                    {renderIcon(srv.iconName)}
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-gold-400 tracking-wider bg-gold-950/40 border border-gold-500/20 px-2.5 py-1 rounded-full">
                    {srv.priceEst}
                  </span>
                </div>

                {/* Info Text */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg md:text-xl text-white tracking-tight group-hover:text-turquoise-300 transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>

                {/* Bullet details */}
                <ul className="space-y-2 pt-2 border-t border-white/5">
                  {srv.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="h-4 w-4 text-turquoise-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger inside card */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors duration-300 font-medium">
                  Architecture Portfolio
                </span>
                <button
                  onClick={() => scrollToSection("reservation-form-section")}
                  className="rounded-lg bg-white/5 border border-white/10 p-2 group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-slate-950 text-slate-300 transition-all duration-300 cursor-pointer"
                  aria-label={`Explore details for ${srv.title}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* AURA DESIGNER LAB - INTERACTIVE CONFIGURATOR */}
      <section
        id="aurasol-configurator"
        className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#030611] via-slate-950/80 to-[#030611] scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto w-full space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-950/40 border border-gold-500/20 px-3 py-1 text-xs text-gold-300 tracking-wider">
              <Compass className="h-3.5 w-3.5 text-gold-400 rotate-45 animate-spin-slow" />
              <span>AURA ARCHITECTURAL RESEARCH STUDIO</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
              Bespoke Interactive Oasis Lab
            </h2>
            <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
              Experiment with sizes, coastal gemstone water finishes, and high-tech structural additions to configure your custom estimate in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Inputs & Configurations (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Option 1: Sizing Sized Scale */}
              <div className="space-y-4 p-6 rounded-2xl bg-slate-950/50 border border-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-gold-500/10 border border-gold-500/20 flex items-center justify-center font-mono text-xs font-bold text-gold-400">
                    1
                  </div>
                  <h3 className="font-display text-white font-semibold text-xs tracking-wider uppercase">
                    Select Structural Scale & Elevation
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Compact */}
                  <button
                    onClick={() => setConfSize("compact")}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      confSize === "compact"
                        ? "border-turquoise-400 bg-turquoise-950/20 shadow-[0_0_15px_rgba(29,194,202,0.15)]"
                        : "border-white/5 bg-slate-900/20 hover:border-white/10 hover:bg-slate-900/40"
                    }`}
                  >
                    <span className="block text-xs font-mono font-bold text-turquoise-300">
                      24' × 12' Compact Coastal
                    </span>
                    <span className="block font-display font-medium text-white text-base mt-1">
                      Davis Courtyard
                    </span>
                    <span className="block text-[10px] text-slate-500 mt-2 font-light">
                      Ideal for snug waterfront compounds and zero lot line layouts.
                    </span>
                    <span className="block text-xs mt-3 font-mono font-semibold text-gold-400">
                      Est. Base: $95,000
                    </span>
                  </button>

                  {/* Estate Standard */}
                  <button
                    onClick={() => setConfSize("estate")}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      confSize === "estate"
                        ? "border-turquoise-400 bg-turquoise-950/20 shadow-[0_0_15px_rgba(29,194,202,0.15)]"
                        : "border-white/5 bg-slate-900/20 hover:border-white/10 hover:bg-slate-900/40"
                    }`}
                  >
                    <span className="block text-xs font-mono font-bold text-turquoise-300">
                      40' × 18' Estate Standard
                    </span>
                    <span className="block font-display font-medium text-white text-base mt-1">
                      Bayshore Horizon
                    </span>
                    <span className="block text-[10px] text-slate-500 mt-2 font-light">
                      The peak residential length including compound perimeter pilings.
                    </span>
                    <span className="block text-xs mt-3 font-mono font-semibold text-gold-400">
                      Est. Base: $138,000
                    </span>
                  </button>

                  {/* Mega Estate */}
                  <button
                    onClick={() => setConfSize("mega-villa")}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      confSize === "mega-villa"
                        ? "border-turquoise-400 bg-turquoise-950/20 shadow-[0_0_15px_rgba(29,194,202,0.15)]"
                        : "border-white/5 bg-slate-900/20 hover:border-white/10 hover:bg-slate-900/40"
                    }`}
                  >
                    <span className="block text-xs font-mono font-bold text-turquoise-300">
                      55' × 22' Grand Palace
                    </span>
                    <span className="block font-display font-medium text-white text-base mt-1">
                      Belleair Cathedral
                    </span>
                    <span className="block text-[10px] text-slate-500 mt-2 font-light">
                      Deep cantilever foundation structures with triple acrylic side viewing blocks.
                    </span>
                    <span className="block text-xs mt-3 font-mono font-semibold text-gold-400">
                      Est. Base: $210,000
                    </span>
                  </button>

                </div>
              </div>

              {/* Option 2: Custom Gemstone Water Finishes */}
              <div className="space-y-4 p-6 rounded-2xl bg-slate-950/50 border border-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-gold-400/10 border border-gold-400/20 flex items-center justify-center font-mono text-xs font-bold text-gold-400">
                    2
                  </div>
                  <h3 className="font-display text-white font-semibold text-xs tracking-wider uppercase">
                    Select Gemstone Water Finish & Bioluminescence
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {POOL_FINISHES.map((fin) => (
                    <button
                      key={fin.id}
                      onClick={() => setConfFinish(fin.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                        confFinish === fin.id
                          ? "border-white bg-[#0a1024] ring-1 ring-gold-400/25"
                          : "border-white/5 bg-slate-900/20 hover:border-white/10 hover:bg-slate-900/40"
                      }`}
                    >
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="h-3 w-3 rounded-full block border border-white/20 animate-pulse"
                            style={{ backgroundColor: fin.colorHex }}
                          />
                          <span className="text-xs font-semibold text-white">
                            {fin.name}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400/90 leading-normal font-light">
                          {fin.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-semibold text-gold-300">
                          +${fin.baseCharge.toLocaleString()}
                        </span>
                        {confFinish === fin.id && (
                          <span className="text-[8px] uppercase font-mono px-2 py-0.5 rounded bg-gold-400 text-slate-950 font-extrabold">
                            Active
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Luxury Upgrades */}
              <div className="space-y-4 p-6 rounded-2xl bg-slate-950/50 border border-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-gold-400/10 border border-gold-400/20 flex items-center justify-center font-mono text-xs font-bold text-gold-400">
                    3
                  </div>
                  <h3 className="font-display text-white font-semibold text-xs tracking-wider uppercase">
                    Equip Advanced Geotechnical Luxuries
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ADDONS.map((add) => {
                    const isSelected = selectedAddons.includes(add.id);
                    return (
                      <button
                        key={add.id}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedAddons(selectedAddons.filter((id) => id !== add.id));
                          } else {
                            setSelectedAddons([...selectedAddons, add.id]);
                          }
                        }}
                        className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex gap-3 items-start justify-between ${
                          isSelected
                            ? "border-turquoise-400/70 bg-turquoise-950/15"
                            : "border-white/5 bg-slate-900/20 hover:border-white/10 hover:bg-slate-900/40"
                        }`}
                      >
                        <div className="space-y-1">
                          <span className="block font-display font-semibold text-xs text-white">
                            {add.name}
                          </span>
                          <span className="block text-[10px] text-slate-400/80 leading-normal">
                            {add.description}
                          </span>
                        </div>
                        <div className="flex flex-col items-end shrink-0 gap-2">
                          <span className="text-[11px] font-mono font-bold text-gold-300">
                            +${add.cost.toLocaleString()}
                          </span>
                          <div
                            className={`h-4.5 w-4.5 rounded border flex items-center justify-center transition-all ${
                              isSelected ? "bg-turquoise-400 border-turquoise-400 text-slate-950" : "border-white/20 bg-slate-950"
                            }`}
                          >
                            {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right: Simulated Visual Preview and Cost Estimate (5 Cols) */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              
              {/* Dynamic Rendering Canvas */}
              <div className="relative rounded-2xl border border-white/10 bg-slate-950 p-6 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                
                {/* Simulated Water Box */}
                <div className="relative h-44 rounded-xl overflow-hidden border border-white/5 bg-slate-950 shadow-inner flex items-center justify-center">
                  
                  {/* Dynamic gradient reflects the selected Quartz color finish */}
                  <div
                    className="absolute inset-0 opacity-80 mix-blend-screen transition-all duration-1000"
                    style={{
                      background: `radial-gradient(circle at center, ${
                        POOL_FINISHES.find((f) => f.id === confFinish)?.colorHex || "#0D9DA4"
                      }70, #030611)`,
                    }}
                  />
                  
                  {/* Animated waving ocean grids using styling overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] [perspective:120px] origin-top skew-x-3 opacity-30 animate-pulse" />
                  
                  {/* Water lighting ripples ripple effect */}
                  <div className="absolute inset-x-0 top-1/4 h-24 bg-gradient-to-tr from-white/5 to-transparent blur-md rotate-12 animate-pulse" />

                  {/* Dynamic indicators overlaid inside the virtual preview box */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-10 pointer-events-none select-none">
                    
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-turquoise-400/40 bg-turquoise-950/80 text-turquoise-300 font-bold uppercase tracking-wider">
                        Virtual Pool Deck
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        Scale: {confSize === "compact" ? "24ft L" : confSize === "estate" ? "40ft L" : "55ft L"}
                      </span>
                    </div>

                    {/* Rendering Addon Icons in Preview representation */}
                    <div className="flex flex-wrap gap-2">
                      {selectedAddons.map((adnId) => {
                        const addonObj = ADDONS.find((a) => a.id === adnId);
                        return (
                          <div
                            key={adnId}
                            className="bg-slate-950/90 border border-gold-400/20 rounded px-2 py-1 text-[8px] font-mono text-gold-300 flex items-center gap-1 shadow"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-ping" />
                            {addonObj?.name.split(" ")[0]} Equipped
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex justify-between items-end border-t border-white/5 pt-2">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                        Aura System Link v5
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Waves className="h-4 w-4 animate-bounce text-turquoise-300" />
                        <span className="text-[10px] font-semibold text-white">
                          Bioluminescence Active
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Estimate Calculations Sheet */}
                <div className="mt-6 space-y-4 divide-y divide-white/5 text-xs">
                  <div className="pb-3 flex justify-between font-mono">
                    <span className="text-slate-400 uppercase tracking-wider">
                      Structural Base {confSize === "compact" ? "(Davis)" : confSize === "estate" ? "(Bayshore)" : "(Belleair)"}
                    </span>
                    <span className="text-white font-semibold">
                      ${(confSize === "compact" ? 95000 : confSize === "estate" ? 138000 : 210000).toLocaleString()}.00
                    </span>
                  </div>

                  <div className="py-3 flex justify-between font-mono">
                    <span className="text-slate-400 uppercase tracking-wider">
                      Gemstone Finish Premium
                    </span>
                    <span className="text-white font-semibold">
                      +${(POOL_FINISHES.find((f) => f.id === confFinish)?.baseCharge || 0).toLocaleString()}.00
                    </span>
                  </div>

                  <div className="py-3 flex justify-between font-mono">
                    <span className="text-slate-400 uppercase tracking-wider">
                      Geotechnical Addons ({selectedAddons.length})
                    </span>
                    <span className="text-white font-semibold">
                      +${selectedAddons.reduce((sum, addId) => sum + (ADDONS.find((a) => a.id === addId)?.cost || 0), 0).toLocaleString()}.00
                    </span>
                  </div>

                  <div className="pt-4 flex justify-between items-baseline">
                    <span className="text-xs uppercase font-display font-extrabold tracking-widest text-[#bdcbea]">
                      Capital Allocation Est
                    </span>
                    <div className="text-right">
                      <span className="block font-mono text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-white to-turquoise-300">
                        $
                        {(
                          (confSize === "compact" ? 95000 : confSize === "estate" ? 138000 : 210000) +
                          (POOL_FINISHES.find((f) => f.id === confFinish)?.baseCharge || 0) +
                          selectedAddons.reduce((sum, addId) => sum + (ADDONS.find((a) => a.id === addId)?.cost || 0), 0)
                        ).toLocaleString()}
                        .00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Engineering Certification details */}
                <div className="mt-6 p-4 rounded-xl border border-gold-400/20 bg-gold-950/20 text-xs text-left">
                  <div className="flex gap-2.5 items-start">
                    <ShieldCheck className="h-4.5 w-4.5 text-gold-400 shrink-0" />
                    <div className="space-y-1">
                      <p className="font-semibold text-white">
                        Tampa Structural Coastal Code Certified
                      </p>
                      <p className="text-slate-400 leading-normal font-light">
                        This custom layout dynamically triggers a Category 5 hurricane piling design. High marine-silt load tolerance included.
                      </p>
                      <p className="text-[10px] font-mono text-gold-400 font-bold uppercase mt-2">
                        Estimated blueprint draft:{" "}
                        {confSize === "compact" ? "7 Business Days" : confSize === "estate" ? "10 Business Days" : "14 Business Days"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Secure Consultation CTA shortcut */}
                <button
                  onClick={() => {
                    const messageArea = document.getElementById("message") as HTMLTextAreaElement;
                    if (messageArea) {
                      const sizeName = confSize === "compact" ? "Davis Courtyard (24x12)" : confSize === "estate" ? "Bayshore Horizon (40x18)" : "Belleair Cathedral (55x22)";
                      const finishName = POOL_FINISHES.find((f) => f.id === confFinish)?.name || "Gemstone finish";
                      const selectedAddonsText = selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).join(", ");
                      const totalEstStr = ((confSize === "compact" ? 95000 : confSize === "estate" ? 138000 : 210000) + (POOL_FINISHES.find((f) => f.id === confFinish)?.baseCharge || 0) + selectedAddons.reduce((sum, addId) => sum + (ADDONS.find((a) => a.id === addId)?.cost || 0), 0)).toLocaleString();

                      messageArea.value = `I used the Interactive lab and selected a: ${sizeName} scale with a ${finishName} finish. My equipped luxuries include: [${selectedAddonsText || "None"}]. Estimated Capital Allocation: $${totalEstStr}. Please compile the custom blueprint for my Tampa estate!`;
                    }
                    scrollToSection("reservation-form-section");
                  }}
                  className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 font-display font-extrabold text-xs uppercase tracking-widest shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 transition-all text-center cursor-pointer block"
                >
                  Apply Config to Consultation Spec
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BEFORE / AFTER TRANSFORMATION SECTION */}
      <section className="relative py-24 bg-gradient-to-b from-slate-950/20 to-slate-950/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* BRAND FOUNDER & ABOUT SECTION */}
      <section
        id="about-founder-section"
        className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#030611] to-slate-950/40"
      >
        {/* Decorative Gold Radial Glow */}
        <div className="absolute top-1/2 left-1/4 h-[350px] w-[350px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Founder Cinematic Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Gold glowing border backdrop */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold-500/20 to-turquoise-400/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950">
                  <img
                    src={arthurPortrait}
                    alt="Arthur Pendelton, Founder & Chief Architect"
                    className="w-full h-auto object-cover aspect-square scale-102 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-display font-bold text-white text-lg tracking-wide">Arthur Pendelton</p>
                    <p className="font-mono text-xs text-gold-400 uppercase tracking-widest mt-1">Founder & Chief Architect</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Founder Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-950/40 border border-gold-500/20 px-3 py-1 text-xs text-gold-300 tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
                <span>Our Heritage</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                An Unwavering Legacy of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-teal-100 to-turquoise-300">
                  Aquatic Engineering
                </span>
              </h2>

              <p className="text-slate-300/90 text-sm md:text-base leading-relaxed font-sans font-light">
                For over a decade, we have reimagined waterfront living across the Gulf Coast. We believe a swimming pool is not just an amenity, but a permanent structural statement—a sanctuary where high-elevation cantilevers meet optically pure transparent barriers.
              </p>

              <div className="p-6 rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur-xl">
                <p className="text-gold-300 font-display italic text-sm leading-relaxed">
                  "Owned and run by Arthur Pendelton — family owned and operated in Tampa."
                </p>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  Every foundation model and geotechnical verification undergoes rigorous testing directly under Arthur's personal oversight, ensuring lifetime durability and aesthetic masterpiece.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="border-l-2 border-turquoise-400 pl-4">
                  <p className="font-mono text-xl font-bold text-white">Since 2012</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Tampa Operations</p>
                </div>
                <div className="border-l-2 border-gold-400 pl-4">
                  <p className="font-mono text-xl font-bold text-white">1,200+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Estates Handcrafted</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION OVERLAY */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto relative z-10 w-full space-y-4">
          <div className="text-center space-y-2 mb-10">
            <h2 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-white text-center">
              Our Clients' Verdicts
            </h2>
            <p className="text-xs md:text-sm text-slate-400 max-w-md mx-auto">
              Real testimonials from estate homeowners who trusted us with their master backyard landscapes.
            </p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* RESERVATION FORM & SPECS SECTION */}
      <section
        id="reservation-form-section"
        className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-[#030611]"
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <ReservationForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-white/5 bg-slate-950 py-12 px-6 md:px-12 text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => scrollToSection("hero-top")}
              className="flex items-center gap-2 text-left cursor-pointer"
            >
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-turquoise-500 to-gold-400 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-slate-950">
                  <Waves className="h-4 w-4 text-turquoise-400" />
                </div>
              </div>
              <div>
                <span className="font-display font-extrabold text-sm tracking-widest text-white leading-none">
                  AURA
                </span>
                <span className="block text-[8px] font-mono tracking-widest text-gold-400 uppercase">
                  LUXURY POOLS
                </span>
              </div>
            </button>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Award-winning geotechnical engineers and pool architects certified to design transparent acrylic viewing walls, cantilevers, and smart pool ecosystems for luxurious residential estates.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-turquoise-400 animate-ping"></span>
              <span>Available for projects nationwide</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-white text-xs font-semibold uppercase tracking-widest">
              Design Links
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => scrollToSection("before-after-gallery")}
                className="block text-slate-400 hover:text-turquoise-400 transition-colors cursor-pointer text-left"
              >
                Before / After Sliding Gallery
              </button>
              <button
                onClick={() => scrollToSection("service-section")}
                className="block text-slate-400 hover:text-turquoise-400 transition-colors cursor-pointer text-left"
              >
                Service Portfolios & Addons
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block text-slate-400 hover:text-turquoise-400 transition-colors cursor-pointer text-left"
              >
                Google Reviews Slider
              </button>
              <button
                onClick={() => scrollToSection("reservation-form-section")}
                className="block text-slate-400 hover:text-turquoise-400 transition-colors cursor-pointer text-left"
              >
                Get a Free Quote
              </button>
            </div>
          </div>

          {/* Headquarters Info Column */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <h4 className="font-display text-white text-xs font-semibold uppercase tracking-widest">
              National Headquarters
            </h4>
            <div className="space-y-2 text-slate-500">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  Aura Architectural Center, Suite 900 <br />
                  8420 Wilshire Blvd, Beverly Hills, CA 90211
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-turquoise-400 shrink-0" />
                <span>Est. Design Office Open Hours: 9 AM - 6 PM MT</span>
              </div>
              <p className="text-[10px] text-slate-600">
                License Board Certification No: #CAC-94002-POOLS
              </p>
            </div>
          </div>

        </div>

        {/* Legal Strip */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600">
          <p>© 2026 Aura Luxury Pools Inc. All intellectual 3D architectural renders reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-help">T&C Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors cursor-help">Engineering Certifications</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
