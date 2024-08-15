// GET albums in the wishlist
export const getWishlist = async () => {
    const response = await fetch('/api/wishlists/');

    if (!response.ok) {
      return { error: 'Failed to fetch wishlist.' };
    }
    return response.json();
  };

// POST new album into wishlist
export const postToWishlist = async (albumId) => {
  const response = await fetch(`/api/albums/${albumId}/wishlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return { error: 'Cannot add album to wishlist.' };
  }

  return response.json();
};

// DELETE album from wishlist
export const deleteFromWishlist = async (userId, albumId) => {
    const response = await fetch(`/api/wishlists/${userId}/${albumId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return { error: 'Failed to remove album from wishlist.' };
    }

    return response.json();
  };
