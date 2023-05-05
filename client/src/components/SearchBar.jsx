import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles}>
      <input type="text" placeholder="Search Recipes..."></input>
    </div>
  );
}

export default SearchBar;
