import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Contacts from "./pages/contacts/Contacts";
import Main from "./pages/Main";
import React from "react";

const App = () => {
  return (
    <>
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
          <Link className="navigation__link" to="/Contacts">
            Зв'язатись
          </Link>
        </div>
        {/* Content */}
        <Routes>
          {/* Contacts page */}
          <Route path="contacts" element={<Contacts />} />
          {/* Main page */}
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
