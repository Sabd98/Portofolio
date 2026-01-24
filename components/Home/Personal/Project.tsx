"use client";

import { useState } from "react";
import { 
  Box, 
  Container, 
  Grid, 
  Button, 
  Chip, 
  Stack,
  useTheme,
  Typography
} from "@mui/material";
import { FadeInSectionY } from "@/components/Helper/FadeInSectionY"; 
import { SectionHeading } from "@/components/Helper/Helper";
import { projectData } from "@/Data/data";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";
import { TechStackList } from "./TechstackList";


export const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectData : projectData.slice(0, 4);

  return (
    <Box 
      component="section" 
      sx={{ 
        bgcolor: 'background.default',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading>My Personal Projects</SectionHeading>
        
        <FadeInSectionY>
          <Grid container spacing={4} sx={{ mt: 2, justifyContent: 'center' }}>
            {displayedProjects.map((project) => (
              <Grid item xs={12} md={6} lg={3} key={project.id} sx={{ display: 'flex' }}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    width: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: 'hidden',
                    transition: 'box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: 6
                    }
                  }}
                >
                  <Box sx={{ flexGrow: 1, p: 2 }}>
                    <ProjectCard project={project} />
                  </Box>

                  <Box sx={{ px: 2, pb: 2 }}>
                    {/* Tech Stacks */}
                    <TechStackList techstacks={project.techstacks} />

                    <Button
                      component={Link}
                      href={project.source}
                      target="_blank"
                      fullWidth
                      variant="outlined"
                      sx={{
                        textTransform: 'none',
                        borderRadius: 2,
                        py: 1,
                        borderColor: 'divider',
                        color: 'text.primary',
                        '&:hover': {
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          bgcolor: 'transparent'
                        }
                      }}
                    >
                      View Source
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {projectData.length > 4 && (
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button
                variant="outlined"
                onClick={() => setShowAll(!showAll)}
                sx={{
                  px: 4,
                  py: 1.5,
                  my:3,
                  fontSize: '1rem',
                  borderRadius: 2,
                  boxShadow: 4,
                  textTransform: 'none'
                }}
              >
                {showAll ? "Show Less" : "Show All"}
              </Button>
            </Box>
          )}
        </FadeInSectionY>
      </Container>
    </Box>
  );
};
