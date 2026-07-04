"use client";

import { SectionHeading } from "@/components/Helper/Helper";
import { skillsData, Skill } from "@/Data/data";
import React, { useState } from "react";
import { SkillCard } from "./SkillCard";
import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { CategoryFilter } from "./CategoryFilter";
import { Box } from "@mui/material";

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((s: Skill) => s.category === selectedCategory);

  return (
    <section className="skill">
      <SectionHeading>My Skills</SectionHeading>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <CategoryFilter
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </Box>
      <FadeInSectionY>
        <article className="skill_container">
          {filteredSkills.map((skill: Skill) => (
            <div key={skill.id}>
              <SkillCard skill={skill} />
            </div>
          ))}
        </article>
      </FadeInSectionY>
    </section>
  );
};
