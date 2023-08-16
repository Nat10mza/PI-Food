import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  errorGetRecipes,
  getRecipes,
  setLoading,
  setPage,
} from "../redux/actions";
import CardContainer from "../components/CardContainer";
import Filters from "../components/Filters";
import Paged from "../components/Paged";
import Loading from "../components/Loading";
import styles from "./home.module.css";
import ErrorCard from "../components/ErrorCard";

function Home() {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes);
  const loading = useSelector((state) => state.loading);
  const errors = useSelector((state) => state.errors);

  const paged = function (pageNumber) {
    dispatch(setPage(pageNumber));
  };

  useEffect(() => {
    (async () => {
      // if (recipes.length === 0) {
      dispatch(setLoading(true));

      await dispatch(getRecipes());
      console.log(recipes.message); // check if this works when is succesfull
      // if (recipes.message === undefined) {
      //   dispatch(errorGetRecipes());
      // }

      dispatch(setLoading(false));
      // }
    })();
  }, [dispatch]);

  return (
    <div className={styles.home}>
      {loading === true ? (
        <Loading />
      ) : (
        <>
          {errors.length > 0 ? (
            <ErrorCard />
          ) : (
            <>
              <Filters />
              <section>
                <CardContainer recipes={recipes}></CardContainer>
                <Paged
                  recipesPage={9}
                  allRecipes={recipes.length}
                  paged={paged}
                />
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
