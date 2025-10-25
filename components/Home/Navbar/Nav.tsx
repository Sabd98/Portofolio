"use client";

import { useTheme } from "@/components/Helper/ThemeContext";
import { navLinks } from "@/constant/constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, FormControlLabel, Switch } from "@mui/material";
import Link from "next/link";

type Props = {
  openNav: () => void;
};

export const Nav = ({ openNav }: Props) => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="nav_main">
      <div className="nav_layer ">
        <h1 className="hidden md:block text-5xl">MY WEB</h1>
        <div className="nav_content space-x-12">
          <Icon
            onClick={openNav}
            icon="tdesign:bulletpoint"
            width="24"
            height="24"
            className="icon"
          />
          <div className="hidden items-center h-fit lg:flex flex-1 justify-center space-x-8">
            {navLinks.map((nav) => {
              return (
                <div key={nav.id}>
                  <Link
                    href={nav.url}
                    onClick={(e) => handleScroll(e, nav.url)}
                  >
                    <p className="nav_link">{nav.label}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="nav_content space-x-4">
          <Link href={`https://www.linkedin.com/in/sabda-avicenna`}>
            <Button 
              className="button gap-2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'auto',
                lineHeight: 1,
                textAlign: 'center',
                '& .MuiButton-startIcon': {
                  margin: 0,
                },
                '& > span': {
                  display: 'flex',
                  alignItems: 'center',
                }
              }}
            >
              <Icon icon="devicon:linkedin" width="25" height="25" />
              <span> Link Me</span>
            </Button>
          </Link>
          
          <FormControlLabel
            control={
              <Switch
                checked={theme === "dark"}
                onChange={toggleTheme}
                sx={{ m: 1 }}
              />
            }
            className="font-semibold dark:text-slate-50"
            label={theme === "dark" ? "Dark" : "Light"}
          />
        </div>
      </div>
    </div>
  );
};
