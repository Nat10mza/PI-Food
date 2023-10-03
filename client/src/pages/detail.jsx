import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailRecipe } from "../redux/actions";
import Loading from "../components/Loading";
import styles from "./detail.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailRecipe(id));
  }, []);

  const loading = useSelector((state) => state.loading);
  const recdetail = useSelector((state) => state.detailDiet);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div className={styles.form}>
          <div className={styles.mainInfo}>
            <section className={styles.leftContainer}>
              <img
                src={recdetail.image}
                alt={recdetail.name}
                className={styles.imgForm}
              />
              <Link to="/home">
                <button className={styles.button}>Check more recipes!</button>
              </Link>
            </section>
            <section className={styles.rightContainer}>
              <h1 className={styles.title}>{recdetail.name}</h1>
              <h2>Health Score: {recdetail.healthScore}</h2>

              {recdetail.diets ? (
                recdetail.diets.map((e) => {
                  return <h3>{e.name}</h3>;
                })
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
                  let arrayinStep = e.step.split(".");
                  arrayinStep.pop(); //split makes a empty string item in array

                  return (
                    <li key={e.number} className={styles.li}>
                      <p className={styles.steps}>Step {e.number}</p>
                      {arrayinStep.map((s) => {
                        return <h3 className={styles.text}>• {s}.</h3>;
                      })}
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
