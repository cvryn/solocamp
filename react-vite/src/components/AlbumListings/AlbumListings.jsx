import { useState, useEffect } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { thunkWishlistAlbumAdd, thunkWishlistAdlbumRemove, thunkWishlistAlbums, thunkWishlistAlbumCount } from "../../redux/wishlist";
import { FiSearch } from "react-icons/fi";
import { IoIosPlay } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./AlbumListings.css"


function AlbumListings() {
  const currentUser = useSelector(state => state.session.user);
  const albumsInWishlist = useSelector(state => state.session.user.album_in_wishlist);

  const dispatch = useDispatch();
  const albums = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedAlbum, setSelectedAlbum] = useState(() => {
    const randomIndex = Math.floor(Math.random() * albums.length);
    return albums[randomIndex];
  })
  const [genres, setGenres] = useState(["all genres"])
  const [search, setSearch] = useState("")

  // useEffect(() => {
  // dispatch(thunkWishlistAlbums(currentUser.id))
  // dispatch(thunkWishlistAlbumCount())
  // }, [dispatch]);

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
      if (["pop", "alternative", "rap", "r&b", "electronic", "rock", "experimental", "jazz", "country"].includes(searchGenre)) {
        handleSetGenres(searchGenre);
      }
    }
  };

  const handleWishlist = (albumId) => {
    const albumData = {
      user_id: currentUser.id,
      album_id: albumId
    };

    const isInWishlist = albumsInWishlist.some(album => album.id === albumId);

    if (isInWishlist) {
      dispatch(thunkWishlistAdlbumRemove(albumId))
        .then(() => thunkWishlistAlbums(currentUser.id))

    } else {
      dispatch(thunkWishlistAlbumAdd(albumData))
        .then(() => thunkWishlistAlbums(currentUser.id))
    }
  };

  const filteredAlbums = genres.length && !genres.includes("all genres")
    ? albums.filter(album => genres.includes(album.genre.toLowerCase()))
    : albums;

  return (
    <>
      <div id="container-filter-outer">
        <div id="container-filter-inner">
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
                placeholder="Add a genre, location, or tag"
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
      </div>

      <div id="container-album-listings-outer">
        <div id="container-album-listings-grid">
          <div id="container-album-listings">
            {filteredAlbums?.map(album => (

              <div key={album.id} id="container-album">
                <img
                  src={album.album_art[0].album_art}
                  alt="album-cover"
                  style={{ width: "215px", aspectRatio: "1/1", cursor: "pointer" }}
                  onClick={() => setSelectedAlbum(album)}
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

          {selectedAlbum && (
            <div id="container-current-album-outer">
              <div id="container-current-album-inner">
                <img src={selectedAlbum.album_art[0].album_art}
                  alt="alum-cover"
                  style={{ width: "500px", aspectRatio: "1/1" }}
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
                    id="button-go-to-album-album-listings"
                    onClick={() => navigate(`/albums/${selectedAlbum.id}`)}
                  >
                    Go to album
                  </button>
                  <button
                    type="submit"
                    id="button-add-to-wishlist-album-listings"
                    onClick={() => (handleWishlist(selectedAlbum.id))}
                  >
                    {albumsInWishlist?.some(album => album.id === selectedAlbum.id)
                      ? <FaRegHeart style={{ fontSize: "1.6rem" }} />
                      : <FaHeart style={{ fontSize: "1.6rem" }} />}
                    Wishlist
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>

                  {selectedAlbum.songs.length === 1
                    ? (<span>{selectedAlbum.songs.length} track</span>)
                    : (<span>{selectedAlbum.songs.length} tracks</span>)
                  }
                  <span>released in {selectedAlbum.year}</span>
                </div>

                <p>{selectedAlbum.description}</p>
              </div>
            </div>
          )}
        </div>
      </div >
    </>
  );
}


export default AlbumListings;
