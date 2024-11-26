import { useEffect, useMemo } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { thunkWishlistAlbums, thunkWishlistAlbumRemove } from "../../redux/wishlist";
import { FaHeart } from "react-icons/fa";
import "./UserProfile.css";


function WishList() {
  const currentUser = useSelector(state => state.session.user);
  const albumInOwnWishlistObj = useSelector(state => state.wishlist);
  const albumInWishlist = Object.values(albumInOwnWishlistObj);
  const albumInOwnWishlist = albumInWishlist?.filter(wishlist => wishlist.user_id === currentUser.id);
  const albums = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkWishlistAlbums())
  }, [dispatch]);


  const albumArtMapping = useMemo(() => {
    return albums.reduce((acc, album) => {
      acc[album.id] = album.album_art[0]?.album_art;
      return acc;
    }, {});
  }, [albums]);

  const userUsernameMapping = useMemo(() => {
    return albums.reduce((acc, album) => {
      acc[album.id] = album.user_username;
      return acc;
    }, {});
  }, [albums]);

  const handleHeartClick = (event, albumId) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(thunkWishlistAlbumRemove(albumId));
  };

  if (!currentUser) return null;

  return albumInOwnWishlist.length > 0 ? (
    <div className="container-album-listing-wishlist">
      {albumInOwnWishlist?.map((album) => {
        if (!album || !album.id) return null; // fixes ghost album issue
        const albumCount = albumInOwnWishlist.find(countAlbum => countAlbum.id === album.id)?.count || 0;
        const albumArtUrl = albumArtMapping[album.id];
        const userName = userUsernameMapping[album.id];

        return (
          <Link
            to={`/albums/${album.id}`}
            key={album.id}
            className="container-album-outline"
          >
            <img
              src={albumArtUrl}
              style={{ width: "220px", aspectRatio: "1/1" }}
              alt="album-cover-image"
            />
            <span style={{ paddingTop: "10px" }}>{album.name}</span>
            <span style={{ fontSize: "0.75rem" }}>by {userName}</span>
            <div id="container-count-heart-button-wishlist">
              {albumCount === 1
                ? <span style={{ fontSize: "0.75rem" }}>appears in {albumCount} wishlist</span>
                : <span style={{ fontSize: "0.75rem" }}>appears in {albumCount} wishlists</span>
              }
              <FaHeart onClick={(e) => handleHeartClick(e, album.id)} />
            </div>
          </Link>
        );
      })}
    </div>

  ) : (

    <div style={{ minHeight: "800px" }}></div>
  );
}


export default WishList;
