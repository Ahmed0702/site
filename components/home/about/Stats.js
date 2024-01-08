import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use for development</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Angular</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">Vue</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Phyton</span>
            <span className="chip">Django</span>
            <span className="chip">jQuery</span>
            <span className="chip">FastAPI</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for design</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Canva</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">Java</span>
            <span className="chip">Spring</span>
            <span className="chip">Figma</span>
            <span className="chip">WebFlow</span>
            <span className="chip">Adobe Illustrator</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Python</span>
            <span className="chip">Bootstrap</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
