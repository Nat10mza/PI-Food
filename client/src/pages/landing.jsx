import { Link } from "react-router-dom";
import styles from "./landing.module.css";
import FoodLanding from "../images/FoodLanding.png";

function Landing() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Bienvenido a Mi Food app</h1>
        <h3> Aqui podras encontrar, filtrar y ordenar</h3>
        <h3>tus recetas segun tus gustos!</h3>
        <div>
          <Link to="/home">
            <button className={styles.button}>Go!</button>
          </Link>
        </div>
      </div>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={FoodLanding} alt="" />
      </div>
    </div>
  );
}

export default Landing;
