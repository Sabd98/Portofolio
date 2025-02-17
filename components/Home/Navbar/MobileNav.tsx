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
                <p className="nav_link text-slate-300 text-[20px] ml-12 border-b-[1.5px] pb-2 border-gray-950 sm-text-[30px]">
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
            className="cursor-pointer text-white absolute top-5 right-2"
          />
        </div>
      </div>
    </>
  );
};
