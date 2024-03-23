import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import MealItem from "../components/mealItem";

function Favorites() {
  const { likes } = useSelector((state) => state.Likes);
  const [meals, setMeal] = useState([]);

  useLayoutEffect(() => {
    (async () => {
      await likes.forEach((id) => {
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((result) => {
            console.log(result, "result");
            setMeal((meal) => [...meal, result.data.meals[0]]);
          })
          .catch((err) => {
            setMeal([]);
          });
      });
    })();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="screen-root-div"
    >
      <h1 className="heading">Favorites</h1>

      {meals.map((item) => {
        return (
          <div style={{ marginBottom: "25px" }}>
            <MealItem key={item.idMeal} {...item} likes={likes} />
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;
