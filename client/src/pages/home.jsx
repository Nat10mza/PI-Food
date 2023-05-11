import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipes } from "../redux/actions";
import CardContainer from "../components/CardContainer";

function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <div className="Home">
      <CardContainer recipes={recipes}></CardContainer>
    </div>
  );
}

export default Home;
