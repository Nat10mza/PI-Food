import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";

function Card({ props }) {
  // props = props.props;
  return (
    <div className={styles}>
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p>Health Score: {props.healthScore}</p>
      <p>{props.dietTypes}</p>
    </div>
  );
}

export default Card;
