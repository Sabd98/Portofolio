"use client";

import { useState } from "react";
import { 
  Box, 
  Container, 
  Grid, 
  Button, 
  Chip, 
  Stack,
  useTheme
} from "@mui/material";
import { FadeInSectionY } from "@/components/Helper/FadeInSectionY"; 
import { SectionHeading } from "@/components/Helper/Helper";
import { projectData } from "@/Data/data";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";

const getTechStacks = (techstacks: string) => {
  const cleanString = techstacks.replace(/^Techstacks:\s*/i, "");
  return cleanString.split(",").map((t) => t.trim());
};

export const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectData : projectData.slice(0, 4);
  const theme = useTheme();

  return (
    <Box 
      component="section" 
      sx={{ 
        bgcolor: 'background.default',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading>My Projects</SectionHeading>
        
        <FadeInSectionY>
          <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
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
                    <Box sx={{ mb: 2, minHeight: 48 }}>
                      <Stack direction="row" flexWrap="wrap" gap={0.5} justifyContent="center">
                        {getTechStacks(project.techstacks).slice(0, 4).map((stack, idx) => (
                          <Chip 
                            key={idx} 
                            label={stack} 
                            size="small" 
                            variant="outlined"
                            sx={{ 
                              fontSize: '0.7rem', 
                              height: 24,
                              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'
                            }} 
                          />
                        ))}
                      </Stack>
                    </Box>

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
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button
                variant="outlined"
                onClick={() => setShowAll(!showAll)}
                sx={{
                  px: 4,
                  py: 1.5,
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
