import { Link } from "react-router-dom";
import styles from "./landing.module.css";

function Landing() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Bienvenido a Mi Food app</h1>
        <h2>
          {" "}
          Aqui podras encontrar, filtrar y ordenar tus recetas segun tus gustos!
        </h2>
        <div>
          <Link to="/home">
            <button className={styles.button}>Go!</button>
          </Link>
        </div>
      </div>
      <div className={styles.img}>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Landing;
