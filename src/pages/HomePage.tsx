import React, { useState } from "react";
import {
  OWNER_INFO,
  PROJECTS,
  DISCIPLINES,
  CLIENT_ROSTER,
} from "../data/portfolioData";
import { ProjectCard } from "../components/ProjectCard";
import { VideoPlayer } from "../components/VideoPlayer";
import { ProjectArtwork } from "../components/ProjectArtwork";
import { PageRoute } from "../utils/router";
import { ArrowRight, Play, Award, Film, Layers, Sparkles } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: PageRoute, slug?: string | null) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState(0);

  return (
    <div className="space-y-24 md:space-y-36">
      {/* 1. EDITORIAL LIGHT HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-20">
        <div className="flex flex-col space-y-8">
          {/* Subtle Metadata Kicker */}
          <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-[#737373] tracking-widest uppercase">
            <span>MUNICH & GLOBAL REMOTE</span>
            <span aria-hidden="true">·</span>
            <span>DIRECTING & 3D MOTION</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#171717] font-semibold">
              2026 AVAILABILITY OPEN
            </span>
          </div>

          {/* Hero Headline */}
          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#171717] leading-[1.04]">
              Crafting visceral motion, commercial cinema & 3D spatial worlds.
            </h1>
          </div>

          {/* Disciplines Lead Line */}
          <div className="pt-2 max-w-3xl">
            <p className="text-lg md:text-xl text-[#737373] leading-relaxed font-normal">
              Senior portfolio of{" "}
              <strong className="text-[#171717] font-semibold">
                xaniar ghaderpanah
              </strong>
              . Partnering with global brands, agencies, and cultural
              institutions as Commercial Director, Motion Design Lead, 3D Motion
              Designer, and Cinematic Artist.
            </p>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate("work")}
              className="px-6 py-3.5 bg-[#171717] text-[#FAFAF8] text-xs font-semibold tracking-wider uppercase transition-all hover:bg-[#2C2C29] flex items-center gap-2"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("about")}
              className="px-6 py-3.5 border border-[#E8E8E6] text-[#171717] text-xs font-semibold tracking-wider uppercase transition-all hover:border-[#171717] hover:bg-white"
            >
              ABOUT & MANIFESTO
            </button>
          </div>

          {/* 3 Metric Summary Row (Frontend Design Constitution compliant) */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#E8E8E6]">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#171717] font-mono tabular-nums">
                11+
              </div>
              <div className="text-xs text-[#737373] uppercase tracking-wider mt-1">
                Years Industry Lead
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#171717] font-mono tabular-nums">
                80+
              </div>
              <div className="text-xs text-[#737373] uppercase tracking-wider mt-1">
                Produced Campaigns
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#171717] font-mono tabular-nums">
                14
              </div>
              <div className="text-xs text-[#737373] uppercase tracking-wider mt-1">
                International Awards
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#171717] font-mono tabular-nums">
                4K / ACES
              </div>
              <div className="text-xs text-[#737373] uppercase tracking-wider mt-1">
                Master Delivery Spec
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC DARK SHOWREEL SECTION (Cinematic Contrast) */}
      <section className="bg-[#141414] text-[#FAFAFA] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#262624] pb-6">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#A3A3A0] uppercase mb-2">
                CINEMA SHOWREEL // 2025–2026
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#FAFAFA]">
                Direction & Motion Reel
              </h2>
            </div>
            <p className="max-w-md text-xs md:text-sm text-[#A3A3A0] leading-relaxed">
              A curated composite of commercial direction, procedural 3D
              simulations, kinetic typographic identity systems, and photoreal
              real-time cinematics.
            </p>
          </div>

          {/* Interactive Cinematic Video Player */}
          <div className="relative">
            <VideoPlayer
              videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
              aspectRatio="2.39:1"
              title="xaniar ghaderpanah Showreel"
              posterComponent={
                <ProjectArtwork
                  projectId="polestar-aerolight"
                  title="xaniar ghaderpanah Director Showreel"
                  aspectRatio="2.39:1"
                />
              }
            />
          </div>

          {/* Reel Index Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#A3A3A0] pt-2">
            <div className="border-t border-[#262624] pt-3">
              <span className="text-[#FAFAFA] block font-bold">
                00:00 — 00:28
              </span>
              <span>Anamorphic Automotive</span>
            </div>
            <div className="border-t border-[#262624] pt-3">
              <span className="text-[#FAFAFA] block font-bold">
                00:28 — 00:54
              </span>
              <span>Procedural 3D Physics</span>
            </div>
            <div className="border-t border-[#262624] pt-3">
              <span className="text-[#FAFAFA] block font-bold">
                00:54 — 01:20
              </span>
              <span>Kinetic Brand Identity</span>
            </div>
            <div className="border-t border-[#262624] pt-3">
              <span className="text-[#FAFAFA] block font-bold">
                01:20 — 01:42
              </span>
              <span>Real-Time Unreal 5</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED PROJECTS GALLERY (Light Editorial Grid) */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E8E6] pb-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#737373] uppercase mb-2">
              PORTFOLIO // SELECTED CASE STUDIES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#171717]">
              Featured Works
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("work")}
            className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#171717] hover:text-[#737373] transition-colors"
          >
            <span>VIEW ALL 8 PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(slug) => onNavigate("project", slug)}
            />
          ))}
        </div>
      </section>

      {/* 4. SEVEN PROFESSIONAL DISCIPLINES MATRIX */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="border-b border-[#E8E8E6] pb-6">
          <div className="text-xs font-mono tracking-widest text-[#737373] uppercase mb-2">
            CORE CAPABILITIES // 7 SPECIALIZATIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#171717]">
            Professional Disciplines
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Discipline Selector List (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-[#E8E8E6] border-y border-[#E8E8E6]">
            {DISCIPLINES.map((discipline, idx) => {
              const isActive = activeDisciplineIndex === idx;
              return (
                <button
                  key={discipline.id}
                  type="button"
                  onClick={() => setActiveDisciplineIndex(idx)}
                  className={`text-left py-4 px-2 transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-white text-[#171717] font-bold pl-4"
                      : "text-[#737373] hover:text-[#171717] hover:pl-3"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#A3A3A0]">
                      0{idx + 1}
                    </span>
                    <span className="text-base md:text-lg">
                      {discipline.title}
                    </span>
                  </div>
                  {isActive && (
                    <ArrowRight className="w-4 h-4 text-[#171717]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Discipline Detailed Card (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E8E8E6] p-8 md:p-10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                DISCIPLINE PROFILE 0{activeDisciplineIndex + 1}
              </span>
              <button
                type="button"
                onClick={() => onNavigate("expertise")}
                className="text-xs font-semibold text-[#171717] hover:underline"
              >
                Full Expertise Breakdown →
              </button>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#171717]">
              {DISCIPLINES[activeDisciplineIndex].title}
            </h3>

            <p className="text-base text-[#525252] leading-relaxed">
              {DISCIPLINES[activeDisciplineIndex].fullDesc}
            </p>

            <div className="pt-4 border-t border-[#E8E8E6] space-y-3">
              <div className="text-xs font-mono tracking-wider text-[#737373] uppercase">
                CORE DELIVERABLES:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#171717]">
                {DISCIPLINES[activeDisciplineIndex].deliverables.map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#171717]" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E8E8E6] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#737373] mr-2">
                TECH PIPELINE:
              </span>
              {DISCIPLINES[activeDisciplineIndex].tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-xs font-mono bg-[#FAFAF8] border border-[#E8E8E6] px-2.5 py-1 text-[#171717]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLIENT & COLLABORATORS ROSTER */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="border-b border-[#E8E8E6] pb-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#737373] uppercase mb-2">
              COMMISSIONED COLLABORATIONS
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171717]">
              Client & Studio Roster
            </h2>
          </div>
          <div className="text-xs font-mono text-[#737373] hidden sm:block">
            GLOBAL REACH // SELECT PARTNERS
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CLIENT_ROSTER.map((client, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E8E6] p-6 flex flex-col justify-between hover:border-[#171717] transition-colors"
            >
              <div className="text-lg font-bold text-[#171717]">
                {client.name}
              </div>
              <div className="text-xs text-[#737373] mt-3">
                <div>{client.industry}</div>
                <div className="font-mono text-[11px] text-[#A3A3A0] mt-0.5">
                  {client.region}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. STRATEGIC DARK CONTACT CALLOUT (Cinematic Contrast) */}
      <section className="bg-[#141414] text-[#FAFAFA] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="text-xs font-mono tracking-widest text-[#A3A3A0] uppercase">
            DIRECTING COMMISSIONS & BRAND INQUIRIES
          </div>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-[#FAFAFA] leading-tight">
            Have a film, campaign, or 3D vision to bring to life?
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#A3A3A0] leading-relaxed">
            Currently accepting commercial directing commissions, motion design
            leadership roles, and high-concept 3D audiovisual projects for Q3/Q4
            2026.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 bg-[#FAFAFA] text-[#141414] text-xs font-bold tracking-widest uppercase transition-all hover:bg-white active:scale-98"
            >
              START PROJECT CONVERSATION
            </button>
            <a
              href={`mailto:${OWNER_INFO.email}`}
              className="px-8 py-4 border border-[#333330] text-[#FAFAFA] text-xs font-bold tracking-widest uppercase transition-all hover:border-[#FAFAFA]"
            >
              {OWNER_INFO.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
