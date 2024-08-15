import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { thunkWishlistAlbumCount, thunkWishlistAlbums } from "../../redux/wishlist"
import "./UserProfile.css"
import { useEffect } from "react"


function WishList() {
  const currentUser = useSelector(state => state.session.user)
  const albumCountObj = useSelector(state => state.wishlist);
  const albumsInWishlist = useSelector(state => state.session.user.album_in_wishlist);
  const albumCountArr = Object.values(albumCountObj);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(thunkWishlistAlbums(currentUser.id))
    // dispatch(thunkWishlistAlbumCount())
  }, [dispatch]);

  if (!currentUser) return null

  return albumsInWishlist ? (
    <div id="container-album-listing-wishlist">
      {albumsInWishlist?.map(album => {
        const albumCount = albumCountArr.find(countAlbum => countAlbum.id === album.id)?.count || 0;

        return (
          <Link
            to={`/albums/${album.id}`}
            key={album.id}
            id="container-album-wishlist"
          >
            <img
              src={album.album_art[0]?.album_art}
              style={{ width: "220px", aspectRatio: "1/1" }}
              alt="album-cover-image"
            />
            <span style={{ paddingTop: "10px" }}>{album.name}</span>
            <span style={{ fontSize: "0.75rem" }}>by {album.user_username}</span>
            {albumCount === 1
              ? <span style={{ marginTop: "auto", fontSize: "0.75rem" }}>appears in {albumCount} wishlists</span>
              : <span style={{ marginTop: "auto", fontSize: "0.75rem" }}>appears in {albumCount} wishlists</span>
            }
          </Link>
        )
      })}
    </div>
  ) : (<div style={{ minHeight: "800px" }}></div >);
}


export default WishList
