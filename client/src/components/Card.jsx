import styles from "./Card.module.css";
import ScoreCirle from "./ScoreCircle";
import { Link } from "react-router-dom";
import likeIcon from "../images/yellow-like.svg";
import dislikeicon from "../images/dislikeIcon.svg";
import neutralFaceIcon from "../images/neutralFaceIcon.svg";

function Card({ props }) {
  function selectIcon(score) {
    if (score > 67) return likeIcon;
    if (score > 33) return neutralFaceIcon;
    return dislikeicon;
  }
  return (
    <Link to={`/recipe/${props.id}`} className={styles.logoContainer}>
      <article className={styles.Card}>
        <img src={props.image} alt={props.name} className={styles.img} />
        <ScoreCirle
          score={props.healthScore}
          icon={selectIcon(props.healthScore)}
          iconsStyle={styles.icons}
        ></ScoreCirle>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{props.name}</h1>
        </div>
        {/* <p>Diets: {props.dietTypes}</p> */}
      </article>
    </Link>
  );
}

export default Card;
