import { FadeInSectionLeft } from "@/components/Shared/FadeInSectionLeft";
import { FadeInSectionRight } from "@/components/Shared/FadeInSectionRight";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { contactData } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

export const Contact = () => {
  return (
    <section className="contact">
      <SectionHeading className="!mb-4">My Contact</SectionHeading>

      <div className="contact_layer">
        <article className="contact_container">
          <FadeInSectionLeft>
            <p className="contact_label ">
              <Icon icon="logos:whatsapp-icon" width="25" height="25" />
              <span className="ml-5">Whatsapp: {contactData.phone}</span>
            </p>
            <p className="contact_label ">
              <Icon
                icon="ic:round-email"
                className="flex-shrink-0"
                width="25"
                height="25"
              />
              <span className="ml-5">Email: {contactData.email}</span>
            </p>
            <p className="contact_label ">
              <Icon
                icon="mdi:address-marker"
                className="flex-shrink-0"
                width="25"
                height="25"
              />
              <span className="ml-5">Address: {contactData.address}</span>
            </p>
          </FadeInSectionLeft>

          <FadeInSectionRight>
            <p className="contact_label ">
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
            </p>
            <p className="contact_label ">
              <Icon icon="devicon:facebook" width="25" height="25" />
              <span className="ml-5">
                Facebook:{" "}
                <Link
                  className="contact_label_link"
                  href={`https://www.facebook.com/sabda.avicenna.7`}
                >
                  {contactData.facebook}
                </Link>
              </span>
            </p>
            <p className="contact_label ">
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
            </p>
          </FadeInSectionRight>
        </article>
      </div>
    </section>
  );
};
