"use client";

import { mainProjectData } from "@/data/data";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

// Extract unique years from mainProjectData, splitting ranges like "2025-2026"
const YEAR_OPTIONS = (() => {
  const years = new Set<string>();
  mainProjectData.forEach((p) => {
    if (p.year) {
      p.year.split("-").forEach((y) => years.add(y.trim()));
    }
  });
  return Array.from(years)
    .filter((y) => /^\d{4}$/.test(y))
    .sort()
    .reverse();
})();

export const YearFilter = ({ selected, onChange }: { selected: string; onChange: (value: string) => void }) => {
  const handleChange = (e: SelectChangeEvent) => {
    onChange(e.target.value as string);
  };

  return (
    <FormControl sx={{ minWidth: 160 }}>
      <InputLabel id="year-filter-label" sx={{ color: "text.secondary" }}>
        Year
      </InputLabel>
      <Select
        labelId="year-filter-label"
        value={selected}
        label="Year"
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "divider",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
        }}
      >
        <MenuItem key="all" value="all">
          All
        </MenuItem>
        {YEAR_OPTIONS.map((yr) => (
          <MenuItem key={yr} value={yr}>
            {yr}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
