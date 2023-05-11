import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [recdetail, setrecdetail] = useState("");

  useEffect(() => {
    const getRecipe = async () => {
      const recipe = (await axios.get(`http://localhost:3001/recipes/${id}`))
        .data;
      await setrecdetail(recipe);
    };
    getRecipe();
  }, []);

  console.log(recdetail);
  return (
    <div className="Form">
      <h1>{recdetail.name}</h1>
      <img src={recdetail.image} alt={recdetail.name} />
      <h2>Heath Score: {recdetail.healthScore}</h2>

      <p>{recdetail.summary}</p>
      <p>
        <h3>Steps:</h3>
      </p>
      <p>
        <h3>Diet: {recdetail.dietTypes}</h3>
      </p>
    </div>
  );
}

export default Detail;
