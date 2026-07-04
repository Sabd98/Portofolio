"use client";

import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

type ScrollTriggerOptions = Parameters<typeof useScrollTrigger>[0];

export const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target: typeof window !== "undefined" ? window : undefined,
    getTrigger: (_store: React.MutableRefObject<number | undefined>, options: { disableHysteresis?: boolean; threshold?: number; target: Window | undefined }) => {
      const target = options.target as Window | undefined;
      if (!target) return false;
      const scrollY = target.pageYOffset;
      return scrollY > target.innerHeight;
    },
  } as ScrollTriggerOptions);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        aria-label="scroll to top"
        color="primary"
        sx={{
          position: "fixed",
          opacity: 0.7,
          bottom: 24,
          right: 24,
          zIndex: 201,
        }}
      >
        <Icon icon="mdi:arrow-up" width="24" height="24" />
      </Fab>
    </Zoom>
  );
};