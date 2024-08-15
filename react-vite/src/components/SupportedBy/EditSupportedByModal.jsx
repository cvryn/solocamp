import { useEffect, useState } from "react";
import { supportedByLoader } from "../../router/supportedbys";
import { useModal } from "../../context/Modal";

const EditSupportedByModal = ({ supportedBy, onEditComplete }) => {
  const { closeModal } = useModal();
  const [description, setDescription] = useState(supportedBy.description);
  const [selectedSongId, setSelectedSongId] = useState(supportedBy.song_id);
  const [songs, setSongs] = useState([]);

  console.log("~~~~~~~~~~~~~", supportedBy);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const albumId = supportedBy.album_id;
        const songData = await supportedByLoader("GET", `/api/songs`);
        const albumSongs = songData.filter(
          (song) => song?.album_id === albumId
        );
        setSongs(albumSongs);
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      }
    };

    fetchSongs();
  }, [supportedBy.album_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      description,
      song_id: selectedSongId || null,
    };

    try {
      const updatedSupportedBy = await supportedByLoader(
        "PUT",
        `/api/supported-by/${supportedBy.id}`,
        updatedData
      );
      console.log("Updated supported by:", updatedSupportedBy);

      onEditComplete(updatedSupportedBy);
      closeModal();
    } catch (error) {
      console.error("Failed to update supported by:", error);
    }
  };

  return (
    <div id="edit-supported-by-modal">
      <h1>Edit Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Favorite Track:</label>
          <select
            value={selectedSongId || ""}
            onChange={(e) => setSelectedSongId(e.target.value || null)}
          >
            {songs.map((song) => (
              <option key={song.id} value={song.id}>
                {song.title}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-buttons">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSupportedByModal;
