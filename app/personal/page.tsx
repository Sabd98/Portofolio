import { Project } from "@/components/Home/Personal/Project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sabda's Portfolio",
  description: "Showcase of my life journey, experiences, featured and personal projects.",
};

export default function PersonalPage() {
  return (
    <section className="min-h-screen pt-[10vh]">
      <Project />
    </section>
  );
}
