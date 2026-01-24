import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { ResponsiveNav } from "@/components/Home/Navbar/ResponsiveNav";
import "./globals.css";
import "../styles/nav.scss";
import "../styles/mobile_nav.scss";
import "../styles/contents/hero.scss";
import "../styles/contents/about.scss";
import "../styles/contents/skills.scss";
import "../styles/contents/contact.scss";
import { ThemeProvider } from "@/components/Helper/ThemeContext";

const font = Public_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Sabda's Portofolio",
  description: "By Sabda Avicenna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>
          <ResponsiveNav />
          {children}
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
