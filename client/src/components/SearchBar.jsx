import styles from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { resetRecipes, searchRecipes, setPage } from "../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const recipes = useSelector((state) => state.allrecipes);

  function handleInput(evt) {
    evt.preventDefault();
    setName(evt.target.value);
  }

  function handleSubmit(evt) {
    if (name && evt.key === "Enter") {
      evt.preventDefault();
      dispatch(searchRecipes(name, recipes));
      history.push("/home");
    }
    if (name === "") {
      // evt.preventDefault();
      dispatch(resetRecipes(recipes));
      history.push("/home");
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
          onKeyDown={(evt) => handleSubmit(evt)}
        ></input>
        <button
          className={styles.button}
          type="submit"
          onClick={(evt) => handleSubmit(evt)}
        >
          buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
