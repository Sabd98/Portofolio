"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(() => sectionIds[0] ?? "");

  // Seed activeId from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const valid = sectionIds.find((id) => id === hash);
      if (valid) setActiveId(valid);
    } else {
      // If no hash, use scroll position to seed (accounts for header offset)
      const HEADER_OFFSET = 48;
      let best = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= window.scrollY + HEADER_OFFSET) {
          best = id;
        }
      }
      setActiveId(best);
    }
  }, []);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    // Header offset: fixed nav + scroll progress bar height
    const HEADER_OFFSET = 48;

    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the section closest to (but above) the viewport top minus header offset
        // This is the standard scroll-spy algorithm
        let best: { target: string; offsetTop: number } | null = null;

        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          const elTop = el.offsetTop;
          const viewTop = window.scrollY + HEADER_OFFSET;

          // Among sections whose top is at/below viewTop, pick the first one (closest to scroll position)
          if (elTop >= viewTop - 200) {
            if (!best || elTop < best.offsetTop) {
              best = { target: el.id, offsetTop: elTop };
            }
          }
        }

        // If no section starts in/near viewport (edge case), use largest ratio
        if (!best) {
          let bestRatio: { target: string; ratio: number; offsetTop?: number } | null = null;
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            if (!bestRatio || e.intersectionRatio > bestRatio.ratio) {
              bestRatio = { target: e.target.id, ratio: e.intersectionRatio };
            }
          }
          if (bestRatio) {
            best = { target: bestRatio.target, offsetTop: bestRatio.offsetTop ?? 0 };
            setActiveId(bestRatio.target);
          }
        }

        if (best) setActiveId(best.target);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds.join(",")]);

  return activeId;
}
