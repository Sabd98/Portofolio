"use client";

import { navLinks } from "@/constant/constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type Props = {
  openNav: () => void;
};

export const Nav = ({ openNav }: Props) => {
  
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  
  return (
    <div className="nav_main">
      <div className="nav_layer ">
        <Image
          src="/images/next.svg"
          alt=""
          width={200}
          height={200}
          className="ml-3 sm:ml-0"
        />
        <div className="nav_content">
          <div className="hidden items-center lg:flex space-x-32">
            {navLinks.map((nav) => {
              return (
                <Link
                  key={nav.id}
                  href={nav.url}
                  onClick={(e) => handleScroll(e, nav.url)}
                >
                  <p className="nav_link">{nav.label}</p>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="nav_content space-x-4">
          <Link href={`https://www.linkedin.com/in/sabda-avicenna`}>
            <Button className="button">Link Me</Button>
          </Link>
          <Icon
            onClick={openNav}
            icon="tdesign:bulletpoint"
            width="24"
            height="24"
            className="icon"
          />
        </div>
      </div>
    </div>
  );
};