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
    title: "Var Group",
    position: "Technical Analyst",
    time: "2022 - Present",
    location: "Bologna",
    description:
      "Management and resolution of software problems for companies throughout Italy",
    tech: [
      "Angular",
      "Python",
      "GCP",
      "Git",
      "GitHub",
      "Java",
    ],
  },
  {
    title: "BrainyLabs S.r.L.",
    position: "Full-Stack Developer",
    time: "2021 - 2022",
    location: "Hybrid",
    description:
      "During my experience as a full-stack developer, I played a key role in the analysis, design and implementation of complete software solutions. I've worked on projects ranging from implementing server-side functionality to creating engaging user interfaces.",
    tech: ["React", "Node.js", "PHP", "GraphQL", "Laravel", "MongoDB"],
  },
  {
    title: "Upwork",
    position: "UX/UI Designer, Front-End Developer",
    time: "2018 - 2021",
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
