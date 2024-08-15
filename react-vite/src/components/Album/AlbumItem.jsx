import { Link } from "react-router-dom";

import "./AlbumItems.css";

const AlbumItem = ({ album }) => {
// console.log("HOW DO I SEE THIS", album);
  return (
    <Link to={`/albums/${album.id}`}>
    <div id="albums-container-album-items">
      <div>
        <img
          className="album-image-album-items"
          src={album?.album_art[0].album_art}
        />
      </div>
      <div className="album-title-album-items">
        <div>{album?.name}</div>
        <div>by {album?.user_username}</div>
        <div>{album?.year}</div>

      </div>
    </div>
    </Link>
  );
};

export default AlbumItem;
