import styles from "./Card.module.css";

function Card({ props }) {
  // props = props.props;

  return (
    <div className={styles.Card}>
      <img src={props.image} alt={props.name} />
      <h1>
        <a href={`/recipe/${props.id}`}>{props.name}</a>
      </h1>
      <p>Health Score: {props.healthScore}</p>
      <p>Diets: {props.dietTypes}</p>
    </div>
  );
}

export default Card;
