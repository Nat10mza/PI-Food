import styles from "./about.module.css";
import profileImage from "../images/nico-modified.png";
import reactReduxImg from "../images/react-redux.png";
import expressImg from "../images/express.png";
import sequelizeImg from "../images/sequelizejs.png";
import nodeImg from "../images/nodejs.png";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.leftContainer}>
        <img src={profileImage} alt="" className={styles.img} />
      </section>
      <section className={styles.rigthContainer}>
        <div className={styles.text}>
          <h3 className={styles.h3}>
            Hello! I'm Nicolás Tramontina, an enthusiastic Full Stack developer
            passionate about technology. My goal is to create innovative and
            functional solutions for technological challenges. With experience
            in a variety of projects, I'm always eager to learn and embrace the
            latest trends. Connect with me on my social media profiles to
            collaborate or chat about technology!
          </h3>
        </div>
        <h4 className={styles.h2}>This site was built with:</h4>
        <div className={styles.logosContainer}>
          <img src={reactReduxImg} alt="" className={styles.logo1} />
          <img src={nodeImg} alt="" className={styles.logo2} />
          <img src={expressImg} alt="" className={styles.logo3} />
          <img src={sequelizeImg} alt="" className={styles.logo4} />
        </div>
      </section>
    </div>
  );
}

export default About;
