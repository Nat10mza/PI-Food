import { Link } from "react-router-dom";
import Card from "./Card";
import styles from "./SearchBar.module.css";

function CardContainer({ recipes }) {
  // console.log(recipes.recipes);

  return (
    <div className={styles}>
      {recipes.map((recipe) => {
        // console.log(recipe);
        return (
          <>
            <Card props={recipe}></Card>
          </>
        );
      })}
      hola
    </div>
  );
}

export default CardContainer;
