import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";
import { useState } from "react";

function NavBar() {
  const animationLanding = useSelector((state) => state.animationOnLanding);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  function checkAnimationState() {
    if (animationLanding === true) return styles.NavBarAnimation;
    return styles.NavBar;
  }
  return (
    <div className={checkAnimationState()}>
      <section className={styles.ContainerText}>
        <div className={styles.main}>
          <Link
            to="/"
            className={styles.logoContainer}
            onClick={() => setIsActive(false)}
          >
            <img src={logo} alt="" className={styles.logo} />
          </Link>
          <Link to="/" onClick={() => setIsActive(false)}>
            <div className={styles.mainText}>Foodify</div>
          </Link>
          <button
            className={
              isActive ? styles.activehamburguerMenu : styles.hamburguerMenu
            }
            onClick={handleClick}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>

        <ul className={isActive ? styles.activenavMenu : styles.navMenu}>
          <section className={styles.items}>
            <li onClick={() => setIsActive(false)}>
              <Link to="/home">Check our recipes!</Link>
            </li>
            <li onClick={() => setIsActive(false)}>
              <Link to="/form">Create a Recipe!</Link>
            </li>
            <li onClick={() => setIsActive(false)}>
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
