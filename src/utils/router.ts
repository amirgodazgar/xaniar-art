import { useState, useEffect, useCallback } from 'react';

export type PageRoute = 'home' | 'work' | 'about' | 'expertise' | 'contact' | 'project';

export interface RouteState {
  page: PageRoute;
  projectSlug: string | null;
}

function parseCurrentRoute(): RouteState {
  if (typeof window === 'undefined') {
    return { page: 'home', projectSlug: null };
  }

  // 1. Check Hash first (e.g. #/work, #/project/polestar-aerolight)
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash) {
    const parts = hash.split('/').filter(Boolean);
    const first = parts[0]?.toLowerCase();

    if (first === 'work' || first === 'projects') return { page: 'work', projectSlug: null };
    if (first === 'about' || first === 'me') return { page: 'about', projectSlug: null };
    if (first === 'expertise' || first === 'skills') return { page: 'expertise', projectSlug: null };
    if (first === 'contact') return { page: 'contact', projectSlug: null };
    if (first === 'project' && parts[1]) return { page: 'project', projectSlug: parts[1] };
  }

  // 2. Check search params (e.g. ?page=work or ?page=project&slug=polestar-aerolight)
  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get('page')?.toLowerCase();
  const slugParam = params.get('slug');

  if (pageParam === 'work') return { page: 'work', projectSlug: null };
  if (pageParam === 'about') return { page: 'about', projectSlug: null };
  if (pageParam === 'expertise') return { page: 'expertise', projectSlug: null };
  if (pageParam === 'contact') return { page: 'contact', projectSlug: null };
  if (pageParam === 'project' && slugParam) return { page: 'project', projectSlug: slugParam };

  return { page: 'home', projectSlug: null };
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(() => parseCurrentRoute());

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseCurrentRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = useCallback((page: PageRoute, slug: string | null = null) => {
    let newHash = '';
    if (page === 'home') newHash = '#/';
    else if (page === 'work') newHash = '#/work';
    else if (page === 'about') newHash = '#/about';
    else if (page === 'expertise') newHash = '#/expertise';
    else if (page === 'contact') newHash = '#/contact';
    else if (page === 'project' && slug) newHash = `#/project/${slug}`;

    if (window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash);
    }
    setRoute({ page, projectSlug: slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    page: route.page,
    projectSlug: route.projectSlug,
    navigate,
  };
}
