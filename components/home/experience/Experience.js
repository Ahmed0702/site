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
    title: "VarGroup",
    position: "IT Support Specialist",
    time: "2021 - 2023",
    location: "Hybrid",
    description:
      "IT systems management and maintenance, including first and second level technical support, LAN/WAN administration, network configuration and security, software patch implementation, and hardware and software installation  ",
    tech: [
      "LAN/WLAN Conf.",
      "Firewall access policy",
      "IT Security",
      "Scripting",
      "DHCP",
      "DNS",
      "Cisco",
      "Nagios",
      "VPN",
    ],
  },
];
