import React, { useState } from 'react';
import { OWNER_INFO, PRODUCTION_FAQ } from '../data/portfolioData';
import { validateContactForm, ContactFormData, FormErrors } from '../utils/portfolio';
import { Copy, CheckCircle2, ChevronDown, ChevronUp, Mail, Send, MapPin, Calendar, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'Commercial Directing',
    timeline: 'Q3 2026',
    budgetRange: '$50,000 - $100,000',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleCopyEmail = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(OWNER_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate deterministic network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Commercial Directing',
      timeline: 'Q3 2026',
      budgetRange: '$50,000 - $100,000',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-[#141414] text-[#FAFAFA] min-h-screen py-12 md:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-24">
        {/* Header */}
        <div className="border-b border-[#262624] pb-8 space-y-4">
          <div className="text-xs font-mono tracking-widest text-[#A3A3A0] uppercase">
            DIRECT COMMISSION INQUIRIES // Q3/Q4 2026
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAFA]">
              Initiate Collaboration
            </h1>
            <div className="text-xs font-mono text-[#A3A3A0]">
              DIRECT RESPONSE WITHIN 24 HOURS
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Left Contact Info / Representation, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Representation (5 Cols) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Direct Email Card */}
            <div className="p-8 bg-[#1C1C1A] border border-[#262624] space-y-4">
              <div className="text-xs font-mono uppercase text-[#A3A3A0] tracking-widest">
                DIRECT STUDIO EMAIL
              </div>
              <div className="text-lg md:text-xl font-bold text-[#FAFAFA] break-all">
                {OWNER_INFO.email}
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2 bg-[#2B2B28] hover:bg-[#383835] text-xs font-mono text-[#FAFAFA] uppercase transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>EMAIL COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* Current Status & Location */}
            <div className="p-8 bg-[#1C1C1A] border border-[#262624] space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3 text-[#A3A3A0]">
                <MapPin className="w-4 h-4 text-[#FAFAFA]" />
                <span>Munich, Germany · European Union</span>
              </div>
              <div className="flex items-center gap-3 text-[#A3A3A0]">
                <Calendar className="w-4 h-4 text-[#FAFAFA]" />
                <span className="text-[#FAFAFA]">Booking: Q3 / Q4 2026 Production</span>
              </div>
              <div className="flex items-center gap-3 text-[#A3A3A0]">
                <Clock className="w-4 h-4 text-[#FAFAFA]" />
                <span>Central European Time (UTC+2)</span>
              </div>
            </div>

            {/* Representation & Agent Info */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase text-[#A3A3A0] tracking-widest">
                REPRESENTATION & ROSTERS
              </div>
              <div className="text-xs space-y-3 text-[#A3A3A0] leading-relaxed">
                <div>
                  <strong className="text-[#FAFAFA] block">Commercials Europe & UK</strong>
                  <span>Independent representation via Munich HQ. Direct inquiries welcomed.</span>
                </div>
                <div>
                  <strong className="text-[#FAFAFA] block">North America & Asia</strong>
                  <span>Available on production-company contract or direct agency engagement.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1C1C1A] border border-[#262624] p-8 md:p-12">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#2B2B28] flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">Inquiry Received</h3>
                  <p className="text-sm text-[#A3A3A0] max-w-md mx-auto">
                    Thank you, {formData.name}. Your project brief has been logged. Amir will review the parameters and follow up within 24 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#FAFAFA] text-[#141414] text-xs font-bold tracking-widest uppercase hover:bg-white transition-all"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-[#A3A3A0]">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Lindqvist"
                      className={`w-full px-4 py-3 bg-[#141414] border text-sm text-[#FAFAFA] focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-[#333330] focus:border-[#FAFAFA]'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-[#A3A3A0]">
                      Work Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@agency.com"
                      className={`w-full px-4 py-3 bg-[#141414] border text-sm text-[#FAFAFA] focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-[#333330] focus:border-[#FAFAFA]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company / Brand */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-xs font-mono uppercase text-[#A3A3A0]">
                      Agency / Brand / Studio
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Nexus Productions"
                      className="w-full px-4 py-3 bg-[#141414] border border-[#333330] text-sm text-[#FAFAFA] focus:outline-none focus:border-[#FAFAFA]"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="block text-xs font-mono uppercase text-[#A3A3A0]">
                      Primary Discipline *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#141414] border border-[#333330] text-sm text-[#FAFAFA] focus:outline-none focus:border-[#FAFAFA]"
                    >
                      <option value="Commercial Directing">Commercial Directing</option>
                      <option value="Motion Design Lead">Motion Design Lead</option>
                      <option value="3D Motion & Simulation">3D Motion & Simulation</option>
                      <option value="Creative Producing">Creative Producing</option>
                      <option value="Art Direction">Art Direction</option>
                      <option value="Real-Time Cinematics">Real-Time Cinematics (Unreal 5)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Timeline */}
                  <div className="space-y-1.5">
                    <label htmlFor="timeline" className="block text-xs font-mono uppercase text-[#A3A3A0]">
                      Target Delivery Window
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#141414] border border-[#333330] text-sm text-[#FAFAFA] focus:outline-none focus:border-[#FAFAFA]"
                    >
                      <option value="Q3 2026">Q3 2026</option>
                      <option value="Q4 2026">Q4 2026</option>
                      <option value="Q1 2027">Q1 2027</option>
                      <option value="Urgent / Short-Turnaround">Urgent / Short-Turnaround</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label htmlFor="budgetRange" className="block text-xs font-mono uppercase text-[#A3A3A0]">
                      Estimated Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#141414] border border-[#333330] text-sm text-[#FAFAFA] focus:outline-none focus:border-[#FAFAFA]"
                    >
                      <option value="$25,000 - $50,000">$25,000 – $50,000</option>
                      <option value="$50,000 - $100,000">$50,000 – $100,000</option>
                      <option value="$100,000 - $250,000">$100,000 – $250,000</option>
                      <option value="$250,000+">$250,000+ (Turnkey Production)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-[#A3A3A0]">
                    Project Details & Brief *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the campaign brief, desired visual tone, scope of deliverables, and reference links..."
                    className={`w-full px-4 py-3 bg-[#141414] border text-sm text-[#FAFAFA] focus:outline-none ${
                      errors.message ? 'border-red-500' : 'border-[#333330] focus:border-[#FAFAFA]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#FAFAFA] text-[#141414] text-xs font-bold tracking-widest uppercase transition-all hover:bg-white active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>TRANSMIT BRIEF</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="border-t border-[#262624] pt-16 space-y-8">
          <div className="text-xs font-mono tracking-widest text-[#A3A3A0] uppercase">
            COLLABORATION PROTOCOL // FREQUENTLY ASKED QUESTIONS
          </div>
          <div className="divide-y divide-[#262624] border-y border-[#262624]">
            {PRODUCTION_FAQ.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-base md:text-lg font-bold text-[#FAFAFA] hover:text-[#A3A3A0] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-xs md:text-sm text-[#A3A3A0] leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
