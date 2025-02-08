import { FadeInSectionLeft } from "@/components/Helper/FadeInSectionLeft";
import { SectionHeading } from "@/components/Helper/Helper";
import { aboutInfo } from "@/Data/data";

export const About = () => {
  return (
    <div className=" about">
              <SectionHeading>About Me</SectionHeading>

      <div className="about_layer">
        <div className="about_container">
          <FadeInSectionLeft>
            <h1 >
               {aboutInfo.title}
            </h1>
            <p >
              {aboutInfo.description}
            </p>
          </FadeInSectionLeft>
        </div>
      </div>
    </div>
  );
};
