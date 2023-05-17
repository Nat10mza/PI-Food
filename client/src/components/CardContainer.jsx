import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./CardContainer.module.css";

function CardContainer({ recipes }) {
  // console.log(recipes.recipes);
  const page = useSelector((state) => state.page);

  const quantityRecipesPage = page * 9;
  const firstRecipePage = quantityRecipesPage - 9;
  recipes = recipes.slice(firstRecipePage, quantityRecipesPage);

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
