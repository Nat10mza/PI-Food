import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/form">Create a Recipe!</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <SearchBar />
      </ul>
    </div>
  );
}

export default NavBar;
