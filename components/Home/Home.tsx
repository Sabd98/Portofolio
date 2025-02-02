"use client";

import React from "react";
import { Hero } from "./Hero/Hero";
import { About } from "./About/About";
import { Project } from "./Project/Project";
import { Skills } from "./Skills/Skills";
import { Contact } from "./Contact/Contact";

export const Home = () => {
  return (
    <div>
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Project /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};
