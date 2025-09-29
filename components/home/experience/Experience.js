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
    title: "Trentino Digitale S.p.A.",
    position: "Software Developer - UX/UI Designer",
    time: "2025 - Now",
    location: "Hybrid",
    description:
      "Contributed to the development and maintenance of digital applications and information systems for the Autonomous Province of Trento, supporting the modernization and digital transformation of public services. Focused on designing and implementing modern software architectures, integrating national and regional platforms, and optimizing administrative and operational processes to improve efficiency, interoperability, and user experience within the public sector.",
    tech: [
      "Figma",
      "AngularJS",
      "GitLab CI/CD",
      "React",
      "Kubernetes",
    ],
  },
   
  {
    title: "VarGroup",
    position: "SOC Analyst",
    time: "2022 - 2024",
    location: "Hybrid",
    description:
      "Performed continuous monitoring of networks and systems to detect cybersecurity threats, analyzed security alerts using SIEM platforms, and managed incidents following standard operating procedures. Collaborated closely with IT and cybersecurity teams to contain and mitigate attacks, strengthen security processes, and protect organizational infrastructure. Focused on proactive threat detection, basic forensic analysis, and thorough incident documentation to optimize response and prevention strategies.",
    tech: [
      "SIEM",
      "Networking",
      "IT Security",
      "Firewall and Network Security",
      "PowerShell",
      "Cisco",
    ],
  },
];
