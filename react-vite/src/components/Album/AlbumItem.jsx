import { Link } from "react-router-dom";
import "./AlbumItems.css";


const AlbumItem = ({ album }) => {

  if (!album) {

    return <div>Album information is not available</div>;
  }

  return (
    <Link to={`/albums/${album.id}`}>
      <div id="albums-container-album-items">
        <div>
          <img
            className="album-image-album-items"
            src={album.album_art?.[0]?.album_art || 'default-image-url'}
            alt={album.name || 'Album Art'}
          />
        </div>
        <div className="album-title-album-items">
          <div className='album-list-album-name'>{album.name || 'Unknown Album'}</div>
          <div style={{ fontSize: '12px' }}>by {album.user_username || 'Unknown Artist'}</div>
          <div style={{ fontSize: '11px' }}>{album.year || 'Unknown Year'}</div>
        </div>
      </div>
    </Link>
  );
};


export default AlbumItem;
