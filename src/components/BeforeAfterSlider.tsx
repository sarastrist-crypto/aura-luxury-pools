/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { ArrowLeftRight, ChevronRight, Sparkles, MapPin, Minimize2 } from "lucide-react";
import { BeforeAfterProject } from "../types";

const PROJECTS: BeforeAfterProject[] = [
  {
    id: "horizon-crest",
    title: "The Horizon Infinity Crest",
    category: "Infinity Edge Oasis",
    beforeUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    afterUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200",
    description: "Built into a high-gradient hillside, utilizing architectural concrete-cantilevers and structural glass to form an endless horizon reflection. Integrated turquoise heating controls and eco-filtration.",
    location: "Beverly Hills, CA",
    dimensions: "50' x 22' Infinity Edge",
  },
  {
    id: "emerald-villa",
    title: "The Glass Villa Lap Pool",
    category: "Modern Glass Architecture",
    beforeUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200",
    afterUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    description: "A complete excavation of a muddy construction site into a sharp geometric reflecting canal. Fully features a sunken lounge, turquoise underwater LED glow lanes, and direct swim-up sliders from the master villa.",
    location: "Miami Beach, FL",
    dimensions: "60' x 15' Architectural Lap",
  },
  {
    id: "sapphire-cliff",
    title: "The Sapphire Grotto",
    category: "Clifftop Sanctuary",
    beforeUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200",
    afterUrl: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?auto=format&fit=crop&q=80&w=1200",
    description: "A dramatic clifftop transformation. From raw slate and rubble into a secluded, multi-tiered dark cobalt sanctuary embedded with sparkling fiber-optic light-emitting starry skies.",
    location: "Austin Ridge, TX",
    dimensions: "34' x 20' Multi-tier Grotto",
  },
];

export default function BeforeAfterSlider() {
  const [activeProject, setActiveProject] = useState<BeforeAfterProject>(PROJECTS[0]);
  const [sliderX, setSliderX] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(containerRef.current);
    
    // Set initial width
    setContainerWidth(containerRef.current.offsetWidth);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeProject]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderX(percentage);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUpGlobal);
      window.addEventListener("touchend", handleMouseUpGlobal);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal);
      window.removeEventListener("touchend", handleMouseUpGlobal);
    };
  }, [isDragging]);

  return (
    <div id="before-after-gallery" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Narrative Panel */}
      <div className="lg:col-span-5 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-950/40 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-gold-300 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-gold-400 animate-pulse" />
          Interactive Masterpieces
        </div>
        
        <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
          Dramatic Pool <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise-300 via-teal-100 to-gold-300">
            Transformations
          </span>
        </h3>
        
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Interact with our architectural slider to witness how we turn rough, unrefined ground into breathtaking turquoise sanctuaries of absolute luxury.
        </p>

        {/* Project Selector tabs */}
        <div className="space-y-3 pt-2">
          {PROJECTS.map((project) => {
            const isActive = project.id === activeProject.id;
            return (
              <button
                key={project.id}
                id={`btn-proj-${project.id}`}
                onClick={() => {
                  setActiveProject(project);
                  setSliderX(50);
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                  isActive
                    ? "bg-slate-900/50 border-turquoise-500/30 shadow-lg shadow-turquoise-500/5"
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                <div>
                  <h4 className={`font-display font-medium text-sm md:text-base transition-colors duration-200 ${
                    isActive ? "text-turquoise-300" : "text-slate-300 group-hover:text-white"
                  }`}>
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{project.category}</p>
                </div>
                <ChevronRight className={`h-5 w-5 transition-all duration-300 ${
                  isActive ? "text-turquoise-400 translate-x-1" : "text-slate-500 group-hover:text-slate-300"
                }`} />
              </button>
            );
          })}
        </div>

        {/* Specs of Active Project */}
        <div className="p-4 rounded-xl bg-slate-900/30 border border-white/5 space-y-2 mt-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <MapPin className="h-3 w-3 text-gold-400" />
            <span>Location: <strong className="text-slate-200">{activeProject.location}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Minimize2 className="h-3 w-3 text-turquoise-400" />
            <span>Dimensions: <strong className="text-slate-200">{activeProject.dimensions}</strong></span>
          </div>
        </div>
      </div>

      {/* Slider Viewer Panel */}
      <div className="lg:col-span-7">
        <div className="relative space-y-3">
          <div className="text-center text-xs text-slate-400 flex justify-center gap-6 pb-1">
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>Drag Slider to Reveal Before Construction</span>
          </div>
          
          <div
            ref={containerRef}
            id="slider-container"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onTouchStart={() => setIsDragging(true)}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-white/10 shadow-3xl cursor-ew-resize group bg-slate-950"
          >
            {/* BASE LAYER: AFTER IMAGE */}
            <img
              src={activeProject.afterUrl}
              alt={`${activeProject.title} After Finished`}
              className="absolute inset-0 h-full w-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Tag for "AFTER" */}
            <div className="absolute right-4 top-4 z-10 rounded-full border border-turquoise-400/30 bg-slate-950/80 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-turquoise-300 shadow-md backdrop-blur-md">
              After Oasis
            </div>

            {/* OVERLAY LAYER: BEFORE IMAGE (CLIPPED) */}
            <div
              className="absolute inset-y-0 left-0 h-full overflow-hidden pointer-events-none border-r-2 border-gold-400"
              style={{ width: `${sliderX}%` }}
            >
              <img
                src={activeProject.beforeUrl}
                alt={`${activeProject.title} Before Excavation`}
                className="absolute inset-y-0 left-0 h-full object-cover max-w-none"
                style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Tag for "BEFORE" */}
              <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-slate-400 shadow-md backdrop-blur-md">
                Raw Ground
              </div>
            </div>

            {/* HANDLE CONTROL BAR */}
            <div
              id="slider-handle"
              className="absolute inset-y-0 z-20 w-0.5 bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500 cursor-ew-resize flex items-center justify-center transition-opacity"
              style={{ left: `${sliderX}%` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400 bg-slate-950 text-gold-400 shadow-xl shadow-gold-950/50 transition-transform duration-200 group-hover:scale-110">
                <ArrowLeftRight className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          <p className="text-xs md:text-sm text-slate-400 italic text-center px-4 leading-relaxed">
            "{activeProject.description}"
          </p>
        </div>
      </div>
    </div>
  );
}
