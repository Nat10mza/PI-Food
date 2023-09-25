import { Link } from "react-router-dom";
import styles from "./landing.module.css";
import logo from "../images/logo.png";

function Landing() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1 className={styles.title}>Bienvenido a Mi Food app</h1>
        <h3 className={styles.description}>
          {" "}
          Aqui podras encontrar, filtrar y ordenar tus recetas segun tus gustos!
        </h3>
        <div>
          <Link to="/home">
            <button className={styles.button}>Let's Go!</button>
          </Link>
        </div>
      </div>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={logo} alt="" />
      </div>
    </div>
  );
}

export default Landing;
