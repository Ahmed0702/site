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
    title: "UpWork - AStudio",
    position: "Front End developer - UX/UI Designer",
    time: "2021 - 2024",
    location: "Remote",
    description:
      "Frontend development of web and mobile applications using JavaScript frameworks, ensuring optimal performance, cross-platform compatibility, and enhanced scalability. Designed intuitive, responsive interfaces with Figma, Adobe XD, and Sketch, improving user experience and boosting conversion rates by 25% through optimized design.",
    tech: [
      "React",
      "Angular",
      "Vue",
      "Next",
      "Figma",
      "Sketch",
      "Adobe Illustrator",
    ],
  },
   
  {
    title: "VarGroup",
    position: "IT Support Specialist",
    time: "2020 - 2021",
    location: "Hybrid",
    description:
      "IT systems management and maintenance, including first and second level technical support, LAN/WAN administration, network configuration and security, software patch implementation, and hardware and software installation.",
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
