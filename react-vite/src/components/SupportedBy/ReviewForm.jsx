import { useState } from "react";
import { useSelector } from "react-redux";
import { createSupportedBy } from "../../router/supportedbys";

const ReviewForm = ({ albumId, songs = [], onReviewSubmitted, canLeaveReview }) => {
  const [reviewText, setReviewText] = useState("");
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const currentUser = useSelector((state) => state.session.user);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      description: reviewText,
      song_id: selectedSongId,
    };

    try {
      const newReview = await createSupportedBy(albumId, reviewData);
      console.log("New review submitted:", newReview);
      onReviewSubmitted(newReview);
      setReviewText("");
      setSelectedSongId(null);
      setIsFormVisible(false);
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {canLeaveReview && ( 
        <>
          <button onClick={() => setIsFormVisible((prev) => !prev)}>
            {isFormVisible ? "Cancel" : "Leave a Review"}
          </button>
          {isFormVisible && (
            <form onSubmit={handleReviewSubmit}>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Leave a review..."
                required
                rows={4}
                style={{ width: '100%', resize: 'none', marginTop: '10px' }}
              />

              <label htmlFor="favorite-song" style={{ marginTop: '10px', display: 'block' }}>Favorite Track:</label>
              <select
                id="favorite-song"
                value={selectedSongId || ""}
                onChange={(e) => setSelectedSongId(e.target.value)}
                required
                style={{ width: '100%', marginTop: '10px' }}
              >
                <option value="" disabled>Select a song</option>
                {songs.map((song) => (
                  <option key={song.id} value={song.id}>
                    {song.title}
                  </option>
                ))}
              </select>

              <button type="submit" style={{ marginTop: '10px' }}>Submit Review</button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default ReviewForm;