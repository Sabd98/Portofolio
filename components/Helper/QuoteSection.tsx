import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { quoteInfo } from "@/Data/data";
import { Box, Container, Typography } from "@mui/material";

export const QuoteSection = () => {
  return (
    <Box
      sx={{
        mt: 8,
        mb: 2,
        pt: 6,
        pb: 6,
        px: 2
      }}
    >
      <Container maxWidth="md">
        <FadeInSectionY>
          <Box
            sx={{
              position: "relative",
              textAlign: "center",
              px: { xs: 3, md: 6 },
            }}
          >
            <Typography
              variant="h5"
              component="blockquote"
              sx={{
                fontStyle: "italic",
                fontWeight: 500,
                color: "text.primary",
                fontSize: { xs: "1.5rem", md: "3rem" },
                lineHeight: 1.8,
                mt: -1,
              }}
            >
             &ldquo; {quoteInfo.text} &ldquo;
            </Typography>
            <Typography
              variant="subtitle1"
              component="cite"
              sx={{
                fontStyle: "normal",
                fontWeight: 600,
                color: "text.secondary",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              &mdash; {quoteInfo.author}
            </Typography>
          </Box>
        </FadeInSectionY>
      </Container>
    </Box>
  );
};
