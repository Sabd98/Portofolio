import React, { useState } from "react";
import { FadeInSectionLeft } from "@/components/Helper/FadeInSectionLeft";
import { FadeInSectionRight } from "@/components/Helper/FadeInSectionRight";
import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { SectionHeading } from "@/components/Helper/Helper";
import { aboutInfo, timelineInfo } from "@/Data/data";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { Icon } from "@iconify/react";

export const About = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section className="about">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <SectionHeading>About Me</SectionHeading>

        {/* Web Developer Enthusiast Section - Centered and Separated */}
        <Box sx={{ py: 2, mb: 4 }}>
          <FadeInSectionY>
            <Card
              elevation={6}
              sx={{
                maxWidth: 900,
                mx: "auto",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ textAlign: "center", py: 6, px: 4 }}>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: "bold",
                    background: "text.primary",
                    mb: 4,
                    fontSize: { xs: "2rem", md: "3rem" },
                  }}
                >
                  {aboutInfo.title}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    textAlign: "justify",
                    textIndent: "2rem",
                    lineHeight: 1.8,
                    color: "text.primary",
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    fontWeight: 400,
                    maxWidth: "800px",
                    mx: "auto",
                  }}
                >
                  {aboutInfo.description}
                </Typography>
              </CardContent>
            </Card>
          </FadeInSectionY>
        </Box>

        <Box sx={{ py: 2 }}>
          <FadeInSectionY>
            <Typography
              variant="h3"
              component="h1"
              textAlign="center"
              gutterBottom
              sx={{
                mb: 6,
                fontWeight: "bold",
                color: "text.primary",
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Career&apos;s Roadmap
            </Typography>
          </FadeInSectionY>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: 6,
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", lg: "35%" },
                minWidth: { lg: "300px" },
              }}
            >
              <FadeInSectionLeft>
                <Box>
                  <Timeline
                    position="right"
                    sx={{
                      "& .MuiTimelineItem-root": {
                        "&:before": {
                          content: "none",
                        },
                        minHeight: 120,
                      },
                      "& .MuiTimelineContent-root": {
                        px: 2,
                        py: 1,
                      },
                      "& .MuiTimelineSeparator-root": {
                        alignSelf: "stretch",
                      },
                    }}
                  >
                    {timelineInfo.map((item, index) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot
                            color="primary"
                            variant="filled"
                            sx={{
                              padding: 1.5,
                              boxShadow: 3,
                            }}
                          >
                            <Icon icon="mdi:briefcase" width={20} height={20} />
                          </TimelineDot>
                          {index < timelineInfo.length - 1 && (
                            <TimelineConnector sx={{ minHeight: 60 }} />
                          )}
                        </TimelineSeparator>
                        <TimelineContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                          }}
                        >
                          <Box>
                            <Chip
                              label={item.year}
                              color={item.chipColor}
                              variant="filled"
                              size="small"
                              sx={{
                                fontWeight: "bold",
                                fontSize: "0.75rem",
                                mb: 1.5,
                              }}
                            />
                            <Card
                              elevation={2}
                              sx={{
                                p: 2,
                                backgroundColor: "background.paper",
                                color: "text.primary",
                              }}
                            >
                              <Typography
                                variant="body2"
                                fontWeight="bold"
                                sx={{
                                  color: "text.primary",
                                  mb: 0.5,
                                }}
                              >
                                {item.company}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "text.secondary",
                                  fontWeight: "medium",
                                }}
                              >
                                {item.position}
                              </Typography>
                            </Card>
                          </Box>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Box>
              </FadeInSectionLeft>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", lg: "65%" },
                flex: 1,
              }}
            >
              <FadeInSectionRight>
                <Box>
                  <Typography
                    variant="h6"
                    component="p"
                    gutterBottom
                    sx={{
                      mb: 4,
                      fontWeight: "bold",
                      color: "text.primary",
                      textAlign: { xs: "center", lg: "left" },
                    }}
                  >
                    Job Descriptions
                  </Typography>

                  {timelineInfo.map((item, index) => (
                    <Accordion
                      key={index}
                      expanded={expanded === `panel${index}`}
                      onChange={handleAccordionChange(`panel${index}`)}
                      sx={{
                        mb: 3,
                        "&:before": {
                          display: "none",
                        },
                        boxShadow: 4,
                        borderRadius: 2,
                        "&:hover": {
                          transform: "translateY(-2px)",
                          transition: "all 0.3s ease",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <Icon
                            icon="mdi:chevron-down"
                            width={24}
                            height={24}
                          />
                        }
                        aria-controls={`panel${index}bh-content`}
                        id={`panel${index}bh-header`}
                        sx={{
                          background: "primary",
                          color: "secondary",
                          borderRadius: "8px 8px 0 0",
                          "& .MuiAccordionSummary-content": {
                            margin: "16px 0",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          },
                        }}
                      >
                        <Typography
                          sx={{ fontWeight: "bold", fontSize: "1.1rem", mb: 1 }}
                        >
                          {item.company}
                        </Typography>
                        <Typography sx={{ fontSize: "0.9rem", opacity: 0.9 }}>
                          {item.position}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          backgroundColor: "primary",
                          borderTop: "1px solid",
                          borderColor: "divider",
                          p: 3,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: "justify",
                            lineHeight: 1.7,
                            color: "text.primary",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {item.description}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </FadeInSectionRight>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};
