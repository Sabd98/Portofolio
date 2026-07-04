"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
        if (charIndex <= 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
        if (charIndex >= currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }, typingSpeed);
    }

    setDisplayText(currentText.slice(0, charIndex));

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText.split("").map((char, i) => (
        <span key={i}>{char}</span>
      ))}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-current"
        style={{ marginLeft: 1 }}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
};

export default TypewriterText;
