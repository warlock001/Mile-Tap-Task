import { Tooltip } from "@mui/material";
import "../stylesheets/mealItem.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { addLikes } from "../store/likes";
import { useDispatch } from "react-redux";

function MealItem(params) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      params.likes.indexOf(params.idMeal) === -1
        ? setLike(false)
        : setLike(true);
    })();
  }, [params.idMeal, params.likes]);

  return (
    <div className="mealItemWrapper">
      <div className="mealItemContainer">
        <img
          className="mealImage"
          src={params.strMealThumb + "/preview"}
          alt="Meal"
        />
        <div>
          <span className="MealItemTitle">{params.strMeal}</span>
        </div>
      </div>

      <Tooltip
        onClick={() => {
          setLike(!like);
          dispatch(addLikes(params.idMeal));
        }}
        title="Like"
      >
        {like ? (
          <FavoriteIcon style={{ color: "#ff0000" }} />
        ) : (
          <FavoriteBorderIcon className="likeButton" />
        )}
      </Tooltip>
    </div>
  );
}

export default MealItem;
