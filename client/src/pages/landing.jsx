import { Link } from "react-router-dom";
import styles from "./landing.module.css";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAnimationOnLanding } from "../redux/actions";

function Landing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAnimationOnLanding());
  }, [dispatch]);

  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Welcome to <h1 className={styles.gradientTitle}>Foodify</h1>
        </h1>
        <h3 className={styles.description}>
          {" "}
          Here you can find recipes according to your needs and tastes!
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
