import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Navigation.css";

function SearchBar() {
  const [genreDropDown, setGenreDropDown] = useState(false);

  return (
    <div>
      <div id="container-search-bar-navigation">
        <input
          onClick={() => setGenreDropDown(!genreDropDown)}
          style={{
            height: "35px",
            width: "300px",
            backgroundColor: "#EFEFEF",
            border: "none",
          }}
          placeholder="No search, but try the drop-down menu!"
        />
        <FiSearch />
      </div>

      {genreDropDown && (
        <div
          style={{ position: "fixed" }}
          onMouseLeave={() => setGenreDropDown(false)}
        >
          <Link
            to="/albums?genre=pop"
            style={{ backgroundColor: "#F7A664" }}
            className="drop-down-genre-navigation"
            onClick={() => setGenreDropDown(!genreDropDown)}
          >
            pop <MdOutlineKeyboardArrowRight className="genre-arrow" />
          </Link>
          <Link
            to="/albums?genre=alternative"
            style={{ backgroundColor: "#F57356" }}
            className="drop-down-genre-navigation"
            onClick={() => setGenreDropDown(!genreDropDown)}
          >
            alternative <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} />
          </Link>
          <Link
            to="/albums?genre=rap"
            style={{ backgroundColor: "#DF2635" }}
            className="drop-down-genre-navigation"
            onClick={() => setGenreDropDown(!genreDropDown)}
          >
            rap <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} />
          </Link>
          <Link
            to="/albums?genre=rb"
            style={{ backgroundColor: "#D4356D" }}
            className="drop-down-genre-navigation"
            onClick={() => setGenreDropDown(!genreDropDown)}
          >
            r&b <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} />
          </Link>
          <Link
            to="/albums?genre=electronic"
            style={{ backgroundColor: "#C13EA2" }}
            className="drop-down-genre-navigation"
            onClick={() => setGenreDropDown(!genreDropDown)}
          >
            electronic <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} />
          </Link>
          <Link
            to="/albums?genre=rock"
            style={{ backgroundColor: "#9C62C0" }}
            className="drop-down-genre-navigation"
            onClick={() => setGenreDropDown(!genreDropDown)}
          >
            rock <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} />
          </Link>
          <Link
            to="/albums?genre=experimental"
            style={{ backgroundColor: "#8172B1" }}
            className="drop-down-genre-navigation"
            onClick={() => setGenreDropDown(!genreDropDown)}
          >
            experimental <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} />
          </Link>
          <Link
            to="/albums?genre=jazz"
            style={{ backgroundColor: "#8690CB" }}
            className="drop-down-genre-navigation"
            onClick={() => setGenreDropDown(!genreDropDown)}
          >
            jazz <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} />
          </Link>
          <Link
            to="/albums?genre=country"
            style={{ backgroundColor: "#87A8C5" }}
            className="drop-down-genre-navigation"
            onClick={() => setGenreDropDown(!genreDropDown)}
          >
            country <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} />
          </Link>
          <Link
            to="/albums?genre=all-genres"
            style={{ backgroundColor: "#333333" }}
            className="drop-down-genre-navigation"
            onClick={() => setGenreDropDown(!genreDropDown)}
          >
            all genres <MdOutlineKeyboardArrowRight style={{ fontSize: "1.5rem" }} />
          </Link>
        </div>
      )}
    </div>
  );
}


export default SearchBar;
