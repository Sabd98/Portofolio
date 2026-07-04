"use client";

import { navLinks } from "@/constant/navs";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export const MobileNav = ({ showNav, closeNav }: Props) => {
  const pathname = usePathname();
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <aside
      className={` ${navOpen} mobilenav_main`}
      aria-label="Mobile navigation"
      aria-hidden={!showNav}
    >
      <div className={` ${navOpen} mobilenav_layer`}>
        <Icon
          icon="ic:outline-close"
          onClick={closeNav}
          width="28"
          height="28"
          className="mobilenav_close"
        />

        <nav
          className="flex flex-col justify-center h-full space-y-6 px-4"
          aria-label="Mobile menu"
        >
          {navLinks.map((nav) => {
            let href = nav.url;
            if (pathname !== "/" && nav.url.startsWith("#")) {
              href = `/${nav.url}`;
            }
            return (
              <Link key={nav.id} href={href} onClick={closeNav}>
                <div className="mobilenav_label">{nav.label}</div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
