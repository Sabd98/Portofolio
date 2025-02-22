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
          {navLinks.map((nav) => {
            return (
              <Link key={nav.id} href={nav.url}>
                <p className="mobilenav_label nav_link sm-text-[30px]">
                  {nav.label}
                </p>
              </Link>
            );
          })}
          <Icon
            icon="ic:outline-close"
            onClick={closeNav}
            width="24"
            height="24"
            className="cursor-pointer text-white dark:text-slate-600  absolute top-5 right-2"
          />
        </div>
      </div>
    </>
  );
};
