import { FadeInSectionLeft } from "@/components/Helper/FadeInSectionLeft";
import { FadeInSectionRight } from "@/components/Helper/FadeInSectionRight";
import { FadeInSectionY } from "@/components/Helper/FadeInSectionY";
import { BaseInfo } from "@/Data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="mt-16 py-8 overflow-hidden bg-gray-100">
      <div className=" w-4/5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-10 gap-12">
          <FadeInSectionLeft>
            <h1 className="text-2x1 text-black font-semibold">
              {BaseInfo.name}
            </h1>
            <h1 className="text-3x1 text-bg text-black font-bold">
              {BaseInfo.position}
            </h1>
            <p className="mt-6 text-lg text-black text-opacity-60">
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

          <div className="hidden mx-auto lg:block overscroll-x-none  overflow-y-hidden">
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
        </div>
      </div>
    </div>
  );
};
