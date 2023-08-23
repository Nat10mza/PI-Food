import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipes, setPage } from "../redux/actions";
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
  const error = useSelector((state) => state.error);

  const paged = function (pageNumber) {
    dispatch(setPage(pageNumber));
  };

  function className() {
    if (loading === true) return "";
    return styles.home;
  }

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className={className()}>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorCard errorMessage={error} />
      ) : recipes ? (
        <>
          <Filters />
          <section>
            <CardContainer recipes={recipes}></CardContainer>
            <Paged recipesPage={9} allRecipes={recipes.length} paged={paged} />
          </section>
        </>
      ) : null}
    </div>
  );

  // return (
  //   <div className={classNameContainer()}>
  //     {loading === true ? (
  //       <Loading />
  //     ) : (
  //       <>
  //         {error ? (
  //           <ErrorCard />
  //         ) : (
  //           <>
  //             <Filters />
  //             <section>
  //               <CardContainer recipes={recipes}></CardContainer>
  //               <Paged
  //                 recipesPage={9}
  //                 allRecipes={recipes.length}
  //                 paged={paged}
  //               />
  //             </section>
  //           </>
  //         )}
  //       </>
  //     )}
  //   </div>
  // );
}

export default Home;
