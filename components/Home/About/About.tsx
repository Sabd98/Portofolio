import { FadeInSectionLeft } from "@/components/Helper/FadeInSectionLeft";
import { SectionHeading } from "@/components/Helper/Helper";
import { aboutInfo } from "@/Data/data";

export const About = () => {
  return (
    <div className=" overflow-hidden bg-gray-100">
      <div className="flex flex-col justify-center w-4/5 mx-auto">
        <SectionHeading>About Me</SectionHeading>
        <div className="grid grid-cols-1 my-10 pb-6 lg:grid-cols-2 items-center gap-12">
          <FadeInSectionLeft>
            <h1 className="text-2x1 text-black font-semibold">
              I am {aboutInfo.title}
            </h1>
            <p className="mt-6 text-lg text-black text-opacity-60">
              {aboutInfo.description}
            </p>
          </FadeInSectionLeft>
        </div>
      </div>
    </div>
  );
};
