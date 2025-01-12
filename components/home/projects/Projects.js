import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Freelance projects with Upwork" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Ajim Capital",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.ajimcapital.com/",
    tech: ["JS", "Vue", "Laravel", "MongoDB", "Phyton"],
    description:
      "A Venture Capital investment company",
    modalContent: (
      <>
        <p>
        The site highlights Ajim Capital commitment to addressing the challenges and seizing 
        opportunities in investing in Africa, believed to be the fastest growing market in the world.
        </p>
        <p>
        Ajim Capital offers financing to African startups from pre-seed to seed stage, while also providing hands-on strategic support. 
        The site promotes access to a global network of investors and experts.
        </p>
        <p>
         
        </p>
        <p>
        Through key statistics and data, the site highlights the key factors that make Africa an attractive market for investment, 
        including sustained economic growth, an expanding young population and ongoing technology adoption.
        </p>
        <p>
          
        </p>
      </>
    ),
  },
  {
    title: "Fullgap",
    imgSrc: "project-imgs/fullgap.png",
    code: "https://www.github.com",
    projectLink: "https://www.fullgap.co/",
    tech: ["Node", "Express", "React", "Kafka", "MongoDB"],
    description:
      "Onboard and chat with your clients, manage and automate your process",
    modalContent: (
      <>
        <p>
        Fullgap offers several opportunities. Effective management of deadlines and deliverables.
        Regular updates and reminders to ensure customer expectations are met.
        Tools to manage delivery times professionally.
        </p>
        <p>
        <b>Payment Scheduling & Invoicing:</b> <br></br>

        Creation of customized payment plans.<br></br>
        Smart billing system that encourages customers to make payments on time.<br></br>
        Tools to simplify the invoicing process and improve financial management.
        </p>
        <p>
          The team in total consists of 5 developers. This is a passion project
          for all of us.
        </p>
        
        <p>
        <b>Contracts & Agreements:</b> <br></br>

        Using editable contract templates to speed up the agreement signing process.<br></br>
        Rapid legalization of commercial transactions through contractual documents.<br></br>
        </p>
      </>
    ),
  },
  {
    title: "Raenest",
    imgSrc: "project-imgs/raenest.png",
    code: "https://www.github.com",
    projectLink: "https://www.raenest.com/",
    tech: ["NextJS", "Java", "Spring", "AWS Aurora"],
    description:
      "Modern financial tool",
    modalContent: (
      <>
        <p>
        Access a comprehensive suite of financial services, including multi-currency accounts, corporate cards, invoicing, and global contractor payments, all integrated into one platform. The easiest way for startups to manage their financial needs efficiently.
        </p>
        <p>
        Experience borderless invoicing and payments with Raenest. Create professional invoices effortlessly, choose flexible payment options, and pay contractors worldwide in minutes. Travel globally with the Raenest card, offering control, convenience, and no hidden fees.
        </p>
        <p>
        Backed by testimonials from CEOs and leaders in various industries, Raenest has proven to be a super useful platform for seamless staff and vendor payments, facilitating international contractor transactions, and ensuring timely payments for remote teams and partners worldwide..
        </p>
        
      </>
    ),
  },
  {
    title: "Seerbit",
    imgSrc: "project-imgs/seerbit.png",
    code: "https://www.github.com",
    projectLink: "https://www.seerbit.com/",
    tech: ["Python", "Laravel", "JavaScript", "MySQL"],
    description:
      "A payment gateway solutions company 🌈",
    modalContent: (
      <>
        <p>SeerBit serves as a cutting-edge payment gateway, empowering businesses to effortlessly collect payments from customers throughout Africa. Trusted by both global and local enterprises, SeerBit simplifies the payment process with an array of products, providing a unified solution for online and in-person transactions.</p>
        <p>
        Seamlessly process online and in-person payments across Africa with a single integration. SeerBit suite of payment products allows businesses to accept various payment methods, including cards, USSD, bank transfers, and more. The platform enhances in-store payment experiences through a Point-Of-Sale (POS) setup and unifies online and in-store transactions on a single dashboard.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
        Whether youre a startup or a global company, SeerBit equips businesses with tools for rapid growth. The platform caters to SMEs, large organizations, and offers white-label solutions. With robust APIs supporting virtual accounts, payment links, subscriptions, and more, SeerBit ensures businesses can scale with a single integration. It operates across more than 12 African countries, adhering to global compliance standards for reliability and security.
        </p>
        
      </>
    ),
  },
  {
    title: "Social School",
    imgSrc: "project-imgs/social.png",
    code: "https://www.github.com",
    projectLink: "https://www.seerbit.com/",
    tech: ["Figma"],
    description:
      "An innovative social media app for students 🌈",
    modalContent: (
      <>
        <p>Social School is an innovative social media designed for Italian school students, it includes communication channels that allow access to various data related to the school environment</p>
        <p>
          
        </p>
        <p>It allows you to carry out search operations, messaging and opportunities to be able to show yourself and distinguish yourself at a national school level</p>
        
      </>
    ),
  },
      {
    title: "ImpakterPro",
    imgSrc: "project-imgs/Impakter.png",
    code: "https://www.github.com",
        projectLink: "https://www.seerbit.com/",
    tech: ["Figma"],
    description:
      "Innovative digital platform designed to promote and monitor corporate sustainability practices and achieve ESG objectives.",
    modalContent: (
      <>
        <p>Mockup requested by an important company for the creation of an innovative digital platform that allows companies to promote, measure and support sustainable practices</p>
        <p>
          
        </p>
        <p>The platform is a versatile, intuitive and scalable tool to facilitate the monitoring of sustainability initiatives and the achievement of ESG objectives</p>
        
      </>
    ),
  },
];
