// import { useEffect, useState } from "react";
// import { supportedByLoader } from "../../router/supportedbys"; 
// import { useModal } from "../../context/Modal";

// const PostReviewModal = ({ albumId, onReviewSubmit, songs, closeModal }) => {
//   const [description, setDescription] = useState("");
//   const [selectedSongId, setSelectedSongId] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const reviewData = {
//       description,
//       song_id: selectedSongId || null,
//     };

//     try {
//       const newReview = await supportedByLoader("POST", `/api/supported-by/${albumId}`, reviewData);
//       console.log("New review submitted:", newReview);

//       onReviewSubmit(newReview);
//       closeModal();
//     } catch (error) {
//       console.error("Failed to submit review:", error);
//     }
//   };

//   return (
//     <div id="leave-review-modal">
//       <h1>Leave a Review</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Description:</label>
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Favorite Track:</label>
//           <select
//             value={selectedSongId || ""}
//             onChange={(e) => setSelectedSongId(e.target.value || null)}
//           >
//             <option value="">Select a song</option>
//             {songs.map((song) => (
//               <option key={song.id} value={song.id}>
//                 {song.title}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="modal-buttons">
//           <button type="submit">Submit Review</button>
//           <button type="button" onClick={closeModal}>
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PostReviewModal;
