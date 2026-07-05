"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  Chip,
  Typography,
} from "@mui/material";
import { FadeInSectionY } from "@/components/Shared/FadeInSectionY";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";
import { TechStackList } from "../../Shared/TechstackList";
import { getVisibleSkills } from "./filterProjects";
import { filterProjectsBySkills } from "./filterProjects";

const PAGE_SIZE = 9;

export const Project = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(
    () => filterProjectsBySkills(selectedSkills),
    [selectedSkills]
  );

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const toggleSkill = (title: string) => {
    const next = selectedSkills.includes(title)
      ? selectedSkills.filter((s) => s !== title)
      : [...selectedSkills, title];
    setSelectedSkills(next);
    setCurrentPage(1);
  };

  const clearAll = () => {
    setSelectedSkills([]);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const currentStart = (currentPage - 1) * PAGE_SIZE + 1;
  const currentEnd = Math.min(currentPage * PAGE_SIZE, filteredProjects.length);

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "background.default",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading>My Personal Projects</SectionHeading>

        {/* Skill Filter Chips */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, justifyContent: "center", mb: 3 }}>
          {getVisibleSkills().map((skill) => {
              const isActive = selectedSkills.includes(skill.title);
              return (
                <Chip
                  key={skill.id}
                  label={skill.title}
                  onClick={() => toggleSkill(skill.title)}
                  variant={isActive ? "filled" : "outlined"}
                  size="small"
                  sx={{
                    fontSize: "0.7rem",
                    height: 26,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    ...(isActive && {
                      bgcolor: "primary.main",
                      color: "white",
                      borderColor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.dark",
                        borderColor: "primary.dark",
                      },
                    }),
                  }}
                />
              );
            })}
          {selectedSkills.length > 0 && (
            <Chip
              label="Show All"
              onClick={clearAll}
              size="small"
              sx={{
                fontSize: "0.7rem",
                height: 26,
                cursor: "pointer",
                textDecoration: "underline",
                color: "text.secondary",
              }}
            />
          )}
        </Box>

        <FadeInSectionY>
          <Grid container spacing={4}>
            {paginatedProjects.map((project) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={project.id}
                sx={{ display: "flex" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                    transition: "box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ flexGrow: 1, p: 2 }}>
                    <ProjectCard project={project} />
                  </Box>

                  <Box sx={{ px: 2, pb: 2 }}>
                    <TechStackList techstacks={project.techstacks} />

                    <Button
                      component={Link}
                      href={project.source}
                      target="_blank"
                      fullWidth
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        borderRadius: 2,
                        py: 1,
                        borderColor: "divider",
                        color: "text.primary",
                        "&:hover": {
                          bgcolor: "text.primary",
                          color: "background.default",
                          borderColor: "text.primary",
                        },
                      }}
                    >
                      View Source
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {paginatedProjects.length === 0 && (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography variant="body1" color="text.secondary">
                No projects match the selected skills.
              </Typography>
            </Box>
          )}

          {totalPages > 1 && (
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Box sx={{ display: "inline-flex", gap: 0.5 }}>
                <Button
                  disabled={currentPage <= 1}
                  onClick={() => goToPage(currentPage - 1)}
                  variant="outlined"
                  size="small"
                  sx={{ textTransform: "none" }}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    onClick={() => goToPage(page)}
                    variant={currentPage === page ? "contained" : "outlined"}
                    size="small"
                    sx={{
                      minWidth: 36,
                      textTransform: "none",
                      ...(currentPage === page && {
                        bgcolor: "primary.main",
                      }),
                    }}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  disabled={currentPage >= totalPages}
                  onClick={() => goToPage(currentPage + 1)}
                  variant="outlined"
                  size="small"
                  sx={{ textTransform: "none" }}
                >
                  Next
                </Button>
              </Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 1 }}
              >
                Showing {currentStart}-{currentEnd} of {filteredProjects.length}
              </Typography>
            </Box>
          )}
        </FadeInSectionY>
      </Container>
    </Box>
  );
};
