import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    project: {
      id: number;
      url: string;
      image: string;
      title: string;

    };
  };

  
export const ProjectCard = ({project}: Props) => {
    const {  url, image, title } = project;
  return (
    <div className="project_card">
    <Link href={url} target="_blank">
       <Image src={image} alt="project" width={200} height={200} className="w-full mb-2"/>
       <h1 className="text-2xl dark:text-white font-semibold text-center">{title}</h1>
    </Link>
   </div>
  )
}
