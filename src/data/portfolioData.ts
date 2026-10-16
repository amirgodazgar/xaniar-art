import { Project } from "../utils/portfolio";

export interface Discipline {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  tools: string[];
  caseStudyHighlightId: string;
}

export interface ClientItem {
  name: string;
  industry: string;
  region: string;
}

export interface AwardItem {
  year: number;
  title: string;
  organization: string;
  project: string;
  category: string;
}

export const OWNER_INFO = {
  name: "xaniar ghaderpanah",
  title: "Creative Director & Motion Design Lead",
  location: "Munich & Global Remote",
  availability: "Available for Select Commissions & Directing Q3/Q4 2026",
  email: "amir.godazgar@gmail.com",
  socials: [
    {
      label: "Vimeo",
      url: "https://vimeo.com",
      handle: "vimeo.com/amirgodazgar",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com",
      handle: "linkedin.com/in/amir-godazgar",
    },
    {
      label: "Instagram",
      url: "https://instagram.com",
      handle: "@amir.motion",
    },
    {
      label: "Behance",
      url: "https://behance.net",
      handle: "behance.net/amirgodazgar",
    },
  ],
  bio: `Senior Creative Director, Commercial Director, and Motion Design Lead with over a decade of experience crafting high-impact brand films, 3D kinetic visuals, and immersive cinematics. Partnering with pioneering agencies, luxury brands, and global entertainment leaders to translate abstract concepts into visceral, precision-engineered audiovisual narratives.`,
  manifesto: `Visual narrative should feel tactile, rhythmic, and inevitable. Whether directing an anamorphic commercial or sculpting a procedural 3D world in Houdini and Unreal Engine, the goal remains singular: eliminate decorative noise and let the weight, tension, and tempo of light and motion communicate truth.`,
  yearsOfExperience: 11,
  completedProjects: 84,
  internationalAwards: 14,
};

export const DISCIPLINES: Discipline[] = [
  {
    id: "motion-design-lead",
    title: "Motion Design Lead",
    shortDesc:
      "Orchestrating multi-disciplinary motion teams, motion design systems, and broadcast-scale identity rollouts.",
    fullDesc:
      "Providing visionary creative leadership for complex motion engagements. Translating brand codes into dynamic kinetic frameworks, mentoring animators, and standardizing cross-platform motion languages for high-visibility product launches.",
    deliverables: [
      "Global Motion Guidelines",
      "Broadcast Identity Packages",
      "Design System Motion Specs",
      "Team Mentorship & Creative QA",
    ],
    tools: ["After Effects", "Cinema 4D", "Figma", "Slack / ShotGrid"],
    caseStudyHighlightId: "nike-velocity-matrix",
  },
  {
    id: "video-producer",
    title: "Video Producer",
    shortDesc:
      "End-to-end production governance, creative budgeting, director coordination, and seamless pipeline execution.",
    fullDesc:
      "Bridging high-concept creative direction with rigorous production execution. Leading agency pitches, post-production schedules, audio-post integration, talent casting, and multi-format delivery across global timezones.",
    deliverables: [
      "Production Timelines & Scope",
      "Crew & DP Assembling",
      "Post-Production Supervision",
      "Color & Sound Finishing QA",
    ],
    tools: [
      "Frame.io",
      "DaVinci Resolve Studio",
      "Notion Production DB",
      "Avid Pro Tools (Supervision)",
    ],
    caseStudyHighlightId: "kroma-sound-spatial",
  },
  {
    id: "3d-motion-designer",
    title: "3D Motion Designer",
    shortDesc:
      "Crafting complex procedural physics, fluid simulations, parametric surfaces, and kinetic typography.",
    fullDesc:
      "Pushing the boundary of computational motion. Specializing in high-density particle fields, organic cloth and soft-body dynamics, hard-surface mechanical animations, and tactile material shaders.",
    deliverables: [
      "Procedural VFX Elements",
      "Kinetic 3D Typography",
      "Particle & Fluid Dynamics",
      "Lighting & Shader Mastery",
    ],
    tools: [
      "Houdini FX",
      "Cinema 4D",
      "Redshift",
      "Octane Render",
      "X-Particles",
    ],
    caseStudyHighlightId: "solaris-digital-monolith",
  },
  {
    id: "creative-producer",
    title: "Creative Producer",
    shortDesc:
      "Strategic narrative development, script supervision, stakeholder management, and creative brand alignment.",
    fullDesc:
      "Ensuring that every frame serves the overarching strategic goal. Guiding brand teams and executive directors from initial treatment to the final director’s cut, preserving artistic integrity while maximizing commercial resonance.",
    deliverables: [
      "Treatment Pitch Books",
      "Brand Narrative Decks",
      "Creative Consultation",
      "Executive Client Presentations",
    ],
    tools: ["Keynote", "Milanote", "InDesign", "Celtx Scriptwriting"],
    caseStudyHighlightId: "phantom-reverie-film",
  },
  {
    id: "art-director",
    title: "Art Director",
    shortDesc:
      "Establishing distinct aesthetic bibles, color palettes, photographic grammar, and graphic compositions.",
    fullDesc:
      "Developing the singular visual signature of a campaign. From initial styleframes and mood boards to bespoke typography and lighting setups, ensuring every scene embodies uncompromising editorial taste.",
    deliverables: [
      "Comprehensive Styleframes",
      "Lighting & Color Grammars",
      "Compositional Guidelines",
      "Set & Spatial Design Direction",
    ],
    tools: [
      "Adobe Creative Suite",
      "Cinema 4D",
      "Midjourney (Pre-viz)",
      "DaVinci Color Managed",
    ],
    caseStudyHighlightId: "audemars-piguet-horology",
  },
  {
    id: "commercial-director",
    title: "Commercial Director",
    shortDesc:
      "Directing live-action commercial films, talent choreography, camera blocking, and editorial pace.",
    fullDesc:
      "Steering high-end brand commercials with a focus on visceral pacing, cinematic lenses, and seamless integration between physical cinematography and photoreal CGI. Obsessed with naturalistic performances and cinematic framing.",
    deliverables: [
      "Director Treatments & Shotlists",
      "On-Set Live Action Direction",
      "Editorial Rhythm & Pacing",
      "Master Delivery Cut",
    ],
    tools: [
      "Arri Alexa / Red Cinema Cameras",
      "Anamorphic Glass",
      "Shot Designer",
      "DaVinci Resolve",
    ],
    caseStudyHighlightId: "polestar-aerolight",
  },
  {
    id: "cinematic-artist",
    title: "Cinematic Artist",
    shortDesc:
      "Real-time virtual production, photoreal environmental storytelling, and in-engine cinematic sequences.",
    fullDesc:
      "Harnessing next-generation real-time tools to engineer cinematic camera maneuvers, dynamic lighting conditions, and hyper-detailed virtual environments for games, virtual stages, and cinematic teasers.",
    deliverables: [
      "Virtual Set Scouting",
      "Unreal Engine Sequencer Cinematics",
      "Lumen & Nanite Optimization",
      "Camera Rig Choreography",
    ],
    tools: [
      "Unreal Engine 5.5",
      "Substance Painter",
      "Blender",
      "DaVinci ACES Pipeline",
    ],
    caseStudyHighlightId: "sony-playstation-convergence",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "polestar-aerolight",
    slug: "polestar-aerolight",
    title: "Kinetic Light Architecture",
    client: "Polestar Automotive",
    year: 2025,
    category: "commercial",
    categoryLabel: "Commercial",
    roles: ["Commercial Director", "Art Director", "3D Motion Designer"],
    duration: "01:42",
    durationSeconds: 102,
    aspectRatio: "2.39:1",
    synopsis:
      "A high-contrast cinematic commercial film exploring the aerodynamic slipstream and signature light signature of the next-generation performance electric vehicle. Shot on anamorphic lenses combined with procedural Houdini particle trails.",
    featured: true,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    posterBg: "#181816",
    accentTone: "#F5F5F0",
    artDirectionNotes: [
      "2.39:1 widescreen scope with vintage Panavision anamorphic flare characteristics.",
      "Controlled monolithic concrete brutalist background to accentuate pure vehicle contour.",
      "Procedural aerodynamic wind-tunnel simulation calibrated in Houdini 20.",
      "DaVinci Resolve ACES color grade with muted monochromatic primaries and warm quartz highlights.",
    ],
    toolsUsed: [
      "Houdini",
      "Cinema 4D",
      "Redshift",
      "Arri Alexa Mini LF",
      "DaVinci Resolve",
    ],
    awards: ["Red Dot Best of the Best 2025", "ADC Gold Cube — Motion Craft"],
    credits: [
      {
        role: "Commercial Director & Art Director",
        name: "xaniar ghaderpanah",
      },
      { role: "Director of Photography", name: "Lukas Meier, BVK" },
      { role: "Lead Houdini Simulation Artist", name: "xaniar ghaderpanah" },
      { role: "Original Sound Design & Mix", name: "Echolab London" },
      { role: "Colorist", name: "Sofie Lindqvist" },
    ],
    stills: [
      {
        caption: "Front blade illumination under diffuse studio skybank",
        ratio: "2.39:1",
      },
      {
        caption: "Aero particle slipstream vector visualization pass",
        ratio: "2.39:1",
      },
      {
        caption: "Titanium wheel assembly mechanical macro detail",
        ratio: "2.39:1",
      },
      {
        caption: "Final hero silhouette across wet monolithic apron",
        ratio: "2.39:1",
      },
    ],
  },
  {
    id: "solaris-digital-monolith",
    slug: "solaris-digital-monolith",
    title: "Solaris: Phase Transitions",
    client: "Museum of Digital Art Zurich",
    year: 2024,
    category: "3d-motion",
    categoryLabel: "3D Motion",
    roles: ["3D Motion Designer", "Cinematic Artist"],
    duration: "02:30",
    durationSeconds: 150,
    aspectRatio: "16:9",
    synopsis:
      "An audiovisual installation commission investigating the speculative behavior of liquid obsidian and crystallized light under extreme gravimetric tension. Exhibited across an 8K seamless curved LED canvas.",
    featured: true,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    posterBg: "#121212",
    accentTone: "#EAEAEA",
    artDirectionNotes: [
      "Mathematical physics models based on ferrofluid surface tension equations.",
      "Refraction indices calculated with real optical dispersion across obsidian glass.",
      "Zero-gravity rhythmic tempo timed to microtonal cello compositions.",
      "Exhibited on dual Christie 4K laser projection array at 120 FPS.",
    ],
    toolsUsed: [
      "Unreal Engine 5.4",
      "Houdini FX",
      "Octane Render",
      "Substance Designer",
    ],
    awards: [
      "Prix Ars Electronica Distinction",
      "Lumen Prize 3D/Interactive Shortlist",
    ],
    credits: [
      { role: "Concept & 3D Motion Artist", name: "xaniar ghaderpanah" },
      { role: "Acoustic Spatial Composer", name: "Valentin Roesch" },
      { role: "Curatorial Director", name: "Elena von Wartburg" },
    ],
    stills: [
      {
        caption: "Gravimetric deformation pass in zero-gravity chamber",
        ratio: "16:9",
      },
      {
        caption: "Sub-surface light scattering through crystal fracture",
        ratio: "16:9",
      },
      {
        caption: "8K museum projection installation view Zurich",
        ratio: "16:9",
      },
    ],
  },
  {
    id: "nike-velocity-matrix",
    slug: "nike-velocity-matrix",
    title: "Velocity Matrix Global Launch",
    client: "Nike Global Innovation",
    year: 2025,
    category: "brand-film",
    categoryLabel: "Brand Film",
    roles: ["Motion Design Lead", "Art Director", "Creative Producer"],
    duration: "01:15",
    durationSeconds: 75,
    aspectRatio: "16:9",
    synopsis:
      "Global identity launch and kinetic campaign for high-performance athletic footwear. Built around explosive kinetic typography that deconstructs and morphs in lockstep with athlete biomechanics.",
    featured: true,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    posterBg: "#1A1A18",
    accentTone: "#EFEFEA",
    artDirectionNotes: [
      "Bespoke variable kinetic typography responding to velocity vectors.",
      "High-speed Phantom 4K camera footage interpolated with procedural 3D yarn knitting.",
      "Monochrome palette with stark typographic rhythm and zero superfluous ornamentation.",
    ],
    toolsUsed: [
      "After Effects",
      "Cinema 4D",
      "X-Particles",
      "Figma",
      "Illustrator",
    ],
    awards: [
      "Cannes Lions Bronze — Brand Experience",
      "D&AD Graphite Pencil — Motion Design",
    ],
    credits: [
      { role: "Motion Design Lead & Art Director", name: "xaniar ghaderpanah" },
      { role: "Senior Typography Designer", name: "Marcus Keller" },
      { role: "Executive Producer", name: "Chloe Vance" },
      { role: "Composer", name: "Raster-Noton Studio" },
    ],
    stills: [
      { caption: "Kinetic vector glyph breakdown frame 042", ratio: "16:9" },
      {
        caption: "Sole cushioning impact simulation in high-speed macro",
        ratio: "16:9",
      },
      {
        caption: "Global billboard typography adaptation sequence",
        ratio: "16:9",
      },
    ],
  },
  {
    id: "kroma-sound-spatial",
    slug: "kroma-sound-spatial",
    title: "Aura Spatial Audio Architecture",
    client: "Kroma Sound Lab",
    year: 2024,
    category: "commercial",
    categoryLabel: "Commercial",
    roles: ["Video Producer", "Commercial Director", "3D Motion Designer"],
    duration: "01:50",
    durationSeconds: 110,
    aspectRatio: "2.39:1",
    synopsis:
      "Product launch commercial for audiophile spatial acoustics. Visualizing invisible sonic waves as delicate tactile ribbons that gently envelope architectural living spaces.",
    featured: true,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    posterBg: "#161614",
    accentTone: "#E4E4DC",
    artDirectionNotes: [
      "Subtle cymatics simulations accurately responding to 20Hz - 20kHz frequencies.",
      "Natural daylight streaming through Japanese washi paper screens and raw limestone.",
      "Calm, meditative editorial pacing with lingering 8-second camera glides.",
    ],
    toolsUsed: ["Cinema 4D", "Redshift", "DaVinci Resolve Studio", "Sony FX9"],
    awards: ["iF Design Award — Audio Brand Communication"],
    credits: [
      { role: "Director & Video Producer", name: "xaniar ghaderpanah" },
      { role: "Production Designer", name: "Kenji Takahashi" },
      {
        role: "Spatial Sound Designer",
        name: "xaniar ghaderpanah & Kroma Labs",
      },
    ],
    stills: [
      {
        caption: "Acoustic waveform visualization through linen weave",
        ratio: "2.39:1",
      },
      {
        caption: "Cast aluminum acoustic driver explosion sequence",
        ratio: "2.39:1",
      },
      {
        caption: "Living space architectural interaction shot",
        ratio: "2.39:1",
      },
    ],
  },
  {
    id: "sony-playstation-convergence",
    slug: "sony-playstation-convergence",
    title: "Convergence: World Teaser",
    client: "Sony Interactive Entertainment",
    year: 2024,
    category: "cinematics",
    categoryLabel: "Cinematics",
    roles: ["Cinematic Artist", "3D Motion Designer", "Art Director"],
    duration: "02:05",
    durationSeconds: 125,
    aspectRatio: "16:9",
    synopsis:
      "Next-generation real-time teaser film set in a decaying orbital biosphere. Harnessing Unreal Engine 5 Nanite and Lumen to achieve feature-film cinematic realism in real-time.",
    featured: true,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    posterBg: "#131311",
    accentTone: "#F2F2EE",
    artDirectionNotes: [
      "Atmospheric volumetric scattering simulating high-altitude ionosphere haze.",
      "Virtual camera operator simulation with authentic shoulder-rig micro-jitters.",
      "PBR procedural rock fracturing and foliage simulation.",
    ],
    toolsUsed: ["Unreal Engine 5.4", "ZBrush", "Substance 3D", "Houdini FX"],
    awards: [
      "Epic Games MegaGrant Recipient",
      "VES Awards Nominee — Real-Time Visual Effects",
    ],
    credits: [
      {
        role: "Cinematic Artist & Technical Director",
        name: "xaniar ghaderpanah",
      },
      { role: "Character Sculptor", name: "Taras Kovalenko" },
      { role: "Environment Technical Artist", name: "xaniar ghaderpanah" },
    ],
    stills: [
      { caption: "Orbital biosphere horizon breakdown frame", ratio: "16:9" },
      {
        caption: "Real-time Lumen volumetric sunlight penetration",
        ratio: "16:9",
      },
      {
        caption: "Mech suit weathering detail rendered live in-engine",
        ratio: "16:9",
      },
    ],
  },
  {
    id: "rimowa-essential-horizons",
    slug: "rimowa-essential-horizons",
    title: "Essential Horizons",
    client: "Rimowa Luxury Travel",
    year: 2023,
    category: "brand-film",
    categoryLabel: "Brand Film",
    roles: ["Commercial Director", "Art Director", "Creative Producer"],
    duration: "01:20",
    durationSeconds: 80,
    aspectRatio: "2.39:1",
    synopsis:
      "An editorial manifesto celebrating the patina of well-traveled aluminum. Juxtaposing micro-groove engineering with raw volcanic topography in Iceland.",
    featured: false,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    posterBg: "#1C1C1A",
    accentTone: "#FAFAFA",
    artDirectionNotes: [
      "Shot on 35mm Kodak 250D film stock for rich optical grain and organic skin tones.",
      "Precision CAD model integration into natural basalt landscapes.",
      "Minimal typographic titles set in timeless grotesque lettering.",
    ],
    toolsUsed: ["Arricam LT 35mm", "Cinema 4D", "Flame", "DaVinci Resolve"],
    awards: ["Ciclope Festival — Best Cinematography Shortlist"],
    credits: [
      { role: "Commercial Director", name: "xaniar ghaderpanah" },
      { role: "Creative Producer", name: "Astrid Lindau" },
      { role: "Cinematographer", name: "Jonas Almqvist" },
    ],
    stills: [
      {
        caption: "Basalt column reflection across polished aluminum grooving",
        ratio: "2.39:1",
      },
      {
        caption: "35mm frame grain study in Icelandic storm light",
        ratio: "2.39:1",
      },
    ],
  },
  {
    id: "audemars-piguet-horology",
    slug: "audemars-piguet-horology",
    title: "Chronosphere Horological Study",
    client: "Audemars Piguet",
    year: 2023,
    category: "3d-motion",
    categoryLabel: "3D Motion",
    roles: ["Art Director", "3D Motion Designer"],
    duration: "01:35",
    durationSeconds: 95,
    aspectRatio: "4:3",
    synopsis:
      "Microscopic 3D mechanical breakdown of a flying tourbillon movement. Exploring the friction of rubies, escapement wheels, and hand-finished Geneva stripes.",
    featured: false,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    posterBg: "#111110",
    accentTone: "#F3F3EF",
    artDirectionNotes: [
      "Exact 1:1 engineering tolerance models sourced from watchmakers manufacture files.",
      "Extreme macro depth-of-field simulating microscopic probe optics.",
      "Subtle tick-and-escapement audio synthesis synchronizing every gear engagement.",
    ],
    toolsUsed: ["Cinema 4D", "Redshift", "Marvelous Designer", "Houdini"],
    awards: ["Grand Prix d’Horlogerie de Genève — Digital Craft Honor"],
    credits: [
      { role: "3D Motion Lead & Art Director", name: "xaniar ghaderpanah" },
      { role: "Mechanical Simulation Specialist", name: "Oliver Stern" },
    ],
    stills: [
      {
        caption: "Ruby jewel bearing oil meniscus under polarized rim light",
        ratio: "4:3",
      },
      { caption: "Escapement wheel oscillation at 28,800 vph", ratio: "4:3" },
    ],
  },
  {
    id: "phantom-reverie-film",
    slug: "phantom-reverie-film",
    title: "Phantom Reverie: Speculative Cinema",
    client: "Independent Studio Commission",
    year: 2023,
    category: "cinematics",
    categoryLabel: "Cinematics",
    roles: ["Commercial Director", "Video Producer", "Cinematic Artist"],
    duration: "03:10",
    durationSeconds: 190,
    aspectRatio: "2.39:1",
    synopsis:
      "A speculative cinematic short film exploring architectural memory in abandoned post-industrial monoliths. Combining drone photogrammetry with poetic cinematography.",
    featured: false,
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterBg: "#191917",
    accentTone: "#EFEFEA",
    artDirectionNotes: [
      "Photogrammetry LiDAR scans of decommissioned nuclear cooling towers in France.",
      "Hybrid digital and optical projection mapping on location.",
      "Soundtrack performed on vintage Buchla modular synthesizers.",
    ],
    toolsUsed: [
      "RealityCapture",
      "Unreal Engine 5",
      "Arri Alexa Mini",
      "DaVinci Resolve",
    ],
    awards: [
      "Vimeo Staff Pick of the Year",
      "Clermont-Ferrand Special Mention",
    ],
    credits: [
      { role: "Director & Producer", name: "xaniar ghaderpanah" },
      { role: "Drone Photogrammetry Pilot", name: "Mathieu Blanc" },
      { role: "Original Score", name: "xaniar ghaderpanah & S. Røed" },
    ],
    stills: [
      {
        caption:
          "Cooling tower internal vortex LiDAR point-cloud re-projection",
        ratio: "2.39:1",
      },
      {
        caption: "Dawn silhouette against parabolic concrete perimeter",
        ratio: "2.39:1",
      },
    ],
  },
];

export const CLIENT_ROSTER: ClientItem[] = [
  { name: "Polestar", industry: "Electric Mobility", region: "Sweden" },
  { name: "Nike", industry: "Sport & Innovation", region: "USA" },
  {
    name: "Sony PlayStation",
    industry: "Interactive Entertainment",
    region: "Japan",
  },
  {
    name: "Audemars Piguet",
    industry: "Haute Horlogerie",
    region: "Switzerland",
  },
  { name: "Rimowa", industry: "Luxury Goods", region: "Germany" },
  {
    name: "Museum of Digital Art",
    industry: "Contemporary Arts",
    region: "Zurich",
  },
  {
    name: "Kroma Sound Lab",
    industry: "Spatial Audio Systems",
    region: "Germany",
  },
  {
    name: "Bang & Olufsen",
    industry: "High-Fidelity Audio",
    region: "Denmark",
  },
  { name: "Moncler", industry: "Luxury Fashion", region: "Italy" },
  { name: "Epic Games", industry: "Real-Time Tech", region: "USA" },
];

export const AWARDS_LIST: AwardItem[] = [
  {
    year: 2025,
    title: "Best of the Best — Motion Craft",
    organization: "Red Dot Awards",
    project: "Kinetic Light Architecture",
    category: "Commercial Film",
  },
  {
    year: 2025,
    title: "Gold Cube — Art Direction & Motion",
    organization: "ADC Global",
    project: "Kinetic Light Architecture",
    category: "Art Direction",
  },
  {
    year: 2025,
    title: "Graphite Pencil — Motion Design",
    organization: "D&AD Awards",
    project: "Velocity Matrix",
    category: "Typography in Motion",
  },
  {
    year: 2024,
    title: "Prix Ars Electronica Distinction",
    organization: "Ars Electronica Festival",
    project: "Solaris: Phase Transitions",
    category: "Computer Animation",
  },
  {
    year: 2024,
    title: "Real-Time Visual Effects Honor",
    organization: "VES Visual Effects Society",
    project: "Convergence: World Teaser",
    category: "Real-Time Graphics",
  },
  {
    year: 2023,
    title: "Staff Pick of the Year",
    organization: "Vimeo",
    project: "Phantom Reverie",
    category: "Cinematography",
  },
  {
    year: 2023,
    title: "Grand Prix Digital Craft Honor",
    organization: "GPHG Geneva",
    project: "Chronosphere Horological Study",
    category: "3D Simulation",
  },
];

export const PRODUCTION_FAQ = [
  {
    q: "What scale of projects does Amir direct and produce?",
    a: "Engagements range from global commercial broadcast campaigns (live-action + 3D VFX) to bespoke experiential museum installations, interactive brand design systems, and real-time cinematics. I can step in as sole Commercial Director, Motion Design Lead, or spearhead turnkey end-to-end productions with trusted partner specialists.",
  },
  {
    q: "How does Amir collaborate with external agencies or in-house brand teams?",
    a: "Every collaboration is structured to reduce friction. Early stages focus on creative treatment decks, styleframes, and technical R&D. During production, agile check-ins (Frame.io, live review sessions) provide complete transparency into camera passes, shader development, and editorial rhythms.",
  },
  {
    q: "Can Amir work on-location for commercial shoots?",
    a: "Yes. Based out of Munich with an EU passport and global mobility, directing on-location across Europe, North America, and Asia. Studio post-production and 3D simulation pipelines run seamlessly in remote high-throughput environments.",
  },
  {
    q: "What is the standard lead time for booking?",
    a: "Commercial directing and lead motion engagements typically book 4 to 8 weeks in advance. For fast-turnaround agile sprints or creative consultation treatments, select short-window slots are maintained.",
  },
];
