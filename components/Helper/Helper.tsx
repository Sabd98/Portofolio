import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="w-screen bg-slate-200 dark:bg-slate-700 text-center p-4 mx-auto dark:text-white text-2xl rounded-md">
      {children}
    </h1>
  );
};
