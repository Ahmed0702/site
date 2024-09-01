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
    title: "VarGroup S.p.A.",
    position: "UX/UI Designer - UX Strategist",
    time: "2021 - 2024",
    location: "Bologna",
    description:
      "Develop design solutions based on user requirements, creating mockups, prototypes, and graphic designs in line with the brand. Collaborate with a multidisciplinary team to optimize user experience and resolve UX issues.",
    tech: [
      "Figma",
      "Sketch",
      "Adobe Illustrator",
      "Git",
      "GitHub",
      "Axure RP",
    ],
  },
  {
    title: "BrainyLabs S.r.L.",
    position: "Junior UX/UI Designer",
    time: "2020 - 2021",
    location: "Hybrid",
    description:
      "Support in designing user interfaces for web and apps, using wireframing tools and design software to improve the user experience based on feedback and project requirements.",
    tech: ["Figma", "Affinity Designer", "Adobe Illustrator", "Canva", "Laravel", "MongoDB"],
  },
  {
    title: "Upwork",
    position: "Full-Stack Developer",
    time: "2019 - 2020",
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
