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
            height: "40px", width: "300px", backgroundColor: "#EFEFEF", border: "none"
          }}
          placeholder=" Search for artist, album, or track"
        />
        <FiSearch />
      </div>

      {genreDropDown &&
        <div id="container-genre-drop-down-navigation"
          onMouseLeave={() => setGenreDropDown(false)}
        >
          <div style={{ backgroundColor: "#F7A664" }}
            className="drop-down-genre-navigation">pop <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
          <div style={{ backgroundColor: "#F57356" }}
            className="drop-down-genre-navigation">alternative <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
          <div style={{ backgroundColor: "#DF2635" }}
            className="drop-down-genre-navigation">rap <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
          <div style={{ backgroundColor: "#D4356D" }}
            className="drop-down-genre-navigation">r&b <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
          <div style={{ backgroundColor: "#C13EA2" }}
            className="drop-down-genre-navigation">electronic <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
          <div style={{ backgroundColor: "#9C62C0" }}
            className="drop-down-genre-navigation">rock <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
          <div style={{ backgroundColor: "#8172B1" }}
            className="drop-down-genre-navigation">experimental <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
          <div style={{ backgroundColor: "#8690CB" }}
            className="drop-down-genre-navigation">jazz <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
          <div style={{ backgroundColor: "#87A8C5" }}
            className="drop-down-genre-navigation">something <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
          <div style={{ backgroundColor: "#333333" }}
            className="drop-down-genre-navigation">all genres <MdOutlineKeyboardArrowRight className="genre-arrow" /></div>
        </div>
      }
    </div>
  );
}


export default SearchBar
