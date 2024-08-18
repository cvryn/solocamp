// GET albums in the wishlist
export const getWishlist = async () => {
  const response = await fetch('/api/wishlist/all');

  if (!response.ok) {
    return { error: 'Failed to fetch wishlist.' };
  }
  return response.json();
};

// POST new album into wishlist
export const postToWishlist = async (albumId) => {
  try {
    const response = await fetch(`/api/albums/${albumId}/wishlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.error || 'Cannot add album to wishlist.' };
    }

    return response.json();
  } catch (error) {
    return { error: 'Failed to add album to wishlist' };
  }
};


// DELETE album from wishlist
export const deleteFromWishlist = async (albumId) => {
  try {
    const response = await fetch(`/api/wishlist/${albumId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.error || 'Failed to remove from wishlist' };
    }

    return await response.json();
  } catch (error) {
    return { error: 'Failed to remove from wishlist' };
  }
};
