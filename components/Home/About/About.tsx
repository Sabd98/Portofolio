import { FadeInSectionLeft } from "@/components/Helper/FadeInSectionLeft";
import { FadeInSectionRight } from "@/components/Helper/FadeInSectionRight";
import { SectionHeading } from "@/components/Helper/Helper";
import { aboutInfo } from "@/Data/data";

export const About = () => {
  return (
    <div className=" about">
      <SectionHeading>About Me</SectionHeading>

      <div className="about_layer">
        <div className="about_container gap-16">
          <FadeInSectionLeft>
            <h1>{aboutInfo.title}</h1>
            <p className="indent-10 text-justify">{aboutInfo.description}</p>
          </FadeInSectionLeft>
          <FadeInSectionRight>
            <h1 className="mb-6">Career&apos;s Roadmap</h1>
            {aboutInfo?.job_histories.map((job) => {
              return (
                <ul key={job.id} className="text-2xl mb-3 flex whitespace-break-spaces">
                  <span>{job.id}.   </span>
                  <div>
                    <li>Corp: {job.corpName}</li>
                    <li>Position: {job.job}</li>
                    <li className="text-justify">Description: {job.desc}</li>
                  </div>
                </ul>
              );
            })}
          </FadeInSectionRight>
        </div>
      </div>
    </div>
  );
};
