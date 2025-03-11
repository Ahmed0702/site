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
    time: "2023 - 2024",
    location: "Remote",
    description:
      "Develop design solutions based on user requirements, creating mockups, prototypes, and graphic designs in line with the brand. Collaborate with a multidisciplinary team to optimize user experience and resolve UX issues.",
    tech: [
      "Figma",
      "Sketch",
      "Adobe Illustrator",
      "GitHub",
      "Axure RP",
    ],
  },
   
  {
    title: "Upwork",
    position: "Front - End Developer",
    time: "2019 - 2023",
    location: "Remote",
    description:
      "Freelance activity involved in the creation of web applications for small and medium-sized businesses, showing my skills in the field of web design and development",
    tech: [
      "Vue",
      "Python",
      "JavaScript",
      "React",
      "Typescript",
      "Angular",
      "Laravel",
      "Figma",
      "Canva",
      "Framer",
    ],
  },
];
