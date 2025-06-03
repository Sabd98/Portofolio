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
    <div className="project_card  mb-0">
      <Link href={url} target="_blank">
        <Image
          src={image}
          alt="project"
          width={800}
          height={800}
          className=" mb-0"
        />
        <h1 className="text-xl dark:text-white font-semibold text-center">
          {title}
        </h1>
      </Link>
    </div>
  );
};
