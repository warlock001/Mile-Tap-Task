import "../stylesheets/mealCard.css";
import { Tooltip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addLikes } from "../store/likes";
function MealCard(props) {
  const dispatch = useDispatch();

  return (
    <div className="mealCardWrapper">
      <img className="mealCardThumb" src={props.strMealThumb} alt="meal" />
      <div>
        <div className="MealItemTitle">{props.strMeal}</div>
        <div className="MealItemArea">{props.strArea}</div>
      </div>
      <div className="mealCardLikeContainer">
        <Tooltip
          onClick={() => {
            props.setLiked(!props.like);
            dispatch(addLikes(props.idMeal));
          }}
          title="Like"
        >
          {props.like ? (
            <FavoriteIcon style={{ color: "#ff0000" }} />
          ) : (
            <FavoriteBorderIcon className="likeButton" />
          )}
        </Tooltip>
      </div>
    </div>
  );
}

export default MealCard;
