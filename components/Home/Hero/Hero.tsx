import { FadeInSectionLeft } from "@/components/Shared/FadeInSectionLeft";
import { FadeInSectionRight } from "@/components/Shared/FadeInSectionRight";
import { BaseInfo } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";
import { TypewriterText } from "@/components/Shared/TypewriterText";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_layer">
        <article className="hero_container">
          <FadeInSectionLeft>
            <h1 className="text-black dark:text-white">
              {BaseInfo.name}
            </h1>
            <h2 className="text-black dark:text-white font-bold">
              <TypewriterText
                texts={[
                  "Fullstack Web Developer",
                  "Also a Frontend Developer",
                  "Also a Backend Developer",
                  "Or a Software Engineer",
                  "Or a Freelancer"
                ]}
                className="text-primary dark:text-white"
              />
            </h2>
            <p className="text-black dark:text-white">
              {BaseInfo.description}
            </p>
            <a href="/myCV.pdf" download="Sabda_Avicenna_CV_Eng.pdf">
              <Button className="button">
                <span>Download CV</span>
                <Icon
                  icon="ic:round-file-download"
                  width="24"
                  height="24"
                  className="ml-5"
                />
              </Button>
            </a>
          </FadeInSectionLeft>

          <div className="hero_container_img">
            <FadeInSectionRight>
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={500}
                height={500}
                className="rounded-[3rem] border-8 "
              />
            </FadeInSectionRight>
          </div>
        </article>
      </div>
    </section>
  );
};
