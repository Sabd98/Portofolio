import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

export const SkillCard = ({ skill }: Props) => {
  const { image, percent, title } = skill;
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
          width={80}
          height={80}
          className="object-contain mx-auto"
        />
        <h1 className="text-2xl dark:text-white font-semibold">{title}</h1>
        <p className="skill_label">{percent}</p>
      </motion.div>

      {/* Sisi Belakang */}
      <motion.div
        className="skill_card_back"
        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
      >
        <h1 className="text-3xl font-semibold">More Info</h1>
        <a
          href={`https://www.linkedin.com/in/sabda-avicenna`}
          className="text-xl mt-1 hover:text-gray-900 "
        >
          Click for details
        </a>
      </motion.div>
    </motion.div>
  );
};
