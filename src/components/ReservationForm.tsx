/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, ChangeEvent } from "react";
import { Send, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { Reservation } from "../types";

export default function ReservationForm() {
  const [formData, setFormData] = useState<Reservation>({
    fullName: "",
    email: "",
    phone: "",
    projectType: "infinity-edge",
    budgetRange: "150-250",
    timeline: "3months",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Quick Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Please fill in all required fields (Name, Email, Phone).");
      return;
    }

    setIsLoading(true);

    // Simulate luxury API response and loading effect
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div id="reservation-container" className="relative w-full max-w-3xl mx-auto">
      {/* Decorative Aura Background Neon behind form */}
      <div className="absolute -inset-1 bg-gradient-to-r from-turquoise-500/10 via-gold-500/10 to-indigo-500/10 blur-2xl rounded-3xl pointer-events-none -z-10" />

      <div className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-6 md:p-10 shadow-3xl backdrop-blur-xl">
        
        {/* Animated Custom Success Screen */}
        {isSubmitted ? (
          <div id="reservation-success-card" className="py-12 text-center space-y-6 animate-fade-in">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-turquoise-500 to-teal-400 p-0.5 shadow-lg shadow-turquoise-500/25">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
                <CheckCircle2 className="h-10 w-10 text-turquoise-400" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-gold-400 uppercase">Consultation Secured</span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
                Vision Board Initiated
              </h3>
              <p className="max-w-md mx-auto text-slate-400 text-sm leading-relaxed">
                Thank you, <strong className="text-turquoise-300">{formData.fullName}</strong>. A dedicated Elite Architectural Consultant has been assigned to your private property vision. We will reach out to you within 24 hours.
              </p>
            </div>

            <div className="max-w-md mx-auto p-4 rounded-xl border border-white/5 bg-slate-900/40 divide-y divide-white/5 text-left text-xs space-y-2 text-slate-300">
              <div className="flex justify-between pb-2 pt-1">
                <span className="text-slate-500 uppercase font-mono text-[10px]">Reference</span>
                <span className="font-mono text-white">#AURA-POOL-2026-{(Math.random() * 10000).toFixed(0)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 uppercase font-mono text-[10px]">Project Category</span>
                <span className="text-turquoise-300 capitalize">{formData.projectType.replace("-", " ")}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 uppercase font-mono text-[10px]">Assigned Counselor</span>
                <span className="text-gold-400 flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" /> Senior Architect Team
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  projectType: "infinity-edge",
                  budgetRange: "150-250",
                  timeline: "3months",
                  message: "",
                });
              }}
              className="mt-6 text-xs text-slate-500 hover:text-turquoise-400 transition-colors uppercase font-mono underline underline-offset-4 pointer-events-auto cursor-pointer"
            >
              Modify details or submit another plan
            </button>
          </div>
        ) : (
          /* Main Reservation Form Inputs */
          <form id="consultation-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-2 max-w-lg mx-auto pb-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-950/40 border border-gold-500/20 px-3 py-1 text-xs text-gold-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Private Oasis Consultations</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white leading-tight">
                Secure Your VIP Consultation
              </h3>
              <p className="text-slate-400 text-xs md:text-sm">
                Provide detail about your architectural pool vision. Let us design your custom turquoise sanctuary.
              </p>
            </div>

            {error && (
              <div className="p-4 rounded-xl border border-red-500/30 bg-red-950/20 text-red-200 text-xs flex items-start gap-2 animate-bounce">
                <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-xs font-medium text-slate-300">
                  Full Name <span className="text-turquoise-400">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Sterling Hunt"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white text-sm placeholder-slate-500 transition-all duration-300 focus:border-turquoise-400 focus:shadow-[0_0_15px_rgba(29,194,202,0.25)] focus:bg-slate-900 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-medium text-slate-300">
                  Email Address <span className="text-turquoise-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. sterling@luxuryvilla.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white text-sm placeholder-slate-500 transition-all duration-300 focus:border-turquoise-400 focus:shadow-[0_0_15px_rgba(29,194,202,0.25)] focus:bg-slate-900 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="block text-xs font-medium text-slate-300">
                  Phone Number <span className="text-turquoise-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. (555) 234-5678"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white text-sm placeholder-slate-500 transition-all duration-300 focus:border-turquoise-400 focus:shadow-[0_0_15px_rgba(29,194,202,0.25)] focus:bg-slate-900 focus:outline-none"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-1.5">
                <label htmlFor="projectType" className="block text-xs font-medium text-slate-300">
                  Project Category
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white text-sm transition-all duration-300 focus:border-turquoise-400 focus:shadow-[0_0_15px_rgba(29,194,202,0.25)] focus:bg-slate-900 focus:outline-none"
                >
                  <option value="infinity-edge">Infinity Edge Concept</option>
                  <option value="acrylic-glass">Marine Glass Wall</option>
                  <option value="geometric-lap">Glass Villa Lap Pool</option>
                  <option value="natural-grotto">Multi-Tier Stone Grotto</option>
                  <option value="ultimate-custom">Total Custom Architecture</option>
                </select>
              </div>

              {/* Budget Range */}
              <div className="space-y-1.5">
                <label htmlFor="budgetRange" className="block text-xs font-medium text-slate-300">
                  Target Project Budget
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white text-sm transition-all duration-300 focus:border-turquoise-400 focus:shadow-[0_0_15px_rgba(29,194,202,0.25)] focus:bg-slate-900 focus:outline-none"
                >
                  <option value="100-150">$100,000 to $150,000</option>
                  <option value="150-250">$150,050 to $250,000</option>
                  <option value="250-500">$250,000 to $500,000</option>
                  <option value="500+">$500,000+ Luxury Tier</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="space-y-1.5">
                <label htmlFor="timeline" className="block text-xs font-medium text-slate-300">
                  Implementation Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white text-sm transition-all duration-300 focus:border-turquoise-400 focus:shadow-[0_0_15px_rgba(29,194,202,0.25)] focus:bg-slate-900 focus:outline-none"
                >
                  <option value="immediate">Immediate Start</option>
                  <option value="3months">Within 3 Months</option>
                  <option value="6months">3 - 6 Months</option>
                  <option value="season">Next Groundbreaking Season</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-medium text-slate-300">
                Describe Your Vision
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Give details design features, e.g. 'I want a glassy cantilever view looking south, fire bowl details, and direct step levels connected with the patio glass villa...'"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900/50 text-white text-sm placeholder-slate-500 transition-all duration-300 focus:border-turquoise-400 focus:shadow-[0_0_15px_rgba(29,194,202,0.25)] focus:bg-slate-900 focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Bottom Note & Submit */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
              <span className="text-[11px] text-slate-500 max-w-sm sm:text-left text-center leading-normal">
                By submitting this form, you authorize Aura Luxury Pools to generate initial 3D topographical layouts for your land parcel.
              </span>
              <button
                type="submit"
                id="submit-consultation"
                disabled={isLoading}
                className="group w-full sm:w-auto relative cursor-pointer overflow-hidden rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 font-display font-semibold text-slate-950 px-8 py-3.5 text-sm tracking-wide shadow-lg shadow-gold-500/15 hover:shadow-gold-500/25 transition-all duration-300 active:scale-98 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Verifying Property...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Secret Specification</span>
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
