"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Estimate the combined nav + progress bar height in pixels. */
function getNavHeight(): number {
  const nav = document.querySelector(".nav_main") as HTMLElement | null;
  const progress = document.querySelector(".scroll-progress") as HTMLElement | null;
  const navH = nav?.offsetHeight ?? 0;
  const progH = progress?.offsetHeight ?? 0;
  if (navH + progH > 0) return navH + progH;
  try {
    const navEl = document.createElement("div");
    navEl.style.position = "fixed";
    navEl.style.height = "var(--vh, 1vh)";
    navEl.style.top = "0";
    document.body.appendChild(navEl);
    const vh = navEl.offsetHeight;
    document.body.removeChild(navEl);
    return Math.round(vh * 10) + 3;
  } catch {
    return 48;
  }
}

export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(() => sectionIds[0] ?? "");
  const sectionIdsRef = useRef(sectionIds);

  // Keep ref in sync whenever sectionIds change (e.g. different pages)
  useEffect(() => {
    sectionIdsRef.current = sectionIds;
  }, [sectionIds]);

  // Compute the first visible section from scrollY
  const computeActive = useCallback(() => {
    const ids = sectionIdsRef.current;
    if (!ids.length) return;
    const navOffset = getNavHeight();
    let best = ids[0];
    for (let i = 0; i < ids.length; i++) {
      const el = document.getElementById(ids[i]);
      if (el && el.offsetTop <= window.scrollY + navOffset) {
        best = ids[i];
      }
    }
    setActiveId(best);
  }, []);

  // One single effect: set initial state + listen to scroll
  useEffect(() => {
    // Seed from hash or scroll position on mount
    const hash = window.location.hash.slice(1);
    if (hash && sectionIds.includes(hash)) {
      setActiveId(hash);
    } else {
      computeActive();
    }

    // Listen to scroll for active section updates
    window.addEventListener("scroll", computeActive, { passive: true });
    return () => window.removeEventListener("scroll", computeActive);
  }, [computeActive]);

  return activeId;
}
