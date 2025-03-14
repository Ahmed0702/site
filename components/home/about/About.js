import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Ahmed, if you haven&apos;t already gathered that by
              now. I&apos;m a Web Developer and IT Specialist from Bologna,
              Italy. I specialize in the frontend development with a specialization in UX/UI Design with such a love for the modern technologies.
            </p>
          </Reveal>
          
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to paint, play music and football. 
              Sometimes I read books that can inspire me!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my
              love for technology. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            
            
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
