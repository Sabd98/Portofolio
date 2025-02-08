import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { SectionHeading } from "@/components/Helper/Helper";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <div className="project">
      <SectionHeading>My Projects</SectionHeading>
      <FadeInSectionY>
      <div className="project_container">
       {projectData.map((project)=>{
        return <ProjectCard key={project.id} project={project} />
       })}
       
      </div>
      </FadeInSectionY>
      
    </div>
  );
};
