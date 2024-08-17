
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { NavLink, useLoaderData, useNavigate, useSearchParams } from "react-router-dom"
import Collection from "./Collection"
import WishList from "./WishList"
import "./UserProfile.css"

function UserProfile() {
  const currentUser = useSelector(state => state.session.user)
  const albums = useLoaderData()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [collection, setCollection] = useState(searchParams.get("tab") === "collection");
  const [wishlist, setWishlist] = useState(searchParams.get("tab") !== "collection");

  useEffect(() => {
    if (!currentUser) {
      navigate("/")
    }
  }, [currentUser, navigate])

  const ownAlbums = albums?.filter(album => album?.user_id === currentUser?.id)
  const latestReleaseYear = Math.max(...ownAlbums.map(album => album.year));
  const latestAlbum = albums?.find(album => album.year === latestReleaseYear)



  if (!currentUser) return null;

  return (
    <div>
      <div id="banner-user-profile"></div>

      <div id="container-user-profile">
        <div id="container-details-user-profile">
          <img src={currentUser.profile_image}
            style={{ width: "220px", aspectRatio: "1/1" }}
            alt="user-profile-image" />

          <div id="container-user-album-details">
            <h1 style={{ marginBottom: "10px" }}>{currentUser.username}</h1>
            {ownAlbums && latestAlbum ? (
              <>
                <span>latest album: {latestAlbum.name}</span>
                <span>released in: {latestAlbum.year}</span>
              </>
            ) : (
              <>
                <span>no albums yet...</span>
              </>
            )}
          </div>
        </div>

        <div id="container-collection-wishlist">
          <NavLink
            className={() => collection ? "tab-wishlist active" : "tab-wishlist"}
            onClick={() => {
              setCollection(true);
              setWishlist(false);
            }}
          >
            collection&nbsp;&nbsp;&nbsp;&nbsp;
            {Array.isArray(currentUser?.album_in_collection) ?
              currentUser.album_in_collection.length : 0}
          </NavLink>
          <NavLink
            className={() => wishlist ? "tab-wishlist active" : "tab-wishlist"}
            onClick={() => {
              setWishlist(true);
              setCollection(false);
            }}
          >
            wishlist&nbsp;&nbsp;&nbsp;&nbsp;
            {Array.isArray(currentUser?.album_in_wishlist) ? currentUser.album_in_wishlist.length : 0}
          </NavLink>
        </div>
        <hr style={{ border: "0.5px solid lightgray", margin: "10px 0 20px 0" }} />
      </div>

      {collection && <Collection />}
      {wishlist && <WishList />}
    </div >
  );
}


export default UserProfile
