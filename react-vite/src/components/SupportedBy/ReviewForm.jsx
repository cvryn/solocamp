import { useState } from "react";
import { createSupportedBy } from "../../router/supportedbys";
import './ReviewForm.css';

const ReviewForm = ({ albumId, songs = [], onReviewSubmitted, canLeaveReview }) => {
  const [reviewText, setReviewText] = useState("");
  const [selectedSongId, setSelectedSongId] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      description: reviewText,
      song_id: selectedSongId || null,
    };

    try {
      const newReview = await createSupportedBy(albumId, reviewData);
      // console.log("New review submitted:", newReview);
      onReviewSubmitted(newReview);
      setReviewText("");
      setSelectedSongId("");
      setIsFormVisible(false);
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {canLeaveReview && (
        <>
          <button
            className='leave-review-button-album-details'
            onClick={() => setIsFormVisible((prev) => !prev)}
          >
            {isFormVisible ? "Cancel" : "Leave a Review"}
          </button>
          {isFormVisible && (
            <form onSubmit={handleReviewSubmit}>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Leave a review for the album!"
                required
                rows={4}
                style={{ width: '100%', resize: 'none', marginTop: '10px', padding: '10px' }}
              />

              <label htmlFor="favorite-song" style={{ marginTop: '10px', display: 'block' }}>Favorite Track (optional):</label>
              <select
                id="favorite-song"
                value={selectedSongId}
                onChange={(e) => setSelectedSongId(e.target.value)}
                style={{ width: '100%', marginTop: '10px' }}
              >
                <option value="">None</option>
                {songs.map((song) => (
                  <option key={song.id} value={song.id}>
                    {song.title}
                  </option>
                ))}
              </select>

              <button
                className='leave-review-submit-button'
                type="submit"
                style={{ marginTop: '10px' }}
              >
                Submit Review
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default ReviewForm;
