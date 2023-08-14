import styles from "./Card.module.css";
import ScoreCirle from "./ScoreCircle";

function Card({ props }) {
  return (
    <article className={styles.Card}>
      <img src={props.image} alt={props.name} class={styles.img} />
      <h1>
        <a href={`/recipe/${props.id}`}>{props.name}</a>
      </h1>
      <ScoreCirle score={props.healthScore}></ScoreCirle>
      {/* <p>Diets: {props.dietTypes}</p> */}
    </article>

    // <div class={styles.Card}>
    //   <div class={wrapper}>
    //     <div class={styles.date}>
    //       <span class={styles.day}>12</span>
    //       <span class={styles.month}>Aug</span>
    //       <span class={styles.year}>2016</span>
    //     </div>
    //     <div class={styles.data}>
    //       <div class={styles.content}>
    //         <span class={styles.author}>Jane Doe</span>
    //         <h1 class={styles.title}>
    //           <a href="#">Boxing icon has the will for a couple more fights</a>
    //         </h1>
    //         <p class={styles.text}>
    //           The highly anticipated world championship fight will take place at
    //           10am and is the second major boxing blockbuster in the nation
    //           after 43 years.
    //         </p>
    //         <label for="show-menu" class={styles.menuButton}>
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
