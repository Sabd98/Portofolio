"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const ScrollProgress = () => {
  const pathname = usePathname();
  const [fillPct, setFillPct] = useState(0);
  const isHomeRoute = pathname === "/";

  const fillRef = useRef<HTMLDivElement | null>(null);
  const tickingRef = useRef(false);
  const lastPctRef = useRef(0);

  // Scroll-driven fill width with rAF throttling
  useEffect(() => {
    if (!isHomeRoute) return;

    const compute = () => {
      tickingRef.current = false;
      const firstEl = document.getElementById(SECTIONS[0].id);
      const lastEl = document.getElementById(SECTIONS[SECTIONS.length - 1].id);
      if (!firstEl || !lastEl || !fillRef.current) return;

      const scrollStart = firstEl.offsetTop;
      const scrollEnd =
        lastEl.offsetTop + lastEl.offsetHeight - window.innerHeight;
      const span = scrollEnd - scrollStart;
      if (span <= 0) return;

      const pct = Math.min(
        Math.max((window.scrollY - scrollStart) / span, 0),
        1
      );
      const pctValue = pct * 100;

      // Always write to DOM directly to avoid re-renders
      fillRef.current.style.width = `${pctValue}%`;

      // Only push to React state when value meaningfully changes
      if (Math.abs(pctValue - lastPctRef.current) >= 0.5) {
        lastPctRef.current = pctValue;
        setFillPct(pctValue);
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(compute);
    };

    const onResize = () => {
      cancelAnimationFrame(requestAnimationFrame(compute));
    };

    // Defer first computation slightly to ensure sections exist
    const initTimer = setTimeout(() => {
      compute();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
    }, 100);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      tickingRef.current = false;
      lastPctRef.current = 0;
    };
  }, [isHomeRoute]);

  return (
    <div
      className={`scroll-progress${!isHomeRoute ? " scroll-progress_hidden" : ""}`}
      aria-label="Section progress"
    >
      <div className="scroll-progress_track">
        <div
          ref={fillRef}
          className="scroll-progress_fill"
          style={{ width: `${fillPct}%` }}
        />
      </div>
    </div>
  );
};
