"use client";

import { MobileNav } from "./MobileNav"
import { Nav } from "./Nav"
import { useState } from 'react';
import { useActiveSection } from "@/components/Helper/useActiveSection";
import { usePathname } from "next/navigation";
import { HOME_IDS } from "@/constant/navs";

export const ResponsiveNav = () => {
const [showNav, setShowNav] = useState(false);
const pathname = usePathname();
const isHomeRoute = pathname === "/";
const activeId = useActiveSection(HOME_IDS);

const showNavHandler = () => setShowNav(true);
const closeNavHandler = () => setShowNav(false);
  return (
    <>
        <Nav openNav={showNavHandler} activeId={activeId} isHomeRoute={isHomeRoute} />
        <MobileNav showNav={showNav} closeNav={closeNavHandler} activeId={activeId} isHomeRoute={isHomeRoute} />
    </>
  )
}
