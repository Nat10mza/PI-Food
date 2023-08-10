import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRecipes, setLoading, setPage } from "../redux/actions";
import CardContainer from "../components/CardContainer";
import Filters from "../components/Filters";
import Paged from "../components/Paged";
import Loading from "../components/Loading";
import styles from "./home.module.css";

function Home() {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes);
  const loading = useSelector((state) => state.loading);

  const paged = function (pageNumber) {
    dispatch(setPage(pageNumber));
  };

  useEffect(() => {
    (async () => {
      // if (recipes.length === 0) {
      dispatch(setLoading(true));
      await dispatch(getRecipes());
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
          <Filters />
          <CardContainer recipes={recipes}></CardContainer>
          <Paged recipesPage={9} allRecipes={recipes.length} paged={paged} />
        </>
      )}
    </div>
  );
}

export default Home;
