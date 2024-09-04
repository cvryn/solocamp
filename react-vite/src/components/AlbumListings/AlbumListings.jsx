import { useState, useEffect, useRef } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import { thunkWishlistAlbumAdd, thunkWishlistAlbumRemove, thunkWishlistAlbums } from "../../redux/wishlist";
import { FiSearch } from "react-icons/fi";
import { IoIosPlay } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./AlbumListings.css"


function AlbumListings() {
  const currentUser = useSelector(state => state.session.user);
  const albumsInWishlistObj = useSelector(state => state.wishlist);
  const albumsInWishlist = Object.values(albumsInWishlistObj);
  const dispatch = useDispatch();
  const albums = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const loginModalRef = useRef();

  const [showMenu, setShowMenu] = useState(false);
  const [genres, setGenres] = useState(["all genres"])
  const [search, setSearch] = useState("")
  const [selectedAlbum, setSelectedAlbum] = useState(() => {
    const randomIndex = Math.floor(Math.random() * albums.length);
    return albums[randomIndex];
  })

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const genreParam = queryParams.get("genre");

    if (genreParam) {
      if (genreParam === "all-genres") {
        setGenres(["all genres"]);
      } else if (genreParam === "rb") {
        setGenres(["r&b"])
      } else {
        setGenres([genreParam]);
      }

      queryParams.delete("genre");
      navigate({
        pathname: location.pathname,
        search: queryParams.toString()
      }, { replace: true });
    }
  }, [location.search, navigate, location.pathname]);

  useEffect(() => {
    if (showMenu && loginModalRef.current) {
      loginModalRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showMenu]);

  const handleSetGenres = (genre) => {
    if (genre === "all genres") {
      setGenres(["all genres"]);
    } else {
      setGenres(prev => {
        if (prev.includes("all genres")) {
          return [genre];
        } else {
          return prev.includes(genre)
            ? prev.filter(g => g !== genre)
            : [...prev, genre];
        }
      });
    }
  };

  const handleSearch = () => {
    const searchGenre = search.trim().toLowerCase();
    if (searchGenre) {
      if (["all genres", "pop", "alternative", "rap", "r&b", "electronic", "rock", "experimental", "jazz", "country"].includes(searchGenre)) {
        handleSetGenres(searchGenre);
      }
    }
  };

  const addToWishlist = (albumId) => {
    if (!currentUser) {
      setShowMenu(true);
      return;

    } else {
      const albumData = {
        user_id: currentUser.id,
        album_id: albumId
      };
      dispatch(thunkWishlistAlbumAdd(albumData))
        .then(() => dispatch(thunkWishlistAlbums()));
    }
  };

  const removeFromWishlist = (albumId) => {
    dispatch(thunkWishlistAlbumRemove(albumId))
      .then(() => dispatch(thunkWishlistAlbums()))
  };

  const handleAlbumClick = (album) => {
    const isSmallScreen = window.innerWidth <= 600;
    if (isSmallScreen) {
      navigate(`/albums/${album.id}`);
    } else {
      setSelectedAlbum(album);
    }
  };

  const closeMenu = () => setShowMenu(false);

  const filteredAlbums = genres.length && !genres.includes("all genres")
    ? albums.filter(album => genres.includes(album.genre.toLowerCase()))
    : albums;

  return (
    <>
      {showMenu && (
        <div className="button-login-modal-album-listings" ref={loginModalRef}>
          <OpenModalMenuItem
            itemText="Log in to add album to wishlist"
            onItemClick={closeMenu}
            modalComponent={<LoginFormModal />}
          />
          <MdOutlineClose
            onClick={closeMenu}
            style={{ fontSize: "1.5rem", position: "absolute", right: "20px" }}
          />
        </div>
      )}

      <div id="container-filter-outer">
        <div id="container-search-genre-tags">
          <div id="container-search-bar-album-listings">
            <FiSearch style={{ color: "white" }} />
            <input style={{
              height: "35px",
              width: "90%",
              color: "white",
              backgroundColor: "rgb(60, 60, 60)",
              border: "none"
            }}
              placeholder="Type the genre and press enter"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  handleSearch()
                }
              }}
            />
          </div>

          <div id="container-genre-tags">
            {["all genres", "pop", "alternative", "rap", "r&b", "electronic", "rock", "experimental", "jazz", "country"].map(genre => (
              <div
                key={genre}
                className={`genre-tag ${genres.includes(genre) ? "selected" : ""}`}
                onClick={() => handleSetGenres(genre.toLowerCase())}
                style={{ cursor: "pointer" }}
              >
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="container-album-listings-outer">
        <div id="container-album-listings-grid">
          <div id="container-album-listings">
            {filteredAlbums?.map(album => (

              <div key={album.id} id="container-album">
                <img
                  src={album.album_art[0].album_art}
                  alt="album-cover"
                  style={{ width: "100%", aspectRatio: "1/1", cursor: "pointer" }}
                  onClick={() => handleAlbumClick(album)}
                />

                <Link to={`/albums/${album.id}`}>
                  <div id="container-album-text">
                    <span>{album.name}</span>
                    <span>by {album.user_username}</span>
                  </div>
                </Link>
                <span style={{ color: "gray", marginTop: "5px" }}>{album.genre}</span>
              </div>
            ))}
          </div>

          {selectedAlbum && Array.isArray(selectedAlbum.songs) && selectedAlbum.songs.length > 0 ? (
            <div id="container-current-album-outer">
              <div id="container-current-album-inner">
                <img src={selectedAlbum.album_art[0].album_art}
                  alt="alum-cover"
                  style={{ width: "100%", aspectRatio: "1/1", minWidth: "200px" }}
                />

                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{
                    backgroundColor: "white",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <IoIosPlay style={{ fontSize: "4rem", color: "black", paddingLeft: "5px" }} />
                  </div>

                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "5px"
                  }}>
                    <span>{selectedAlbum.name}</span>
                    <span>by {selectedAlbum.user_username}</span>
                  </div>
                </div>

                <div style={{
                  display: "flex",
                  gap: "10px"
                }}>
                  <button
                    type="button"
                    className="button-wishlist-album-listings"
                    onClick={() => navigate(`/albums/${selectedAlbum.id}`)}
                  >
                    Go to album
                  </button>

                  {currentUser && selectedAlbum.user_id === currentUser.id
                    ? (<button
                      type="button"
                      className="button-wishlist-album-listings"
                      style={{ cursor: "not-allowed" }}
                      onClick={() => removeFromWishlist(selectedAlbum.id)}
                      disabled
                    >
                      <FaHeart style={{ fontSize: "1.6rem" }} /> Wishlist
                    </button>

                    ) : (currentUser && albumsInWishlist?.find(album => album.id === selectedAlbum.id)
                      ? (
                        <button
                          type="button"
                          className="button-wishlist-album-listings"
                          onClick={() => removeFromWishlist(selectedAlbum.id)}
                        >
                          <FaHeart style={{ fontSize: "1.6rem" }} /> Wishlist
                        </button>

                      ) : (
                        <button
                          type="button"
                          className="button-wishlist-album-listings"
                          style={{
                            color: "white",
                            backgroundColor: "rgb(34, 34, 34)",
                            border: "2px solid white"
                          }}
                          onClick={() => addToWishlist(selectedAlbum.id)}
                        >
                          <FaRegHeart style={{ fontSize: "1.6rem" }} /> Wishlist
                        </button>
                      )
                    )
                  }
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>

                  {
                    selectedAlbum.songs.length === 1
                      ? (<span>{selectedAlbum.songs.length} track</span>)
                      : (<span>{selectedAlbum.songs.length} tracks</span>)
                  }
                  <span>released in {selectedAlbum.year}</span>
                </div>

                <p>{selectedAlbum.description}</p>
              </div>
            </div>
          ) : (
            <h2 style={{ alignSelf: "center", fontSize: "2rem", }}>This album has no songs</h2>
          )}
        </div>
      </div >
    </>
  );
}


export default AlbumListings;
