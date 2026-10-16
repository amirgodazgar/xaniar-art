export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: number;
  category: 'commercial' | '3d-motion' | 'brand-film' | 'cinematics' | 'experimental';
  categoryLabel: string;
  roles: string[];
  duration: string;
  durationSeconds: number;
  aspectRatio: '16:9' | '2.39:1' | '4:3' | '9:16';
  synopsis: string;
  featured: boolean;
  videoUrl: string;
  posterBg: string;
  accentTone: string;
  artDirectionNotes: string[];
  toolsUsed: string[];
  awards?: string[];
  credits: { role: string; name: string }[];
  stills: { caption: string; ratio: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  timeline: string;
  budgetRange: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export function formatTimecode(seconds: number, fps = 24): string {
  const safeSeconds = Math.max(0, seconds || 0);
  const hrs = Math.floor(safeSeconds / 3600);
  const mins = Math.floor((safeSeconds % 3600) / 60);
  const secs = Math.floor(safeSeconds % 60);
  const frames = Math.floor((safeSeconds % 1) * fps);

  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}:${pad(frames)}`;
}

export function formatDuration(seconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(seconds || 0));
  const mins = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

export function filterProjects(
  projects: Project[],
  category: string,
  searchQuery: string = ''
): Project[] {
  return projects.filter((project) => {
    const matchesCategory = category === 'all' || project.category === category;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.client.toLowerCase().includes(query) ||
      project.roles.some((r) => r.toLowerCase().includes(query)) ||
      project.toolsUsed.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });
}

export function getAdjacentProjects(
  projects: Project[],
  currentId: string
): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.id === currentId || p.slug === currentId);
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { prev, next };
}

export function validateContactForm(data: Partial<ContactFormData>): {
  isValid: boolean;
  errors: FormErrors;
} {
  const errors: FormErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid work email address.';
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project type or primary discipline.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please share brief project details (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
