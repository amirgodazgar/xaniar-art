import React from 'react';
import { DISCIPLINES } from '../data/portfolioData';
import { PageRoute } from '../utils/router';
import { ArrowRight, CheckCircle2, Film, Box, Clapperboard, Compass } from 'lucide-react';

interface ExpertisePageProps {
  onNavigate: (page: PageRoute, slug?: string | null) => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({ onNavigate }) => {
  const workflowStages = [
    {
      num: '01',
      title: 'Narrative Concept & Treatment',
      desc: 'Formulating the conceptual spine, scriptwriting, visual treatment decks, and tone grammar before a single frame is rendered.',
    },
    {
      num: '02',
      title: 'Computational 3D R&D & Styleframes',
      desc: 'Developing bespoke shaders, particle dynamics, physics simulations, and tactile lighting tests in Houdini, Cinema 4D, and Redshift.',
    },
    {
      num: '03',
      title: 'Live-Action Directing & Virtual Production',
      desc: 'Leading camera crews, directing talent, executing camera choreographies on anamorphic glass or inside Unreal Engine 5 virtual volumes.',
    },
    {
      num: '04',
      title: 'Finishing, Sound & Master Delivery',
      desc: 'Precision editorial pacing, spatial sound engineering, calibrated ACES color grading, and broadcast multi-format exports.',
    },
  ];

  return (
    <div className="space-y-20 md:space-y-28 py-12 md:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 space-y-6">
        <div className="border-b border-[#E8E8E6] pb-8">
          <div className="text-xs font-mono tracking-widest text-[#737373] uppercase mb-2">
            DISCIPLINES & METHODOLOGY
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717]">
            Creative Expertise
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[#525252] leading-relaxed">
            Bridging high-concept art direction with cutting-edge computational 3D systems 
            and live-action commercial cinema. Operating across 7 specialized professional disciplines.
          </p>
        </div>
      </section>

      {/* 2. Deep Dive Into All 7 Disciplines */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="space-y-12">
          {DISCIPLINES.map((discipline, idx) => (
            <div
              key={discipline.id}
              className="bg-white border border-[#E8E8E6] p-8 md:p-12 space-y-8 hover:border-[#171717] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-[#E8E8E6] pb-6">
                <div>
                  <div className="font-mono text-xs text-[#737373] uppercase tracking-widest mb-1">
                    ROLE 0{idx + 1}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-[#171717]">
                    {discipline.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('project', discipline.caseStudyHighlightId)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#FAFAF8] border border-[#E8E8E6] text-xs font-semibold text-[#171717] uppercase tracking-wider hover:bg-[#171717] hover:text-white transition-all self-start md:self-auto"
                >
                  <span>Featured Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-base md:text-lg text-[#262624] leading-relaxed">
                    {discipline.fullDesc}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="text-xs font-mono uppercase text-[#737373] tracking-wider mb-2">
                      CORE DELIVERABLES:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#171717]">
                      {discipline.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#171717]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase text-[#737373] tracking-wider mb-2">
                      TECHNICAL PIPELINE:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {discipline.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] font-mono bg-[#FAFAF8] border border-[#E8E8E6] text-[#525252]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Production Pipeline Stages */}
      <section className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="border-b border-[#E8E8E6] pb-6">
          <div className="text-xs font-mono tracking-widest text-[#737373] uppercase mb-2">
            PRODUCTION PROTOCOL
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#171717]">
            The Four-Stage Production Pipeline
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowStages.map((stage) => (
            <div key={stage.num} className="p-6 bg-white border border-[#E8E8E6] space-y-3">
              <div className="text-2xl font-mono font-bold text-[#171717]">{stage.num}</div>
              <h3 className="font-bold text-[#171717] text-base">{stage.title}</h3>
              <p className="text-xs text-[#525252] leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Executive Testimonials */}
      <section className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="border-b border-[#E8E8E6] pb-6">
          <div className="text-xs font-mono tracking-widest text-[#737373] uppercase mb-2">
            COLLABORATION TESTIMONIALS
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#171717]">
            Industry Endorsements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-[#E8E8E6] space-y-4">
            <blockquote className="text-sm md:text-base text-[#262624] italic leading-relaxed">
              "Amir brings an extraordinary hybrid brain to production. He moves seamlessly from live-action camera directing on set to complex procedural Houdini simulations, always keeping the overarching narrative rhythm impeccably tight."
            </blockquote>
            <div className="pt-2 border-t border-[#E8E8E6] text-xs">
              <div className="font-bold text-[#171717]">Elena Rostova</div>
              <div className="text-[#737373]">Executive Creative Director · Stockholm Creative Group</div>
            </div>
          </div>

          <div className="p-8 bg-white border border-[#E8E8E6] space-y-4">
            <blockquote className="text-sm md:text-base text-[#262624] italic leading-relaxed">
              "Working with Amir on our global innovation campaign was flawless. He translated abstract biomechanical engineering data into pure cinematic poetry with kinetic typography that set a new benchmark for our brand."
            </blockquote>
            <div className="pt-2 border-t border-[#E8E8E6] text-xs">
              <div className="font-bold text-[#171717]">Julian H. Wright</div>
              <div className="text-[#737373]">Global Brand VP · High-Performance Motion</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
