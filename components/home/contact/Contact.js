import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.instagram.com/a_niouerr"
              target="_blank"
              rel="nofollow"
            >
              Instagram
            </Link>{" "}
            or{" "}
            <Link href="https://www.linkedin.com/in/ahmed-niouer-85b8b3174/" target="_blank" rel="nofollow">
              Linkedin
            </Link>{" "}
            or write to me directly by clicking on the email below!
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:ahmedniouer5@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>ahmedniouer5@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
