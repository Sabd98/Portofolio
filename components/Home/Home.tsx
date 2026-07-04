"use client";

import React from "react";
import { Hero } from "./Hero/Hero";
import { About } from "./About/About";
import { Skills } from "./Skills/Skills";
import { Contact } from "./Contact/Contact";
import { useActiveSection } from "@/components/Helper/useActiveSection";
import { HOME_IDS } from "@/constant/navs";


export const Home = () => {
  const activeId = useActiveSection(HOME_IDS);

  return (
    <>
      <div>
        {HOME_IDS.map((id) => (
          <div key={id} id={id} data-section-active={id === activeId}><HomeChildren id={id} /></div>
        ))}
      </div>
    </>
  );
};

const HomeChildren = ({ id }: { id: string }) => {
  switch (id) {
    case "home": return <Hero />;
    case "about": return <About />;
    case "skills": return <Skills />;
    case "contact": return <Contact />;
    default: return null;
  }
};
