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
              Hey there! I&apos;m Ahmed, just in case you haven&apos;t  figured that out yet. 
              I&apos;m a passionate Web Developer and IT Specialist eager to kickstart my career in Zurich, SwitzerlanD 🇨🇭. 
              My expertise lies in frontend development, with a strong foundation in IT solutions and a deep love for modern technologies. 
              I thrive on crafting seamless digital experiences that blend innovation with aesthetics. 
            </p>
          </Reveal>
          
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, you&apos;ll find me painting, making music, or kicking a football around—my favorite ways to stay creative and active! 
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
