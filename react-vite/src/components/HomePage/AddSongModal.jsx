import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import './AddSongModal.css'

function AddSongModal() {
  const location = useLocation();
  const { modalData, albumId } = location.state || {};
  const albums = useSelector(state => state.session.user.album.filter(el => el.id === modalData || el.id === albumId));
  console.log('album this', albums);

  const [title, setTitle] = useState("");
  const [track, setTrack] = useState("");
  const [songUrl, setSongUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const targetAlbumId = modalData ? modalData : albumId;

  const validateForm = () => {
    const newErrors = {};
    const existingTrackNumbers = albums.flatMap(album => album.songs.map(song => song.track_number));
    // console.log('existing track num', existingTrackNumbers.includes(track))
    
    if (title.length < 2) {
      newErrors.title = "Song title must be more than 2 characters.";
    }

    if (isNaN(track) || track.trim() === "") {
      newErrors.track = "Track number must be a valid number.";
    } else if (existingTrackNumbers.includes(Number(track))) {
      // console.log('current track', track)
      newErrors.track = "Track number already exists.";
    }

    if (!songUrl.endsWith(".mp3")) {
      newErrors.songUrl = "Song URL must end with .mp3.";
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

    console.log('anything back from adding songs?', res);
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

  return (
    <div className="modal-container">
      <h3>Songs in this album</h3>
      {albums && albums.flatMap(album => album.songs).map(ell => (
        <div key={ell.id}>
          <div className="song-button-container">
            <div className="song-title">{ell.title}</div>
            <button onClick={() => handleDelete(ell.id)}>Delete</button>
          </div>
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
          {errors.title && <div className="error">{errors.title}</div>}
        </label>
        <label>
          Track Number
          <input
            type="text"
            value={track}
            onChange={(e) => setTrack(e.target.value)}
            required
          />
          {errors.track && <div className="error">{errors.track}</div>}
        </label>
        <label>
          Song URL
          <input
            type="text"
            value={songUrl}
            onChange={(e) => setSongUrl(e.target.value)}
            required
          />
          {errors.songUrl && <div className="error">{errors.songUrl}</div>}
        </label>
        <button className='add-song'type="submit">Add Song</button>
      </form>
    </div>
  );
}

export default AddSongModal;
