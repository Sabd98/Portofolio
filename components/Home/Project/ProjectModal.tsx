import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { TechStackList } from "../../Shared/TechstackList";

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
  open: boolean;
  onClose: () => void;
  project: Project | null;
};

export const ProjectModal = ({ open, onClose, project }: Props) => {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: "background.paper",
          backgroundImage: "none",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        <Typography variant="h5" component="div" fontWeight="bold">
          {project.title}
        </Typography>
        <IconButton onClick={onClose} aria-label="close">
          <Icon icon="ic:round-close" />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ py: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            gutterBottom
            fontWeight="bold"
            color="textPrimary"
          >
            Description
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            {project.description}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            fontWeight="bold"
            color="textPrimary"
          >
            Tech Stacks
          </Typography>
          <TechStackList techstacks={project.techstacks} />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, pt: 0 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderRadius: 2,
            borderColor: "text.primary",
            color: "text.primary",
            "&:hover": {
              bgcolor: "text.primary",
              color: "background.default",
              borderColor: "text.primary",
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
