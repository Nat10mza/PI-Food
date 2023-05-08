import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";

function Card(propś) {
  return (
    <div className={styles}>
      <h1>{propś.name}</h1>
      <p></p>
      <p>{propś.genres}</p>
    </div>
  );
}

export default Card;
