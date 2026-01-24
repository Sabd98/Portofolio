import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Typography,
  Button,
  Card,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Icon } from "@iconify/react";

type Project = {
  id: number;
  url: string;
  image: string;
  title: string;
  year?: string;
  company?: string;
  techstacks: string;
  description: string;
};

type Props = {
  project: Project;
  onInfoClick: (project: Project) => void;
};

export const FeaturedProjectCard = ({ project, onInfoClick }: Props) => {
  const { url, image, title, company, year } = project;

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: 'background.paper',
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
        },
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/3",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: 4,
          bgcolor: (theme) => theme.palette.mode === 'light' ? 'grey.200' : 'action.hover',
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "text.disabled",
            }}
          >
            <Icon icon="bi:image" width="48" height="48" />
            <Typography variant="caption" sx={{ mt: 1 }}>
              No Image Available
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
            opacity: 0,
            transition: "opacity 0.3s",
            "&:hover": { opacity: 1 },
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            p: 2,
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          pt: 3,
          pb: 2,
          px: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            sx={{
              color: "text.primary",
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Tooltip title="View Details">
            <IconButton
              onClick={() => onInfoClick(project)}
              size="small"
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                my: 1,
                "&:hover": {
                  bgcolor: "text.primary",
                  color: "background.default",
                  borderColor: "text.primary",
                },
              }}
            >
              <Icon icon="mdi:information-variant" />
            </IconButton>
          </Tooltip>
        </Box>

        {company && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1, fontWeight: 500 }}
          >
            {company} {year && `• ${year}`}
          </Typography>
        )}

        <Box sx={{ mt: "auto" }}>
          {url ? (
            <Button
              component={Link}
              href={url}
              target="_blank"
              variant="outlined"
              sx={{
                borderRadius: 50, 
                textTransform: "none",
                px: 3,
                py: 1,
                borderColor: "text.primary",
                color: "text.primary",
                "&:hover": {
                  bgcolor: "text.primary",
                  color: "background.default",
                  borderColor: "text.primary",
                },
              }}
            >
              View Project
            </Button>
          ) : (
            <Button
              disabled
              variant="outlined"
              sx={{
                borderRadius: 50,
                textTransform: "none",
                px: 3,
                py: 1,
                borderColor: "text.disabled",
                color: "text.disabled",
              }}
            >
              Private Only
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};
