import { Check, Download } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { OWNER_INFO } from "../data/portfolioData";

export const AboutPage = () => {
  let navigate = useNavigate();
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    // Generate text/markdown dossier of Xaniar Ghaderpanah's senior CV
    const resumeText = `# Xaniar Ghaderpanah
Creative Director · Commercial Director · Motion Design Lead
Location: BARCELONA, Spain & Global Remote
Email: ${OWNER_INFO.email}
Web: https://xaniar.art

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
    link.setAttribute(
      "download",
      "Xaniar_Ghaderpanah_Creative_Director_Resume.md",
    );
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
        <div className="border-b border-hairline pb-8">
          <div className="text-xs font-mono tracking-widest text-muted uppercase mb-2">
            PROFILE // ME
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight text-charcoal">
            About Xaniar
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Stats (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-cinema text-cinema-light aspect-square flex flex-col justify-between p-8 border border-[#262624] relative overflow-hidden">
              <div className="font-mono text-xs text-[#A3A3A0] uppercase tracking-widest">
                DIRECTOR & ARTIST
              </div>
              {/* Minimal SVG Graphic Portrait Motif */}
              <div className="my-auto text-center space-y-2">
                <div className="w-60 h-60 mx-auto rounded-full border border-white/20 flex items-center justify-center">
                  {/* <span className="font-bold text-3xl font-mono text-[#FAFAFA]"> */}
                  <img
                    className="h-full w-full rounded-full"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFLFXNHG6OCLA/profile-displayphoto-crop_800_800/B4DZfkIJ1iH4AU-/0/1751879032599?e=1795651200&v=beta&t=l8q0d70sPg8GUDIfo3MOljacyZuesSw2DTkqD3Pxt74"
                    alt="Xaniar"
                  />
                </div>
                <div className="text-lg font-bold font-mono text-[#A3A3A0]">
                  Xaniar Ghaderpanah
                </div>
                <div className="text-xs font-bold text-muted">
                  10 YRS Creative Lead & Art Director
                </div>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A3A3A0] border-t border-[#262624] pt-4">
                <span>BARCELONA · CET</span>
                <span>GLOBAL MOBILITY</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleDownloadCV}
                className="w-full py-3.5 px-4 bg-charcoal text-canvas text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all hover:bg-[#2C2C29]"
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
                onClick={() => navigate("/contact")}
                className="w-full py-3.5 px-4 border border-hairline text-charcoal text-xs font-semibold tracking-wider uppercase hover:border-charcoal bg-white transition-all text-center"
              >
                CONTACT FOR DIRECTING
              </button>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-widest text-muted uppercase">
                ABOUT ME
              </div>
              <p className="text-xl md:text-xl font-normal text-charcoal leading-relaxed">
                {OWNER_INFO.professionalSummary}
              </p>
              <p className="text-xl md:text-xl font-normal text-charcoal leading-relaxed">
                {OWNER_INFO.experienceAndExpertise}
              </p>
              <p className="text-xl md:text-xl font-normal text-charcoal leading-relaxed">
                {OWNER_INFO.locationAndAvailability}
              </p>
            </div>

            <div className="p-8 bg-white border border-hairline space-y-4">
              <div className="text-xs font-mono tracking-widest text-muted uppercase">
                MANIFESTO
              </div>
              <div className="text-base md:text-lg text-[#262624] leading-relaxed">
                <p className="mb-4">{OWNER_INFO.valueProposition}</p>
                <p className="mb-4">{OWNER_INFO.expertiseOverview}</p>
                <ul>
                  {OWNER_INFO.areasOfExpertise.map((i) => (
                    <li className="flex justify-start items-center">
                      <span className="mr-3">&#x2022;</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
