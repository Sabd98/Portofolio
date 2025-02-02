import { SectionHeading } from "@/components/Helper/Helper";
import { skillsData } from "@/Data/data";
import React from "react";
import { SkillCard } from "./SkillCard";
import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";

export const Skills = () => {
  return (
    <div className="py-2  bg-gray-100 ">
      <SectionHeading>My Skills</SectionHeading>
      <FadeInSectionY>
        <div className="grid grid-cols-2 w-4/5 mx-auto mt-10 mb-5 lg:grid-cols-5 items-center gap-6">
          {skillsData.map((skill) => {
            return (
              <div key={skill.id}>
                <SkillCard skill={skill} />
              </div>
            );
          })}
        </div>
      </FadeInSectionY>
    </div>
  );
};
