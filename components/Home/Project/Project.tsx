import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { SectionHeading } from "@/components/Helper/Helper";
import { projectData } from "@/Data/data";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";

export const Project = () => {
  return (
    <div className="project">
      <SectionHeading>My Projects</SectionHeading>
      <FadeInSectionY>
        <div className="project_container">
          {projectData.map((project) => (
            <div key={project.id} className="text-center">
              <ProjectCard project={project} />
              <div className="px-4 pb-4 text-sm">
                <Link
                  href={project.source}
                  className="mt-1 inline-block h-[3rem] dark:text-white hover:text-gray-500 dark:hover:text-gray-200"
                >
                  Source
                </Link>
              </div>
            </div>
          ))}
        </div>
      </FadeInSectionY>
    </div>
  );
};
