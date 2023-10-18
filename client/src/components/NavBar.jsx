import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";

function NavBar() {
  const animationLanding = useSelector((state) => state.animationOnLanding);

  function checkAnimationState() {
    if (animationLanding === true) return styles.NavBarAnimation;
    return styles.NavBar;
  }
  return (
    <div className={checkAnimationState()}>
      <section className={styles.ContainerText}>
        <ul>
          <li className={styles.main}>
            <Link to="/" className={styles.logoContainer}>
              <img src={logo} alt="" className={styles.logo} />
            </Link>
            <Link to="/">
              <div className={styles.mainText}>Foodify</div>
            </Link>
          </li>
          <section className={styles.items}>
            <li>
              <Link to="/home">Check our recipes!</Link>
            </li>
            <li>
              <Link to="/form">Create a Recipe!</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
          </section>
        </ul>
      </section>
      <section className={styles.ContainerSearchBar}>
        <SearchBar />
      </section>
    </div>
  );
}

export default NavBar;
