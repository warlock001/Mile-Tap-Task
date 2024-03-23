//importing style sheets
import "../stylesheets/homepage.css";
import "../stylesheets/commonStyles.css";

import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
      className="screen-root-div"
    >
      <h1 className="heading">Home Page</h1>
      <div className="button-grid">
        <Link to="/menu">
          <div className="homepage-button">
            <span>Menu</span>
          </div>
        </Link>
        <Link to="/favorites">
          <div className="homepage-button">
            <span>Favorites</span>
          </div>
        </Link>
      </div>
      <div className="button-grid">
        <Link to="/random-meal">
          <div className="homepage-button">
            <span>Random Meal</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
