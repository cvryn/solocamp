import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { IoIosPlay } from "react-icons/io";
import { SlHeart } from "react-icons/sl";
import "./AlbumListings.css"


function AlbumListings() {
  const albums = useLoaderData()
  const navigate = useNavigate()

  console.log('albums plz', albums)

  return (
    <>
      <div id="container-filter-outer">
        <div id="container-filter-inner">
          <div id="container-search-genre-tags">
            <div id="container-search-bar-album-listings">
              <FiSearch style={{ color: "white" }} />
              <input style={{
                height: "35px", width: "300px", color: "white", backgroundColor: "rgb(60, 60, 60)", border: "none"
              }}
                placeholder="Add a genre, location, or tag"
              />
            </div>

            <div id="container-genre-tags">
              <NavLink to=""><div className="genre-tag">all genres</div></NavLink>
              <NavLink to=""><div className="genre-tag">pop</div></NavLink>
              <NavLink to=""><div className="genre-tag">alternative</div></NavLink>
              <NavLink to=""><div className="genre-tag">rap</div></NavLink>
              <NavLink to=""><div className="genre-tag">r&b</div></NavLink>
              <NavLink to=""><div className="genre-tag">electronic</div></NavLink>
              <NavLink to=""><div className="genre-tag">rock</div></NavLink>
              <NavLink to=""><div className="genre-tag">experimental</div></NavLink>
              <NavLink to=""><div className="genre-tag">jazz</div></NavLink>
              <NavLink to=""><div className="genre-tag">country</div></NavLink>
            </div>

            <span style={{ marginTop: "10px", alignSelf: "flex-end", cursor: "pointer", color: "white" }}>clear all filters</span>
          </div>
        </div>
      </div>

      <div id="container-album-listings-outer">
        <div id="container-album-listings-inner">

          <div id="container-album-listings-grid">
            <div id="container-album-listings">
              {albums.map(album => (
                <Link key={album.id} to={`/albums/${album.id}`}>
                  <div id="container-album">
                    <img src={album.album_art[0].album_art}
                      alt="album-cover"
                      style={{ width: "215px", aspectRatio: "1/1" }}
                    />
                    <span>{album.name}</span>
                    <span>by {album.user_username}</span>
                    <span>{album.genre}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div id="container-current-album-outer">
              <div id="container-current-album-inner">
                <img src={albums[23].album_art[0].album_art}
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
                    <span>{albums[23].name}</span>
                    <span>by {albums[23].user_username}</span>
                  </div>
                </div>

                <div style={{
                  display: "flex",
                  gap: "10px"
                }}>
                  <button
                    className="wishlist-button-album-listings"
                    onClick={() => navigate("/albums/24")}
                  >
                    Go to album
                  </button>
                  <button className="wishlist-button-album-listings" >
                    <SlHeart style={{ fontSize: "1.7rem" }} />Wishlist
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <span>{ } tracks</span>
                  <span>released in {albums[23].year}</span>
                </div>

                <p>{albums[23].description}</p>
              </div>
            </div>
          </div>

        </div>
      </div >
    </>
  )
}


export default AlbumListings
