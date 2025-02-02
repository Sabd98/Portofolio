import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { SectionHeading } from "@/components/Helper/Helper";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Project = () => {
  return (
    <div className="bg-gray-100 ">
      <SectionHeading>My Projects</SectionHeading>
      <FadeInSectionY>
      <div className="grid grid-cols-1 w-1/2 mx-auto mt-10 lg:grid-cols-2 items-center gap-10 gap-x-56">
       {projectData.map((project)=>{
        return <div key={project.id} className="bg-slate-100 mb-16 p-2 rounded-xl duration-600 transition-all hover:scale-125">
         <Link href={project.url} target="_blank">
            <Image src={project.image} alt="project" width={100} height={100} className="w-full"/>
         </Link>
        </div>
       })}
       
      </div>
      </FadeInSectionY>
      
    </div>
  );
};
