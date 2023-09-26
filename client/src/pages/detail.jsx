import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailRecipe } from "../redux/actions";
import Loading from "../components/Loading";
import styles from "./detail.module.css";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const recdetail = useSelector((state) => state.detailDiet);

  useEffect(() => {
    dispatch(getDetailRecipe(id));
  }, []);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div className={styles.form}>
          <h1 className={styles.title}>{recdetail.name}</h1>
          <div className={styles.mainInfo}>
            <section className={styles.leftContainer}>
              <img
                src={recdetail.image}
                alt={recdetail.name}
                className={styles.imgForm}
              />
            </section>
            <section className={styles.rightContainer}>
              <h2>Health Score: {recdetail.healthScore}</h2>

              {recdetail.diets ? (
                <h3>
                  Diet:{" "}
                  {recdetail.diets.map((e) => {
                    return e.name;
                  })}
                </h3>
              ) : (
                <h3>Diet: {recdetail.dietTypes}</h3>
              )}
              <div className={styles.summaryContainer}>
                <h3 className="texts">Summary: </h3>
                <p className={styles.summary}>
                  {recdetail.summary?.replace(/<[^>]*>/g, "")}
                </p>
              </div>
            </section>
          </div>

          <div className={styles.stepsContainer}>
            <h2 className="texts">Steps: </h2>
            <ul className="steps">
              {Array.isArray(recdetail.steps) ? (
                recdetail.steps.map((e) => {
                  return (
                    <li key={e.number} className={styles.li}>
                      <p className={styles.steps}>Step {e.number}</p>
                      <h3 className={styles.text}>. {e.step}</h3>
                    </li>
                  );
                })
              ) : (
                <li>{recdetail.stepByStep}</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
