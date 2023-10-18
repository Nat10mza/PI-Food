import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./CardContainer.module.css";

function CardContainer({ recipes }) {
  // console.log(recipes.recipes);
  const page = useSelector((state) => state.page);

  const quantityRecipesPage = page * 10;
  const firstRecipePage = quantityRecipesPage - 10;

  if (recipes.message) return null;
  recipes = recipes.slice(firstRecipePage, quantityRecipesPage);

  return (
    <div className={styles.CardContainer}>
      {recipes.map((recipe) => {
        // console.log(recipe);
        return (
          <div key={recipe.id}>
            <Card props={recipe}></Card>
          </div>
        );
      })}
    </div>
  );
}

export default CardContainer;
