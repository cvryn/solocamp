import { Link } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Navigation.css";


function SearchBar() {
  const [genreDropDown, setGenreDropDown] = useState(false)


  return (
    <div>
      <div id="container-search-bar-navigation">
        <input
          onClick={() => (setGenreDropDown(!genreDropDown))}
          style={{
            height: "35px", width: "300px", backgroundColor: "#EFEFEF", border: "none"
          }}
          placeholder="Search for artist, album, or track"
        />
        <FiSearch />
      </div>

      {genreDropDown &&
        <div style={{ position: "fixed" }}
          onMouseLeave={() => setGenreDropDown(false)}
        >
          <div style={{ backgroundColor: "#F7A664" }}
            className="drop-down-genre-navigation">pop <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
          <div style={{ backgroundColor: "#F57356" }}
            className="drop-down-genre-navigation">alternative <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} /></div>
          <div style={{ backgroundColor: "#DF2635" }}
            className="drop-down-genre-navigation">rap <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} /></div>
          <div style={{ backgroundColor: "#D4356D" }}
            className="drop-down-genre-navigation">r&b <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} /></div>
          <div style={{ backgroundColor: "#C13EA2" }}
            className="drop-down-genre-navigation">electronic <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} /></div>
          <div style={{ backgroundColor: "#9C62C0" }}
            className="drop-down-genre-navigation">rock <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} /></div>
          <div style={{ backgroundColor: "#8172B1" }}
            className="drop-down-genre-navigation">experimental <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} /></div>
          <div style={{ backgroundColor: "#8690CB" }}
            className="drop-down-genre-navigation">jazz <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} /></div>
          <div style={{ backgroundColor: "#87A8C5" }}
            className="drop-down-genre-navigation">country <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} /></div>
          <Link to="/albums"><div style={{ backgroundColor: "#333333" }}
            className="drop-down-genre-navigation">all genres <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} /></div></Link>
        </div>
      }
    </div >
  );
}


export default SearchBar
