import { FadeInSectionLeft } from "@/components/Helper/FadeInSectionLeft";
import { FadeInSectionRight } from "@/components/Helper/FadeInSectionRight";
import { SectionHeading } from "@/components/Helper/Helper";
import { contactData } from "@/Data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

export const Contact = () => {
  return (
    <div className=" overflow-hidden bg-gray-100">
      <div className="flex flex-col justify-center w-4/5 mx-auto">
        <SectionHeading>My Contact</SectionHeading>
        <div className="grid grid-cols-1 my-5 text-xl place-content-around gap-x-48 lg:grid-cols-2 items-center ">
          <FadeInSectionLeft>
            <h3 className="mt-8 flex text-black font-bold ">
            <Icon icon="logos:whatsapp-icon" width="25" height="25" />
              <span className="ml-5">Phone/Whatsapp: {contactData.phone}</span>
            </h3>
            <h3 className="mt-8 flex text-black font-bold ">
            <Icon icon="ic:round-email" width="25" height="25" />
              <span className="ml-5">Email: {contactData.email}</span>
            </h3>
            <h3 className="mt-8 flex text-black font-bold ">
            <Icon  icon="mdi:address-marker" width="25" height="25" />
              <span className="ml-5">Address: {contactData.address}</span>
            </h3>
          </FadeInSectionLeft>

          <FadeInSectionRight>
            <h3 className="mt-8 flex text-black font-bold ">
              <Icon icon="skill-icons:instagram" width="25" height="25" />
              <span className="ml-5">
                Instagram:{" "}
                <Link
                  className="hover:underline underline-offset-2"
                  href={`https://www.instagram.com/sabdavii`}
                >
                  {contactData.instagram}
                </Link>
              </span>
            </h3>
            <h3 className="mt-8 flex text-black font-bold ">
            <Icon icon="devicon:facebook" width="25" height="25" />
              <span className="ml-5">
                Facebook:{" "}
                <Link
                  className="hover:underline underline-offset-2"
                  href={`hhttps://www.facebook.com/sabda.avicenna.7`}
                >
                  {contactData.facebook}
                </Link>
              </span>
            </h3>
            <h3 className="mt-8 flex text-black font-bold ">
            <Icon icon="hugeicons:job-share" width="25" height="25" />
              <span className="ml-5">
                Jobstreet:{" "}
                <Link
                  className="hover:underline underline-offset-2"
                  href={`https://id.jobstreet.com/id/profile/sabda-avicenna-5x1zvKcWcF`}
                >
                  {contactData.jobstreet}
                </Link>
              </span>
            </h3>
          </FadeInSectionRight>
        </div>
      </div>
    </div>
  );
};
