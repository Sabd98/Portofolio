"use client";

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "language", label: "Language" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "other", label: "Other" }
];

interface CategoryFilterProps {
  selected: string;
  onChange: (value: string) => void;
}

export const CategoryFilter = ({ selected, onChange }: CategoryFilterProps) => {
  const handleChange = (e: SelectChangeEvent) => {
    onChange(e.target.value as string);
  };

  return (
    <FormControl sx={{ minWidth: 160 }}>
      <InputLabel id="skill-category-label" sx={{ color: "text.secondary" }}>
        Category
      </InputLabel>
      <Select
        labelId="skill-category-label"
        value={selected}
        label="Category"
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
        {CATEGORIES.map((cat) => (
          <MenuItem key={cat.value} value={cat.value}>
            {cat.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
