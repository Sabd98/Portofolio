import { FadeInSectionLeft } from "@/components/Helper/FadeInSectionLeft";
import { FadeInSectionRight } from "@/components/Helper/FadeInSectionRight";
import { SectionHeading } from "@/components/Helper/Helper";
import { contactData } from "@/Data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

export const Contact = () => {
  return (
    <div className=" contact">
      <SectionHeading>My Contact</SectionHeading>

      <div className="contact_layer">
        <div className="contact_container">
          <FadeInSectionLeft>
            <h3 className="contact_label ">
              <Icon icon="logos:whatsapp-icon" width="25" height="25" />
              <span className="ml-5">Whatsapp: {contactData.phone}</span>
            </h3>
            <h3 className="contact_label ">
              <Icon
                icon="ic:round-email"
                className="flex-shrink-0"
                width="25"
                height="25"
              />
              <span className="ml-5">Email: {contactData.email}</span>
            </h3>
            <h3 className="contact_label ">
              <Icon
                icon="mdi:address-marker"
                className="flex-shrink-0"
                width="25"
                height="25"
              />
              <span className="ml-5">Address: {contactData.address}</span>
            </h3>
          </FadeInSectionLeft>

          <FadeInSectionRight>
            <h3 className="contact_label ">
              <Icon icon="skill-icons:instagram" width="25" height="25" />
              <span className="ml-5">
                Instagram:{" "}
                <Link
                  className="contact_label_link"
                  href={`https://www.instagram.com/sabdavii`}
                >
                  {contactData.instagram}
                </Link>
              </span>
            </h3>
            <h3 className="contact_label ">
              <Icon icon="devicon:facebook" width="25" height="25" />
              <span className="ml-5">
                Facebook:{" "}
                <Link
                  className="contact_label_link"
                  href={`hhttps://www.facebook.com/sabda.avicenna.7`}
                >
                  {contactData.facebook}
                </Link>
              </span>
            </h3>
            <h3 className="contact_label ">
              <Icon icon="devicon:github" width="25" height="25" />
              <span className="ml-5">
                Github:{" "}
                <Link
                  className="contact_label_link"
                  href={`https://github.com/Sabd98`}
                >
                  {contactData.linkedin}
                </Link>
              </span>
            </h3>
          </FadeInSectionRight>
        </div>
      </div>
    </div>
  );
};
