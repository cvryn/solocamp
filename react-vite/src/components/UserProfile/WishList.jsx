import { useSelector } from "react-redux"
import "./UserProfile.css"


function WishList() {
  const currentUser = useSelector(state => state.session.user)
  const album_in_wishlist = currentUser.album_in_wishlist
  console.log("🚀 ~ WishList ~ album_in_wishlist:", album_in_wishlist)

  if (!currentUser) return null

  return (
    <div>
      {album_in_wishlist?.map(album => (
        <div key={album.id} id="container-album-wishlist">
          <img src={album.album_art[0].album_art}
            style={{ widht: "210px", aspectRatio: "1/1" }}
            alt="album-cover-image"
          />
          <span>{album.name}</span>
          <span>by {album.user_username}</span>
        </div>
      ))}
    </div>
  );
}


export default WishList
