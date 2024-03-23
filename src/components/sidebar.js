import { React, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

//importing icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PersonIcon from "@mui/icons-material/Person";

function Sidebar(props) {
  const windowSize = useRef(window.innerWidth);
  const location = useLocation();

  const toggleSidebar = useCallback(() => {
    props.setActive(!props.isActive);
  }, [props]);

  return (
    <div className="header" style={{ width: !props.isActive ? "0px" : "" }}>
      <MenuIcon
        style={{
          width: "40px",
          margin: " 0 auto",
          position: "absolute",
          right: "10px",
          top: "10px",
          color: "#fff",
        }}
        onClick={toggleSidebar}
      />
      <nav className="nav">
        <ul className="headerLinks topHeaderLink">
          <div>
            <p>Menu</p>

            <li
              onClick={() => {
                if (windowSize.current <= 425) {
                  props.setActive(false);
                }
              }}
              className={location.pathname === "/" ? "headerLinksActive" : ""}
            >
              <Link to="/">
                <HomeIcon style={{ color: "#fff" }} />
                Homepage
              </Link>
            </li>

            <li
              onClick={() => {
                if (windowSize.current <= 425) {
                  props.setActive(false);
                }
              }}
              className={
                location.pathname === "/menu" ? "headerLinksActive" : ""
              }
            >
              <Link to="/menu">
                <MenuBookIcon style={{ color: "#fff" }} />
                Menu
              </Link>
            </li>

            <li
              onClick={() => {
                if (windowSize.current <= 425) {
                  props.setActive(false);
                }
              }}
              className={
                location.pathname === "/favorites" ? "headerLinksActive" : ""
              }
            >
              <Link to="/favorites">
                <FavoriteIcon style={{ color: "#fff" }} />
                My Favorites
              </Link>
            </li>

            <li
              onClick={() => {
                if (windowSize.current <= 425) {
                  props.setActive(false);
                }
              }}
              className={
                location.pathname === "/random-meal" ? "headerLinksActive" : ""
              }
            >
              <Link to="/random-meal">
                <ShuffleIcon style={{ color: "#fff" }} />
                Random Meal
              </Link>
            </li>
          </div>
        </ul>
        <ul className="headerLinks ">
          <div>
            <li
              onClick={() => {
                if (windowSize.current <= 425) {
                  props.setActive(false);
                }
              }}
              className={
                location.pathname === "/about-me" ? "headerLinksActive" : ""
              }
            >
              <Link to="/about-me">
                <PersonIcon style={{ color: "#fff" }} />
                About Me
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
