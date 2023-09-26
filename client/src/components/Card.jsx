import styles from "./Card.module.css";
import ScoreCirle from "./ScoreCircle";

function Card({ props }) {
  return (
    <article className={styles.Card}>
      <img src={props.image} alt={props.name} className={styles.img} />
      <h1 className={styles.title}>
        <a href={`/recipe/${props.id}`}>{props.name}</a>
      </h1>
      <ScoreCirle score={props.healthScore}></ScoreCirle>
      {/* <p>Diets: {props.dietTypes}</p> */}
    </article>
  );
}

export default Card;
