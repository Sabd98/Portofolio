import { Project } from "@/components/Home/Personal/Project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Projects | Sabda's Portfolio",
  description: "Showcase of my personal projects and experiments.",
};

export default function PersonalPage() {
  return (
    <main className="min-h-screen pt-[10vh]">
       {/* Added padding top to account for fixed navbar if any */}
      <Project />
    </main>
  );
}
