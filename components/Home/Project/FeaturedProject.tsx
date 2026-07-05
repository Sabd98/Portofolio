"use client";

import { useState, useMemo } from "react";
import { Box, Container, Grid } from "@mui/material";
import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { SectionHeading } from "@/components/Helper/Helper";
import { mainProjectData } from "@/Data/data";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ProjectModal } from "./ProjectModal";

import { YearFilter } from "./YearFilter";

export const FeaturedProject = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("all");

  const filteredProjects = useMemo(
    () =>
      selectedYear === "all"
        ? mainProjectData
        : mainProjectData.filter((p) => {
            const years = (p.year || "").split("-");
            return years.some((y) => y.trim() === selectedYear);
          }),
    [selectedYear]
  );

  const handleInfoClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "background.default",
        overflow: "hidden",
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading>Featured Projects</SectionHeading>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <YearFilter selected={selectedYear} onChange={setSelectedYear} />
        </Box>

        <FadeInSectionY>
          <Grid container spacing={6}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <FeaturedProjectCard
                  project={project}
                  onInfoClick={handleInfoClick}
                />
              </Grid>
            ))}
          </Grid>
        </FadeInSectionY>
      </Container>

      <ProjectModal
        open={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </Box>
  );
};
