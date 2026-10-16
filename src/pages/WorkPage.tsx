import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { filterProjects } from '../utils/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { PageRoute } from '../utils/router';
import { Search, LayoutGrid, List, ArrowUpRight, X } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: PageRoute, slug?: string | null) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'commercial', label: 'Commercials' },
    { id: '3d-motion', label: '3D Motion' },
    { id: 'brand-film', label: 'Brand Films' },
    { id: 'cinematics', label: 'Cinematics' },
  ];

  const filteredProjects = useMemo(() => {
    return filterProjects(PROJECTS, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  // Aggregate stats
  const totalDurationMinutes = useMemo(() => {
    const totalSecs = filteredProjects.reduce((acc, p) => acc + p.durationSeconds, 0);
    return Math.round(totalSecs / 60);
  }, [filteredProjects]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-12">
      {/* Header & Philosophy */}
      <div className="border-b border-[#E8E8E6] pb-8 space-y-4">
        <div className="text-xs font-mono tracking-widest text-[#737373] uppercase">
          INDEX // ARCHIVE 2023–2026
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717]">
            Selected Works
          </h1>
          <div className="text-xs md:text-sm font-mono text-[#737373]">
            <span>{filteredProjects.length} PROJECTS DISPLAYED</span>
            <span className="mx-2">·</span>
            <span>~{totalDurationMinutes} MIN TOTAL RUNTIME</span>
          </div>
        </div>
      </div>

      {/* Filter Bar & Controls */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-4">
        {/* Category Buttons (Functional Interactive Filter Controls per frontend design skill) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E8E8E6]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#171717] text-[#FAFAF8]'
                    : 'text-[#737373] hover:text-[#171717] hover:bg-[#FAFAF8]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & View Switcher */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-[#737373] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by client, tool, role..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-[#E8E8E6] text-[#171717] placeholder:text-[#A3A3A0] focus:outline-none focus:border-[#171717]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#737373] hover:text-[#171717]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center border border-[#E8E8E6] bg-white p-0.5">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors ${
                viewMode === 'grid' ? 'bg-[#171717] text-white' : 'text-[#737373] hover:text-[#171717]'
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors ${
                viewMode === 'list' ? 'bg-[#171717] text-white' : 'text-[#737373] hover:text-[#171717]'
              }`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Works Presentation */}
      {filteredProjects.length === 0 ? (
        <div className="py-24 text-center border border-dashed border-[#E8E8E6] space-y-4">
          <div className="text-lg font-bold text-[#171717]">No projects match your filter criteria.</div>
          <p className="text-xs text-[#737373]">Try clearing search keywords or selecting all categories.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#171717] text-white text-xs font-semibold tracking-wider uppercase mt-2"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(slug) => onNavigate('project', slug)}
            />
          ))}
        </div>
      ) : (
        /* Editorial Detailed List View */
        <div className="divide-y divide-[#E8E8E6] border-y border-[#E8E8E6] bg-white">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onNavigate('project', project.slug)}
              className="group p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#FAFAF8] cursor-pointer transition-colors"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
                  <span>{project.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.aspectRatio}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#171717] group-hover:text-[#525252] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#737373] line-clamp-1">
                  {project.synopsis}
                </p>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 md:gap-12 shrink-0">
                <div className="text-left md:text-right">
                  <div className="text-xs font-semibold text-[#171717]">{project.categoryLabel}</div>
                  <div className="text-xs text-[#737373] mt-0.5 font-mono">{project.duration}</div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#171717] uppercase group-hover:underline">
                  <span>CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
