import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealItem from "../components/mealItem";
import { memo } from "react";
import { useSelector } from "react-redux";

function Category() {
  let params = useParams();
  const { likes } = useSelector((state) => state.Likes);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
        )
        .then((result) => {
          console.log(result.data.meals);
          setMeals(result.data.meals);
        })
        .catch((err) => {
          setMeals([]);
        });
    })();
  }, [params.category]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="screen-root-div"
    >
      <h1 className="heading">Category</h1>

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

export default memo(Category);
