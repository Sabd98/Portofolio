import { navLinks } from "@/constant/constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";
import Image from "next/image";
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
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      >
        <div
          className={`fixed ${navOpen} transform transition-all duration-500 delay-300 justify-center flex flex-col h-full  w-[80%] sm:w-[60%] bg-slate-800 space-x-6 z-[10000] mx-auto`}
        >
          {navLinks.map((nav) => {
            return (
              <Link key={nav.id} href={nav.url}>
                <p className="nav_link text-white text-[20px] ml-12 border-b-[1.5px] pb-2 border-gray-950 sm-text-[30px]">
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
