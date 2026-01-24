import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Typography, Box } from "@mui/material";

type Props = {
  project: {
    id: number;
    url: string;
    image: string;
    title: string;
  };
};

export const ProjectCard = ({ project }: Props) => {
  const { url, image, title } = project;
  return (
    <Card 
      component={Link} 
      href={url} 
      target="_blank"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'background.paper',
      }}
    >
      <Box sx={{ p: 2, pb: 0, textAlign: 'center' }}>
        <Typography 
          variant="h6" 
          component="h2" 
          fontWeight="bold"
          sx={{ 
            minHeight: '3rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'text.primary' 
          }}
        >
          {title}
        </Typography>
      </Box>
      
      <Box sx={{ flexGrow: 1, position: 'relative', minHeight: 200 }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
    </Card>
  );
};
