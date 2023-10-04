import styles from "./Card.module.css";
import ScoreCirle from "./ScoreCircle";
import { Link } from "react-router-dom";

function Card({ props }) {
  return (
    <Link to={`/recipe/${props.id}`} className={styles.logoContainer}>
      <article className={styles.Card}>
        <img src={props.image} alt={props.name} className={styles.img} />
        <ScoreCirle score={props.healthScore}></ScoreCirle>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{props.name}</h1>
        </div>
        {/* <p>Diets: {props.dietTypes}</p> */}
      </article>
    </Link>
  );
}

export default Card;
