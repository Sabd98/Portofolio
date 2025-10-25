import { navLinks } from "@/constant/constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <>
      <div className={` ${navOpen} mobilenav_main`}>
        <div className={` ${navOpen} mobilenav_layer`}>
          <Icon
            icon="ic:outline-close"
            onClick={closeNav}
            width="28"
            height="28"
            className="mobilenav_close"
          />
          
          <div className="flex flex-col justify-center h-full space-y-6 px-4">
            {navLinks.map((nav) => {
              return (
                <Link key={nav.id} href={nav.url} onClick={closeNav}>
                  <div className="mobilenav_label">
                    {nav.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
