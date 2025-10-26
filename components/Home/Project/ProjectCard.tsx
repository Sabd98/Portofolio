import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  project: {
    id: number;
    url: string;
    image: string;
    title: string;
  };
};

export const ProjectCard = ({ project }: Props) => {
  const { url, image, title } = project;
  return (
    <div className="project_card h-full flex flex-col">
       <h1 className="text-xl dark:text-white font-semibold text-center mb-2 min-h-[3rem] flex items-center justify-center">
          {title}
        </h1>
      <Link href={url} target="_blank" className="flex-1">
        <Image
          src={image}
          alt="project"
          width={800}
          height={400}
          style={{ objectFit: "cover" }}
          className="mb-0 w-full h-full rounded-lg"
        />
       
      </Link>
    </div>
  );
};
