import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="w-fit bg-slate-800 text-center p-4 mx-auto text-white text-2xl rounded-md">
      {children}
    </h1>
  );
};
