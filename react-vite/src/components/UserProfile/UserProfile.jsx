import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { thunkCollectionAlbums } from "../../redux/collection";
import { thunkWishlistAlbums } from "../../redux/wishlist";
import Collection from "./Collection";
import WishList from "./WishList";
import "./UserProfile.css";

function UserProfile() {
  const currentUser = useSelector((state) => state.session.user);
  const albums = useLoaderData();
  const navigate = useNavigate();
  const albumInOwnWishlistObj = useSelector((state) => state.wishlist);
  const albumsInCollectionObj = useSelector((state) => state.collection);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const [collection, setCollection] = useState(searchParams.get("tab") === "collection");
  const [wishlist, setWishlist] = useState(searchParams.get("tab") === "collection" ? false : true);

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (currentUser) {
      dispatch(thunkCollectionAlbums());
      dispatch(thunkWishlistAlbums());
    }

  }, [dispatch, currentUser]);

  const albumInWishlist = Object.values(albumInOwnWishlistObj);
  const albumInOwnWishlist = currentUser ? albumInWishlist?.filter((wishlist) => wishlist.user_id === currentUser.id) : [];
  const albumsInCollection = Object.values(albumsInCollectionObj);
  const albumsInOwnCollection = currentUser ? albumsInCollection.filter((collection) => collection.user_id === currentUser.id) : [];

  const ownAlbums = Array.isArray(albums) ? albums.filter((album) => album?.user_id === currentUser?.id) : [];
  const latestReleaseYear = ownAlbums.length > 0 ? Math.max(...ownAlbums.map((album) => album.year)) : null;
  const latestAlbum = latestReleaseYear
    ? albums.find((album) => album.year === latestReleaseYear && album.user_id === currentUser.id)
    : null;

  if (!currentUser) return null;

  return (
    <div>
      <div id="banner-user-profile"></div>

      <div id="container-user-profile">
        <div id="container-details-user-profile">
          <img
            src={currentUser.profile_image}
            style={{ width: "220px", aspectRatio: "1/1" }}
            alt="user-profile-image"
          />

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
            className={collection && "is-active"}
            onClick={() => {
              setCollection(true);
              setWishlist(false);
            }}
          >
            collection&nbsp;&nbsp;&nbsp;&nbsp;{albumsInOwnCollection.length}
          </NavLink>
          <NavLink
            className={wishlist && "is-active"}
            onClick={() => {
              setWishlist(true);
              setCollection(false);
            }}
          >
            wishlist&nbsp;&nbsp;&nbsp;&nbsp;{albumInOwnWishlist.length}
          </NavLink>
        </div>
        <hr style={{ border: "0.5px solid lightgray", margin: "10px 0 20px 0" }} />
      </div>

      {collection && <Collection />}
      {wishlist && <WishList />}
    </div>
  );
}


export default UserProfile;
