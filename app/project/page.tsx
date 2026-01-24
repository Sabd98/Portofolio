import { FeaturedProject } from "@/components/Home/Project/FeaturedProject";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Projects | Sabda's Portfolio",
  description: "Highlighting my key projects and case studies.",
};

export default function ProjectPage() {
  return (
    <section className="min-h-screen pt-[10vh]">
      <FeaturedProject />
    </section>
  );
}
