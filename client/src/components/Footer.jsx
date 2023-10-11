import styles from "./Footer.module.css";
import personalLogo from "../images/Nico_logo_Transparent_white.png";
import github from "../images/GitHub-Mark-removebg-preview.png";
import linkedin from "../images/LinkedIn_icon.png";
import arg from "../images/arg.png";

function Footer() {
  return (
    <footer>
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
          <ul className={styles.conectList}>
            <li>
              <a href="https://github.com/Nat10mza">LET'S CONNECT!</a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nicolas-tramontina/"
                className={styles.aLink}
              >
                <img src={linkedin} alt="" className={styles.linkedinLogo} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Nat10mza"
                className={styles.aLink}
              >
                <img src={github} alt="" className={styles.githubLogo} />
              </a>
            </li>
            <li>
              <img src={personalLogo} alt="" className={styles.personalLogo} />
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
