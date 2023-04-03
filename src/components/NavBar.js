import React from "react";
import Movie from "../images/Movie.png";
import Shape from "../images/Shape.png";
import Bookmark from "../images/Bookmark.png"
import tv from "../images/tv.png"
import Shapes from "../images/Shapes.png";
// import search from "../images/search.png"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Movie} alt="" />
          </a>
          <a className="navbar-brand" href="/">
            <img src={Shape} alt="" />
          </a>
          <a className="navbar-brand" href="/">
            <img src={Shapes} alt="" />
          </a>
          <a className="navbar-brand" href="/">
            <img src={tv} alt="" />
          </a>
          <a className="navbar-brand" href="/">
            <img src={Bookmark} alt="" />
          </a>
          <a className="navbar-brand" href="/">
            <img src={Movie} alt="" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
