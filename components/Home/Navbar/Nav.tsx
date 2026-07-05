"use client";
import { useTheme } from "@/components/Shared/ThemeContext";
import { navLinks } from "@/constant/navs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Switch } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {
  openNav: () => void;
  activeId: string;
  isHomeRoute: boolean;
};

export const Nav = ({ openNav, activeId, isHomeRoute }: Props) => {
  const pathname = usePathname();
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string,
  ) => {
    if (pathname === "/" && hash.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="nav_main">
      <div className="nav_layer">
        <div className="flex items-center">
          <Image
            src="/images/MyLogo.png"
            alt="My Logo"
            width={50}
            height={50}
          />
          <button
            onClick={openNav}
            aria-label="Open navigation menu"
            className="icon ml-2"
          >
            <Icon
              icon="tdesign:bulletpoint"
              width="24"
              height="24"
            />
          </button>
        </div>
        <div className="nav_content space-x-12">
          <nav aria-label="Main" className="hidden items-center h-fit lg:flex flex-1 justify-center space-x-8">
            {navLinks.map((nav) => {
              let href = nav.url;
              if (pathname !== "/" && nav.url.startsWith("#")) {
                href = `/${nav.url}`;
              }
              const isHomeSection = nav.url.startsWith("#");
            const isExternalRoute = !nav.url.startsWith("#");
            const isActive = isHomeSection
              ? (isHomeRoute && activeId === nav.url.slice(1))
              : isExternalRoute && pathname === nav.url;
              return (
                <div key={nav.id}>
                  <Link
                    href={href}
                    onClick={(e) => handleScroll(e, nav.url)}
                    className={isActive ? "nav_link_active" : ""}
                  >
                    <p className="nav_link">{nav.label}</p>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="nav_content space-x-4">
          <Link href={`https://www.linkedin.com/in/sabda-avicenna`}>
            <Button
              className="button gap-2"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "auto",
                lineHeight: 1,
                textAlign: "center",
                "& .MuiButton-startIcon": {
                  margin: 0,
                },
                "& > span": {
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              <Icon icon="devicon:linkedin" width="25" height="25" />
              <span> Link Me</span>
            </Button>
          </Link>

          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            sx={{
              m: 1,
              width: 62,
              height: 34,
              "& .MuiSwitch-switchBase": {
                padding: 0,
                "&.Mui-checked": {
                  transform: "translateX(22px)",
                },
                "& .MuiSwitch-thumb": {
                  width: 28,
                  height: 28,
                  transition: "background-color 0.2s ease",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23001e3c%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><circle cx=%2212%22 cy=%2212%22 r=%224%22/><path d=%22M12 2v2%22/><path d=%22M12 20v2%22/><path d=%22m4.93 4.93 1.41 1.41%22/><path d=%22m17.66 17.66 1.41 1.41%22/><path d=%22M2 12h2%22/><path d=%22M20 12h2%22/><path d=%22m6.34 17.66-1.41 1.41%22/><path d=%22m19.07 4.93-1.41 1.41%22/></svg>')`,
                  },
                },
                "&.Mui-checked .MuiSwitch-thumb": {
                  "&::before": {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z%22/></svg>')`,
                  },
                },
              },
              "& .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: "#aab4be",
                borderRadius: 16,
              },
            }}
          />
        </div>
      </div>
    </header>
  );
};
