import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { SectionHeading } from "@/components/Helper/Helper";
import { projectData } from "@/Data/data";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";
import { useState } from "react";

export const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectData : projectData.slice(0, 4);

  return (
    <div className="project">
      <SectionHeading>My Projects</SectionHeading>
      <FadeInSectionY>
        <div className="project_container">
          {displayedProjects.map((project) => (
            <div key={project.id} className="text-center">
              <ProjectCard project={project} />
              <h1 className="text-sm dark:text-white mt-2 px-4 break-words overflow-hidden">
                {project.techstacks}
              </h1>
              <div className="px-4 text-sm">
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

        {projectData.length > 4 && (
          <div className="text-center mt-1">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 mb-6 rounded-md button transition-colors"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </FadeInSectionY>
    </div>
  );
};
