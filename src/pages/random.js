import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import axios from "axios";
import { useSelector } from "react-redux";

function Random() {
  const [meal, setMeal] = useState();
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const { likes } = useSelector((state) => state.Likes);
  const [like, setLiked] = useState(false);

  useEffect(() => {
    (async () => {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((result) => {
          setMeal(result.data.meals[0]);
          likes.indexOf(result.data.meals[0].idMeal) === -1
            ? setLiked(false)
            : setLiked(true);
        });
    })();
  }, [shouldUpdate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="screen-root-div"
    >
      <h1 className="heading">Random Meal </h1>
      <MealCard {...meal} like={like} setLiked={setLiked} />
      <button
        className="button"
        onClick={() => {
          setShouldUpdate(!shouldUpdate);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
