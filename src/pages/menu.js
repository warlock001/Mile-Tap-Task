//importing style sheets
import "../stylesheets/menu.css";
import "../stylesheets/commonStyles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Menu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((result) => {
        setCategories(result.data.categories);
      })
      .catch((err) => {
        setCategories([]);
      });
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
      <h1 className="heading">Menu</h1>

      <div className="menu-grid">
        {categories.map((category) => (
          <Link
            key={category.idCategory}
            to={`/category/${category.strCategory}`}
          >
            <div className="menu-button">
              <span>{category.strCategory}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
