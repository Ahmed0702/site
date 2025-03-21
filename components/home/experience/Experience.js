import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "AStudio",
    position: "UX/UI Designer - UX Strategist",
    time: "2020 - 2024",
    location: "Remote",
    description:
      "Designing intuitive user experiences and user-centered design strategies. Creation of functional and aesthetically appealing interfaces, optimizing usability and engagement. Research, prototyping and testing to guarantee innovative and strategic digital solutions.",
    tech: [
      "Figma",
      "Sketch",
      "Adobe Illustrator",
      "InVision",
      "Balsamiq",
    ],
  },
   
  {
    title: "Upwork",
    position: "Front End Developer - UX/UI Designer",
    time: "2018 - 2020",
    location: "Hybrid",
    description:
      "Complete web and mobile application development covering design development and the front-end and back-end part for individuals and companies remotely.",
    tech: [
      "React",
      "Vue",
      "Angular",
      "Figma",
      "Sketch",
      "Adobe Illustrator",
    ],
  },
];
