import { SectionHeading } from "@/components/Helper/Helper";
import { skillsData } from "@/Data/data";
import React from "react";
import { SkillCard } from "./SkillCard";
import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";

export const Skills = () => {
  return (
    <section className="skill">
      <SectionHeading>My Skills</SectionHeading>
      <FadeInSectionY>
        <article className="skill_container">
          {skillsData.map((skill) => {
            return (
              <div key={skill.id}>
                <SkillCard skill={skill} />
              </div>
            );
          })}
        </article>
      </FadeInSectionY>
    </section>
  );
};
