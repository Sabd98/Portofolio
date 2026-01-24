import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    source:string;
  };
};

export const SkillCard = ({ skill }: Props) => {
  const { image, title,source } = skill;
  return (
    <motion.div
      className="skill_card "
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.3 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {/* Sisi Depan */}
      <motion.div
        className="skill_card_front"
        style={{ backfaceVisibility: "hidden" }}
      >
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className="object-contain mx-auto"
        />
        <h1 className="text-xl dark:text-white font-semibold mt-2">{title}</h1>
      </motion.div>

      {/* Sisi Belakang */}
      <motion.div
        className="skill_card_back"
        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
      >
        <h1 className="text-xl font-semibold">More Info</h1>
        <a
          href={source}
          className="text-base mt-2 hover:text-gray-900 "
        >
          Click for details
        </a>
      </motion.div>
    </motion.div>
  );
};
