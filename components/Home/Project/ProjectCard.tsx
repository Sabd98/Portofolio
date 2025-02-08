import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    project: {
      id: number;
      url: string;
      image: string;
      
    };
  };

  
export const ProjectCard = ({project}: Props) => {
    const {  url, image } = project;
  return (
    <div className="project_card">
    <Link href={url} target="_blank">
       <Image src={image} alt="project" width={200} height={200} className="w-full"/>
    </Link>
   </div>
  )
}
