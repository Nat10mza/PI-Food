import styles from "./Footer.module.css";
import personalLogo from "../images/Nico_logo_Transparent_white.png";
import github from "../images/GitHub-Mark-removebg-preview.png";
import linkedin from "../images/LinkedIn_icon.png";
import arg from "../images/arg.png";
import { useSelector } from "react-redux";

function Footer() {
  const animationLanding = useSelector((state) => state.animationOnLanding);

  function checkAnimationState() {
    if (animationLanding === true) return styles.FooterAnimation;
    return;
  }
  return (
    <footer className={checkAnimationState()}>
      <div className={styles.container}>
        <section className={styles.leftContainer}>
          <h5>
            Made with ❤ by
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Nat10mza"
              className={styles.namelink}
            >
              {" "}
              @nat10mza
            </a>
          </h5>
          <h5 className={styles.h5Center}>
            Greatings from Mendoza, Arg.
            <img src={arg} alt="🇦🇷" className={styles.argLogo} />
          </h5>
        </section>
        <section className={styles.rightContainer}>
          <div className={styles.conectList}>
            <img src={personalLogo} alt="" className={styles.personalLogo} />

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nicolas-tramontina/"
              className={styles.aLink}
            >
              <img src={linkedin} alt="" className={styles.linkedinLogo} />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Nat10mza"
              className={styles.aLink}
            >
              <img src={github} alt="" className={styles.githubLogo} />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
