import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipes } from "../redux/actions";
import CardContainer from "../components/CardContainer";
import Filters from "../components/Filters";

function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <div className="Home">
      <Filters />
      <CardContainer recipes={recipes}></CardContainer>
    </div>
  );
}

export default Home;
