import styles from "./Card.module.css";
import ScoreCirle from "./ScoreCircle";

function Card({ props }) {
  return (
    <article className={styles.Card}>
      <img src={props.image} alt={props.name} className={styles.img} />
      <h1>
        <a href={`/recipe/${props.id}`}>{props.name}</a>
      </h1>
      <ScoreCirle score={props.healthScore}></ScoreCirle>
      {/* <p>Diets: {props.dietTypes}</p> */}
    </article>

    // <div className={styles.Card}>
    //   <div className={wrapper}>
    //     <div className={styles.date}>
    //       <span className={styles.day}>12</span>
    //       <span className={styles.month}>Aug</span>
    //       <span className={styles.year}>2016</span>
    //     </div>
    //     <div className={styles.data}>
    //       <div className={styles.content}>
    //         <span className={styles.author}>Jane Doe</span>
    //         <h1 className={styles.title}>
    //           <a href="#">Boxing icon has the will for a couple more fights</a>
    //         </h1>
    //         <p className={styles.text}>
    //           The highly anticipated world championship fight will take place at
    //           10am and is the second major boxing blockbuster in the nation
    //           after 43 years.
    //         </p>
    //         <label for="show-menu" className={styles.menuButton}>
    //           <span></span>
    //         </label>
    //       </div>
    //       <input type="checkbox" id="show-menu" />
    //     </div>
    //   </div>
    //   </div>
  );
}

export default Card;
