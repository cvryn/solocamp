// import React from 'react';
// import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
// import { postToWishlist, deleteFromWishlist } from '../../router/wishlist';

// const WishlistButton = ({ albumId, currentUser, isInWishlist, onToggleWishlist }) => {
//   const handleWishlistToggle = async () => {
//     if (!currentUser) {
//       alert("You need to be logged in to manage your wishlist.");
//       return;
//     }

//     try {
//       let result;
//       if (isInWishlist) {
//         result = await deleteFromWishlist(albumId);
//       } else {
//         result = await postToWishlist(albumId);
//       }

//       if (result.error) {
//         alert(result.error);
//         return;
//       }

//       onToggleWishlist();
//     } catch (error) {
//       console.error("Error updating wishlist:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <button onClick={handleWishlistToggle}>
//       {isInWishlist ? (
//         <>
//           <IoMdHeart style={{ fontSize: "15px" }} />
//           Wishlist - added
//         </>
//       ) : (
//         <>
//           <IoMdHeartEmpty style={{ fontSize: "15px" }} />
//           Wishlist
//         </>
//       )}
//     </button>
//   );
// };

// export default WishlistButton;
