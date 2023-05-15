import Card from "./Card";
import styles from "./CardContainer.module.css";

function CardContainer({ recipes }) {
  // console.log(recipes.recipes);

  return (
    <div className={styles.CardContainer}>
      {recipes.map((recipe) => {
        // console.log(recipe);
        return (
          <>
            <Card props={recipe}></Card>
          </>
        );
      })}
    </div>
  );
}

export default CardContainer;
