"use client";

import { MobileNav } from "./MobileNav"
import { Nav } from "./Nav"
import { useState } from 'react';

export const ResponsiveNav = () => {
const [showNav, setShowNav] = useState(false); 

const showNavHandler = () => setShowNav(true);
const closeNavHandler = () => setShowNav(false);
  return (
    <>
        <Nav openNav={showNavHandler}/>
        <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </>
  )
}
