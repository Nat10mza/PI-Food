import { useDispatch, useSelector } from "react-redux";
import { filterDiets, sortAlphabetical, sortScore } from "../redux/actions";

function Filters() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.allrecipes);

  function handleAlphabeticalSort(e) {
    e.preventDefault();
    dispatch(sortAlphabetical(e.target.value));
  }

  function handleDietFilterChange(e) {
    e.preventDefault();
    dispatch(filterDiets(e.target.value));
  }

  function handleScoreSort(e) {
    e.preventDefault();
    dispatch(sortScore(e.target.value));
  }

  return (
    <div className="Container">
      <label className="filters">Diet Types:</label>
      <select
        className="select"
        name="diets"
        onChange={(e) => handleDietFilterChange(e)}
      >
        <option disabled selected>
          Select...
        </option>
        <option value="gluten free">Gluten Free</option>
        <option value="dairy free">Dairy Free</option>
        <option value="lacto ovo vegetarian">Lacto-Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="paleolithic">Paleo</option>
        <option value="primal">Primal</option>
        <option value="whole 30">Whole30</option>
        <option value="pescatarian">Pescatarian</option>
      </select>
      <label className="filters">Sort:</label>
      <select
        className="select"
        name="alphabetical"
        onChange={(e) => handleAlphabeticalSort(e)}
      >
        <option disabled selected>
          Alphabetical
        </option>
        <option value="atoz">A to Z</option>
        <option value="ztoa">Z to A</option>
      </select>
      <select
        className="select"
        name="numerical"
        onChange={(e) => handleScoreSort(e)}
      >
        <option disabled selected>
          Score
        </option>
        <option value="asc">From Min to Max</option>
        <option value="desc">From Max to Min</option>
      </select>
    </div>
  );
}

export default Filters;
