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
    className="skill_card relative w-52 h-64"
    whileHover={{ rotateY: 180 }}
    transition={{ duration: 0.3 }}
    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
  >
    {/* Sisi Depan */}
    <motion.div
      className="absolute w-full h-full bg-slate-100 p-4 rounded-xl"
      style={{ backfaceVisibility: "hidden" }}
    >
      <Image src={image} alt={title} width={80} height={80} className="object-contain mx-auto" />
      <h1 className="text-2xl text-black font-semibold">{title}</h1>
      <p className="m-4 p-2 rounded-lg drop-shadow-md text-xl bg-gray-200 text-black font-bold opacity-60">
        {percent}
      </p>
    </motion.div>

    {/* Sisi Belakang */}
    <motion.div
      className="absolute w-full h-full bg-slate-400 text-white p-4 rounded-xl flex flex-col items-center justify-center"
      style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
    >
      <h1 className="text-2xl font-semibold">More Info</h1>
      <p className="text-lg mt-2">Skill Level: {percent}</p>
      <p className="text-md mt-1">Click for details</p>
    </motion.div>
  </motion.div>
  );
};
