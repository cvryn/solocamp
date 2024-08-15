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
        <div className='album-list-album-name'>{album?.name}</div>
        <div style={{fontSize: '12px'}}>by {album?.user_username}</div>
        <div style={{fontSize: '11px'}}>{album?.year}</div>

      </div>
    </div>
    </Link>
  );
};

export default AlbumItem;
