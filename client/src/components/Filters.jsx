import { useDispatch, useSelector } from "react-redux";
import "./Filters.scss";
import filterIcon from "../images/filterIcon.png";
import sortIcon from "../images/sortIcon.png";
import {
  filterDiets,
  setPage,
  sortAlphabetical,
  sortScore,
} from "../redux/actions";

function Filters() {
  const dispatch = useDispatch();
  const dietTypes = useSelector((state) => state.dietTypes);

  function handleAlphabeticalSort(e) {
    e.preventDefault();
    dispatch(sortAlphabetical(e.target.value));
    dispatch(setPage(1));
  }

  function handleDietFilterChange(e) {
    e.preventDefault();
    dispatch(filterDiets(e.target.value));
    dispatch(setPage(1));
  }

  function handleScoreSort(e) {
    e.preventDefault();
    dispatch(sortScore(e.target.value));
    dispatch(setPage(1));
  }

  return (
    <div className="Container">
      {/* <label className="filters">Diet Types:</label> */}
      <div className="wrapper">
        <label className="filters">
          <img src={filterIcon} alt="" className="filterLogo" />
          Filter:
        </label>

        <select
          className="select"
          name="diets"
          onChange={(e) => handleDietFilterChange(e)}
        >
          <option disabled selected>
            Type of diet!
          </option>
          <option value="all diets">All diets</option>
          {dietTypes.map((diet) => {
            return <option value={diet.name}>{diet.name}</option>;
          })}
        </select>
        <label className="filters">
          <img src={sortIcon} alt="" className="sortIcon" />
          Sort:
        </label>
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
    </div>
  );
}

export default Filters;
