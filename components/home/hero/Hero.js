import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Ahmed<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span> UX/UI Designer and Front-End Developer  </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
Recent graduate with a strong background in front-end development and UX/UI design. Passionate about technology and problem-solving, I leverage my technical expertise to create intuitive, user-friendly digital experiences that seamlessly blend functionality and aesthetics.          <br /> 
          Let&apos;s connect!😊🎨
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
