import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { SectionHeading } from "@/components/Helper/Helper";
import { TechstackFormatter } from "@/components/Helper/TechstackFormatter";
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
            <div key={project.id} className="text-center project-card-container">
              <ProjectCard project={project} />
              <div className="px-3 pb-3">
                <TechstackFormatter techstacks={project.techstacks} maxLength={60} />
                <div >
                  <Link
                    href={project.source}
                    className="inline-block text-sm dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition-colors py-2 px-4 font-medium border border-gray-300 dark:border-gray-600 rounded-md hover:border-blue-400 dark:hover:border-blue-400 w-full"
                  >
                    View Source
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projectData.length > 4 && (
          <div className="project-button-wrapper">
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
