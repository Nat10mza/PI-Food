import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInput(evt) {
    evt.preventDefault();
    setName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (name) {
      setName("");
    }
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
