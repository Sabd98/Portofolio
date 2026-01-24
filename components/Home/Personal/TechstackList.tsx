import { useState } from "react";
import { 
  Box, 
  Chip, 
  Stack,
  useTheme,
  Typography
} from "@mui/material";

const getTechStacks = (techstacks: string) => {
  const cleanString = techstacks.replace(/^Techstacks:\s*/i, "");
  return cleanString.split(",").map((t) => t.trim());
};

export const TechStackList = ({ techstacks }: { techstacks: string }) => {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const allStacks = getTechStacks(techstacks);
  const displayStacks = showAll ? allStacks : allStacks.slice(0, 4);
  const remaining = allStacks.length - 4;

  return (
    <Box sx={{ mb: 2, minHeight: 48 }}>
      <Stack direction="row" flexWrap="wrap" gap={0.5} justifyContent="center">
        {displayStacks.map((stack, idx) => (
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
        {!showAll && remaining > 0 && (
             <Chip 
                label={`+${remaining} More`}
                onClick={() => setShowAll(true)}
                size="small" 
                variant="outlined"
                sx={{ 
                  fontSize: '0.7rem', 
                  height: 24,
                  cursor: 'pointer',
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                   '&:hover': {
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'
                   }
                }} 
              />
        )}
      </Stack>
      {showAll && (
          <Box sx={{ textAlign: 'center', mt: 1 }}>
               <Typography 
                 component="span"
                 variant="caption"
                 onClick={() => setShowAll(false)}
                 sx={{ 
                    cursor: 'pointer', 
                    color: 'primary.main', 
                    fontWeight: 'bold',
                    '&:hover': { textDecoration: 'underline' }
                 }}
               >
                 Show Less
               </Typography>
          </Box>
      )}
    </Box>
  );
};
