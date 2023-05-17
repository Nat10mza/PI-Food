import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRecipes, setPage } from "../redux/actions";
import CardContainer from "../components/CardContainer";
import Filters from "../components/Filters";
import Paged from "../components/Paged";

function Home() {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes);

  const paged = function (pageNumber) {
    dispatch(setPage(pageNumber));
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className="Home">
      <Filters />
      <CardContainer recipes={recipes}></CardContainer>
      <Paged recipesPage={9} allRecipes={recipes.length} paged={paged} />
    </div>
  );
}

export default Home;
