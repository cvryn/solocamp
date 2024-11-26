import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import './AddSongModal.css'


function AddSongModal() {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.session.user)
  const location = useLocation();
  const { modalData, albumId } = location.state || {};
  const [title, setTitle] = useState("");
  const [track, setTrack] = useState("");
  const [songUrl, setSongUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const targetAlbumId = modalData ? modalData : albumId;
  const allAlbums = useSelector(state => state.session.user?.album);
  const albums = allAlbums?.filter(album => album?.id === targetAlbumId);

  const validateForm = () => {
    const newErrors = {};
    const existingTrackNumbers = albums?.flatMap(album => album?.songs?.map(song => song?.track_number));

    if (title?.length < 2) {
      newErrors.title = "Song title must be more than 2 characters.";
    }

    if (isNaN(track) || track.trim() === "") {
      newErrors.track = "Track number must be a valid number.";
    } else if (existingTrackNumbers?.includes(Number(track))) {
      newErrors.track = "Track number already exists.";
    }

    if (!(songUrl.endsWith(".m4a") || songUrl.endsWith(".mp3"))) {
      newErrors.songUrl = "Song URL must end with .m4a or .mp3.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const res = await fetch(`api/albums/${targetAlbumId}/song`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        track_number: track,
        song_url: songUrl,
        album_id: targetAlbumId
      }),
    });

    if (res.ok) {
      setIsLoaded(true);
    }
  };

  const handleDelete = async (songId) => {
    const res = await fetch(`/api/albums/${targetAlbumId}/song`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ song_id: songId }),
    });

    if (res.ok) {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      window.location.reload();
    }
  }, [isLoaded]);

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate])

  return (
    <div className="modal-container-song">
      <h2>Songs in this album</h2>
      <br />
      {albums?.flatMap(album => album?.songs || [])?.map((song, index) => (
        <div key={song?.id || index} className="song-button-container">
          <div className="song-title">{song?.title}</div>
          {song?.id && <button onClick={() => handleDelete(song?.id)}>Delete</button>}
        </div>
      ))}
      <br />
      <h2>Add Songs to your album</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Song Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {errors?.title && <div className="error">{errors.title}</div>}
        </label>
        <label>
          Track Number
          <input
            type="text"
            value={track}
            onChange={(e) => setTrack(e.target.value)}
            required
          />
          {errors?.track && <div className="error">{errors.track}</div>}
        </label>
        <label>
          Song URL
          <input
            type="text"
            value={songUrl}
            onChange={(e) => setSongUrl(e.target.value)}
            required
          />
          {errors?.songUrl && <div className="error">{errors.songUrl}</div>}
        </label>
        <button className='add-song' type="submit">Add Song</button>
      </form>
    </div>
  );
}


export default AddSongModal;
