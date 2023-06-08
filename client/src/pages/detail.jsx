import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/actions";
import Loading from "../components/Loading";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const [recdetail, setrecdetail] = useState("");

  useEffect(() => {
    const getRecipe = async () => {
      dispatch(setLoading(true));
      const recipe = (await axios.get(`http://localhost:3001/recipes/${id}`))
        .data;
      setrecdetail(recipe);
      dispatch(setLoading(false));
    };
    getRecipe();
  }, []);

  console.log(recdetail);
  return (
    <div className="Form">
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <h1>{recdetail.name}</h1>
          <img src={recdetail.image} alt={recdetail.name} />
          <h2>Heath Score: {recdetail.healthScore}</h2>

          <div className="ddsh">
            <h3 className="texts">Summary: </h3>
            <p className="summary">
              {recdetail.summary?.replace(/<[^>]*>/g, "")}
            </p>
          </div>

          <div className="ddsh">
            <h3 className="texts">Steps: </h3>
            <ul className="steps">
              {Array.isArray(recdetail.steps) ? (
                recdetail.steps.map((e) => {
                  return <li key={e.number}>{e.step}</li>;
                })
              ) : (
                <li>{recdetail.stepByStep}</li>
              )}
            </ul>
          </div>

          <div>
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
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
