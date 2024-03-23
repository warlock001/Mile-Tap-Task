import { useState, React, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";

//importing style sheets
import "./App.css";

//importing icons
import MenuIcon from "@mui/icons-material/Menu";

//importing pages
import Homepage from "./pages/homepage";
import Menu from "./pages/menu";
import Category from "./pages/category";
import Random from "./pages/random";
import Favorites from "./pages/favorites";
import AboutMe from "./pages/aboutMe";

function App() {
  const [isActive, setActive] = useState(true);

  const toggleSidebar = useCallback(() => {
    setActive(!isActive);
  }, [isActive]);

  return (
    <div className="wrapper">
      <div className="container">
        <Sidebar isActive={isActive} setActive={setActive} />
        <div className="body">
          {!isActive ? (
            <MenuIcon
              style={{
                width: "40px",
                margin: " 0 auto",
                position: "absolute",
                left: "10px",
                top: "10px",
                color: "#1a1c1e",
              }}
              onClick={toggleSidebar}
            />
          ) : (
            ""
          )}

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="random-meal" element={<Random />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="about-me" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
