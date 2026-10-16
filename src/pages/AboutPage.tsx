import React, { useState } from "react";
import {
  OWNER_INFO,
  AWARDS_LIST,
  CLIENT_ROSTER,
  DISCIPLINES,
} from "../data/portfolioData";
import { PageRoute } from "../utils/router";
import {
  Download,
  ArrowUpRight,
  Award,
  Film,
  Check,
  ExternalLink,
} from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: PageRoute, slug?: string | null) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    // Generate text/markdown dossier of xaniar ghaderpanah's senior CV
    const resumeText = `# xaniar ghaderpanah
Creative Director · Commercial Director · Motion Design Lead
Location: Munich, Germany & Global Remote
Email: ${OWNER_INFO.email}
Web: https://amirgodazgar.design

## SUMMARY
Senior Creative Director and Motion Design Lead with 11+ years directing live-action commercial films, procedural 3D motion design, and high-impact brand identities for global leaders including Nike, Polestar, Sony PlayStation, Rimowa, and Audemars Piguet.

## CORE DISCIPLINES
1. Motion Design Lead
2. Video Producer
3. 3D Motion Designer
4. Creative Producer
5. Art Director
6. Commercial Director
7. Cinematic Artist

## HONORS & AWARDS
- Red Dot: Best of the Best 2025 (Kinetic Light Architecture)
- ADC Global: Gold Cube 2025 (Motion Craft & Art Direction)
- D&AD: Graphite Pencil 2025 (Velocity Matrix)
- Prix Ars Electronica Distinction 2024 (Solaris)
- VES Visual Effects Society Honor 2024 (Convergence)
- Vimeo Staff Pick of the Year 2023 (Phantom Reverie)

## TECHNICAL MASTERY
- Direction: Live-action, talent choreography, anamorphic optics, lighting design.
- 3D & VFX: Houdini FX, Cinema 4D, Redshift, Octane, Unreal Engine 5.5.
- Motion: After Effects, Figma, ACES Color Science, DaVinci Resolve Studio.
`;

    const blob = new Blob([resumeText], {
      type: "text/markdown;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Amir_Godazgar_Creative_Director_Resume.md");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="space-y-20 md:space-y-28 py-12 md:py-16">
      {/* 1. Header & Lead Editorial Portrait Statement */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="border-b border-[#E8E8E6] pb-8">
          <div className="text-xs font-mono tracking-widest text-[#737373] uppercase mb-2">
            PROFILE // ME
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717]">
            About xaniar ghaderpanah
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Stats (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141414] text-[#FAFAFA] aspect-square flex flex-col justify-between p-8 border border-[#262624] relative overflow-hidden">
              <div className="font-mono text-xs text-[#A3A3A0] uppercase tracking-widest">
                DIRECTOR & ARTIST
              </div>
              {/* Minimal SVG Graphic Portrait Motif */}
              <div className="my-auto text-center space-y-2">
                <div className="w-24 h-24 mx-auto rounded-full border border-white/20 flex items-center justify-center">
                  <span className="font-bold text-3xl font-mono text-[#FAFAFA]">
                    AG
                  </span>
                </div>
                <div className="text-sm font-mono text-[#A3A3A0]">
                  xaniar ghaderpanah
                </div>
                <div className="text-xs text-[#737373]">
                  11+ YRS PRODUCTION LEAD
                </div>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A3A3A0] border-t border-[#262624] pt-4">
                <span>MUNICH · CET</span>
                <span>GLOBAL MOBILITY</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleDownloadCV}
                className="w-full py-3.5 px-4 bg-[#171717] text-[#FAFAF8] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all hover:bg-[#2C2C29]"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>DOSSIER DOWNLOADED</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD RESUME / CREDITS</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="w-full py-3.5 px-4 border border-[#E8E8E6] text-[#171717] text-xs font-semibold tracking-wider uppercase hover:border-[#171717] bg-white transition-all text-center"
              >
                CONTACT FOR DIRECTING
              </button>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-[#737373] uppercase">
                BIOGRAPHY
              </div>
              <p className="text-xl md:text-2xl font-normal text-[#171717] leading-relaxed">
                {OWNER_INFO.bio}
              </p>
            </div>

            <div className="p-8 bg-white border border-[#E8E8E6] space-y-4">
              <div className="text-xs font-mono tracking-widest text-[#737373] uppercase">
                CREATIVE MANIFESTO
              </div>
              <blockquote className="text-base md:text-lg text-[#262624] italic leading-relaxed">
                "{OWNER_INFO.manifesto}"
              </blockquote>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#E8E8E6]">
              <div className="text-xs font-mono tracking-widest text-[#737373] uppercase">
                CORE LEADERSHIP ROLES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {DISCIPLINES.map((d, i) => (
                  <div
                    key={d.id}
                    className="p-3 bg-white border border-[#E8E8E6] flex items-center gap-2"
                  >
                    <span className="font-mono text-xs text-[#737373]">
                      0{i + 1}
                    </span>
                    <span className="font-semibold text-[#171717]">
                      {d.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full International Awards Archive */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="border-b border-[#E8E8E6] pb-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#737373] uppercase mb-2">
              JURIED RECOGNITION // 2023–2025
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#171717]">
              Awards & Honors
            </h2>
          </div>
          <div className="text-xs font-mono text-[#737373]">
            14 GLOBAL HONORS
          </div>
        </div>

        <div className="bg-white border border-[#E8E8E6] divide-y divide-[#E8E8E6]">
          {AWARDS_LIST.map((award, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAFAF8] transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
                  <span>{award.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span>{award.year}</span>
                </div>
                <div className="text-lg md:text-xl font-bold text-[#171717]">
                  {award.title}
                </div>
                <div className="text-xs text-[#525252]">
                  Project:{" "}
                  <span className="font-semibold text-[#171717]">
                    {award.project}
                  </span>
                </div>
              </div>
              <div className="font-mono text-xs uppercase px-3 py-1 bg-[#FAFAF8] border border-[#E8E8E6] text-[#737373] self-start md:self-auto">
                {award.category}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Studio Apparatus & Technical Pipeline */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="border-b border-[#E8E8E6] pb-6">
          <div className="text-xs font-mono tracking-widest text-[#737373] uppercase mb-2">
            PRODUCTION INFRASTRUCTURE
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#171717]">
            Studio Apparatus & Technical Gear
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#E8E8E6] space-y-3">
            <div className="font-mono text-xs text-[#737373] uppercase">
              CAMERA & OPTICS
            </div>
            <h3 className="font-bold text-[#171717]">Cinematography Systems</h3>
            <p className="text-xs text-[#525252] leading-relaxed">
              Arri Alexa Mini LF, Red V-Raptor 8K VV, vintage Kowa & Cooke
              anamorphic prime sets, Preston wireless FIZ, DJI Ronin 2
              stabilization.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E8E8E6] space-y-3">
            <div className="font-mono text-xs text-[#737373] uppercase">
              COMPUTATIONAL 3D
            </div>
            <h3 className="font-bold text-[#171717]">
              VFX Simulation Clusters
            </h3>
            <p className="text-xs text-[#525252] leading-relaxed">
              Dual AMD Threadripper 64-Core nodes with 4x NVIDIA RTX 4090 GPUs.
              Dedicated NVMe scratch arrays configured for high-density Houdini
              fluid caches.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E8E8E6] space-y-3">
            <div className="font-mono text-xs text-[#737373] uppercase">
              COLOR & FINISHING
            </div>
            <h3 className="font-bold text-[#171717]">Color-Critical Grading</h3>
            <p className="text-xs text-[#525252] leading-relaxed">
              DaVinci Resolve Advanced Panel, Flanders Scientific XMP310 HDR
              Mastering Monitor (DCI-P3 / Rec.2020), calibrated ACEScc color
              science pipeline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
