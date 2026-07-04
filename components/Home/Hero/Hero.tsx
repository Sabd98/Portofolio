import { FadeInSectionLeft } from "@/components/Helper/FadeInSectionLeft";
import { FadeInSectionRight } from "@/components/Helper/FadeInSectionRight";
import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { BaseInfo } from "@/Data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";
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
            <h2 className="text-black dark:text-white">
              {BaseInfo.position}
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
