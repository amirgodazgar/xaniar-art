import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { getAdjacentProjects } from '../utils/portfolio';
import { VideoPlayer } from '../components/VideoPlayer';
import { ProjectArtwork } from '../components/ProjectArtwork';
import { PageRoute } from '../utils/router';
import { ArrowLeft, ArrowRight, Award, Film, CheckCircle2, Share2, Copy } from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (page: PageRoute, slug?: string | null) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, onNavigate }) => {
  const project = PROJECTS.find((p) => p.slug === slug || p.id === slug) || PROJECTS[0];
  const { prev, next } = getAdjacentProjects(PROJECTS, project.id);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 py-8 md:py-12">
      {/* 1. Sub-Header Navigation */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between border-b border-[#E8E8E6] pb-6">
        <button
          type="button"
          onClick={() => onNavigate('work')}
          className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#737373] hover:text-[#171717] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL WORKS</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#737373] hover:text-[#171717] transition-colors px-3 py-1.5 bg-white border border-[#E8E8E6]"
            aria-label="Copy project link"
          >
            {copiedLink ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'LINK COPIED' : 'SHARE'}</span>
          </button>
        </div>
      </div>

      {/* 2. Hero Title & Widescreen Cinema Video Player */}
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          {/* Unboxed Metadata (NO PILLS per constitution) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-widest text-[#737373] uppercase">
            <span className="text-[#171717] font-bold">{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.duration} RUNTIME</span>
            <span aria-hidden="true">·</span>
            <span>{project.aspectRatio} SCOPE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
            {project.title}
          </h1>

          <div className="text-sm md:text-base text-[#525252] font-normal pt-1">
            Roles Performed: <strong className="text-[#171717] font-semibold">{project.roles.join(', ')}</strong>
          </div>
        </div>

        {/* Cinematic Video Player */}
        <div className="bg-[#141414] shadow-2xl">
          <VideoPlayer
            videoUrl={project.videoUrl}
            aspectRatio={project.aspectRatio}
            title={project.title}
            posterComponent={
              <ProjectArtwork
                projectId={project.id}
                title={project.title}
                aspectRatio={project.aspectRatio}
              />
            }
          />
        </div>
      </div>

      {/* 3. Deep Case Study Breakdown (Synopsis, Art Direction, Pipeline) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left 8 Columns: Narrative & Art Direction */}
        <div className="lg:col-span-8 space-y-12">
          {/* Project Synopsis */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono tracking-widest text-[#737373] uppercase">
              01 // PROJECT OVERVIEW & BRIEF
            </h2>
            <p className="text-lg md:text-xl text-[#171717] leading-relaxed font-normal">
              {project.synopsis}
            </p>
          </div>

          {/* Art Direction Notes */}
          <div className="space-y-6 pt-6 border-t border-[#E8E8E6]">
            <h2 className="text-xs font-mono tracking-widest text-[#737373] uppercase">
              02 // ART DIRECTION & CINEMATOGRAPHY GRAMMAR
            </h2>
            <div className="space-y-4">
              {project.artDirectionNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white border border-[#E8E8E6]">
                  <span className="font-mono text-xs text-[#737373] mt-0.5">[{idx + 1}]</span>
                  <p className="text-sm md:text-base text-[#262624] leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Frames & Stills Gallery */}
          {project.stills && project.stills.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-[#E8E8E6]">
              <h2 className="text-xs font-mono tracking-widest text-[#737373] uppercase">
                03 // PRODUCTION STILLS & RENDER PASSES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.stills.map((still, idx) => (
                  <div key={idx} className="bg-white border border-[#E8E8E6] overflow-hidden group">
                    <ProjectArtwork
                      projectId={project.id}
                      title={`${project.title} - Pass ${idx + 1}`}
                      aspectRatio={project.aspectRatio}
                      showCaption={true}
                      captionText={still.caption}
                    />
                    <div className="p-3 text-xs font-mono text-[#737373] bg-white border-t border-[#E8E8E6]">
                      {still.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right 4 Columns: Specs, Awards, Full Credits */}
        <div className="lg:col-span-4 space-y-8">
          {/* Awards Badge if any */}
          {project.awards && project.awards.length > 0 && (
            <div className="p-6 bg-white border border-[#E8E8E6] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#737373] uppercase">
                <Award className="w-4 h-4 text-[#171717]" />
                <span>HONORS & RECOGNITION</span>
              </div>
              <ul className="space-y-2 text-xs">
                {project.awards.map((award, idx) => (
                  <li key={idx} className="font-semibold text-[#171717]">
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech & Hardware Pipeline */}
          <div className="p-6 bg-white border border-[#E8E8E6] space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#737373] uppercase">
              TOOLS & HARDWARE PIPELINE
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-[#FAFAF8] border border-[#E8E8E6] text-[#171717]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Full Production Credits */}
          <div className="p-6 bg-white border border-[#E8E8E6] space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#737373] uppercase">
              PRODUCTION CREDITS
            </div>
            <dl className="divide-y divide-[#E8E8E6] text-xs">
              {project.credits.map((c, idx) => (
                <div key={idx} className="py-2.5 flex flex-col justify-between">
                  <dt className="text-[#737373] font-mono uppercase text-[11px]">{c.role}</dt>
                  <dd className="font-semibold text-[#171717] mt-0.5">{c.name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* 4. Adjacent Project Cycling Navigation */}
      <div className="max-w-7xl mx-auto px-6 border-t border-[#E8E8E6] pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prev && (
            <button
              type="button"
              onClick={() => onNavigate('project', prev.slug)}
              className="group p-8 text-left bg-white border border-[#E8E8E6] hover:border-[#171717] transition-all flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#737373] group-hover:text-[#171717]">
                <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
                <span>PREVIOUS PROJECT</span>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold text-[#171717] group-hover:underline">
                  {prev.title}
                </div>
                <div className="text-xs text-[#737373] mt-1">
                  {prev.client} · {prev.categoryLabel}
                </div>
              </div>
            </button>
          )}

          {next && (
            <button
              type="button"
              onClick={() => onNavigate('project', next.slug)}
              className="group p-8 text-right bg-white border border-[#E8E8E6] hover:border-[#171717] transition-all flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-end gap-2 text-xs font-mono text-[#737373] group-hover:text-[#171717]">
                <span>NEXT PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold text-[#171717] group-hover:underline">
                  {next.title}
                </div>
                <div className="text-xs text-[#737373] mt-1">
                  {next.client} · {next.categoryLabel}
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
