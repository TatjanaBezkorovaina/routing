import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Contacts from "./pages/contacts/Contacts";
import Reviews from "./pages/reviews/Reviews";
import AppWrapper from "./pages/AppWrapper";
import Main from "./pages/Main";
import React, { useState } from "react";
import "./app.scss";
import { ThemeContext, themes } from "./contexts/theme.context";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const changeTheme = () => {
    setCurrentTheme((prevCurrentTheme) => {
      return prevCurrentTheme === themes.light ? themes.dark : themes.light;
    });
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <button onClick={changeTheme}>
          <span>Change Theme</span>
        </button>
        <ThemeContext.Provider value={currentTheme}>
          <AppWrapper />
        </ThemeContext.Provider>
      </div>
      <Router>
        {/* Navigation */}
        <div className="navigation" style={{ display: "flex" }}>
          <Link
            className="navigation__link"
            style={{ marginRight: "25px" }}
            to="/"
          >
            Головна
          </Link>
          <br />
          <Link
            className="navigation__link"
            style={{ marginRight: "25px" }}
            to="/Contacts"
          >
            Зв'язатись
          </Link>
          <br />
          <Link className="navigation__link" to="/Reviews">
            Відгуки
          </Link>
        </div>
        {/* Content */}
        <Routes>
          {/* Contacts page */}
          <Route path="contacts" element={<Contacts />} />
          {/* Main page */}
          <Route path="/" element={<Main />} />
          {/* Reviews page */}
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
