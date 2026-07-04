import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const SectionHeading = ({ children, className }: Props) => {
  return (
    <div className={`relative w-full mb-8 ${className || ""}`}>
      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 w-screen left-1/2 -translate-x-1/2"></div>
      <h2 className="relative text-center p-4 dark:text-white text-2xl max-w-4xl mx-auto">
        {children}
      </h2>
    </div>
  );
};
