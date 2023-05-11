import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";

function Card({ props }) {
  // props = props.props;
  return (
    <div className={styles}>
      <h1>{props.name}</h1>
      <p></p>
      <p>{props.genres}</p>
    </div>
  );
}

export default Card;
