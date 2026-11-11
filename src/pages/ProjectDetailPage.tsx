import { ArrowLeft, CheckCircle2, Copy } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ProjectArtwork } from "../components/ProjectArtwork";
import { VideoPlayer } from "../components/VideoPlayer";
import { PROJECTS } from "../data/portfolioData";
import { getAdjacentProjects } from "../utils/portfolio";
import { PageRoute } from "../utils/router";

export const ProjectDetailPage: React.FC = () => {
  const location = useLocation();
  const slug = location.state?.slug;
  let navigate = useNavigate();
  const project =
    PROJECTS.find((p) => p.slug === slug || p.id === slug) || PROJECTS[0];
  const { prev, next } = getAdjacentProjects(PROJECTS, project.id);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
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
          onClick={() => navigate("/work")}
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
            {copiedLink ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            <span>{copiedLink ? "LINK COPIED" : "SHARE"}</span>
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
            Roles Performed:{" "}
            <strong className="text-[#171717] font-semibold">
              {project.roles.join(", ")}
            </strong>
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
        </div>
      </div>
    </div>
  );
};
