import React, { useState } from 'react';
import { Project } from '../utils/portfolio';
import { ProjectArtwork } from './ProjectArtwork';
import { Play, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (slug: string) => void;
  featuredLayout?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  featuredLayout = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onClick={() => onSelect(project.slug)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group cursor-pointer flex flex-col justify-between transition-all duration-300 ${
        featuredLayout ? 'md:col-span-2' : ''
      }`}
    >
      {/* Visual Container */}
      <div className="relative overflow-hidden bg-[#141414] border border-[#E8E8E6] transition-transform duration-300 group-hover:border-[#171717]">
        <ProjectArtwork
          projectId={project.id}
          title={project.title}
          aspectRatio={project.aspectRatio}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />

        {/* Hover subtle dark vignette & center action */}
        <div
          className={`absolute inset-0 bg-black/25 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/95 text-[#171717] text-xs font-semibold uppercase tracking-wider shadow-lg transform transition-transform duration-300 group-hover:scale-100 scale-90">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>VIEW CASE STUDY</span>
          </div>
        </div>

        {/* Top-right discreet duration tag */}
        <div className="absolute top-3 right-3 font-mono text-[11px] px-2 py-0.5 bg-black/70 text-white/90 backdrop-blur-sm">
          {project.duration}
        </div>
      </div>

      {/* Editorial Content Below */}
      <div className="pt-4 pb-2">
        {/* Unboxed Metadata (NO PILLS per frontend design constitution) */}
        <div className="flex items-center gap-2 text-xs text-[#737373] font-mono tracking-wider mb-1.5">
          <span>{project.client}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>{project.categoryLabel}</span>
        </div>

        {/* Project Title with arrow hover indicator */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#171717] group-hover:text-[#525252] transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-[#737373] group-hover:text-[#171717] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
        </div>

        {/* Role Attribution */}
        <div className="mt-2 text-xs text-[#737373] tracking-normal">
          {project.roles.join(' · ')}
        </div>
      </div>
    </article>
  );
};
