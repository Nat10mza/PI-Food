import styles from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { resetRecipes, searchRecipes, setPage } from "../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const recipes = useSelector((state) => state.allrecipes);

  function handleInput(evt) {
    evt.preventDefault();
    setName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (name) {
      dispatch(searchRecipes(name, recipes));
      // setName("");
    }
    if (name === "") {
      dispatch(resetRecipes(recipes));
    }
    dispatch(setPage(1));
  }

  return (
    <div>
      <div className={styles.SearchBar}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search Recipes..."
          onChange={(evt) => handleInput(evt)}
        ></input>
        <button
          className={styles.button}
          type="submit"
          onClick={(evt) => handleSubmit(evt)}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
