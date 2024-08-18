// GET albums in the shopping cart
export const getShoppingCart = async () => {
  const response = await fetch('/api/shopping-cart/all');

  if (!response.ok) {
      return { error: 'Failed to fetch shopping cart.' };
  }
  return response.json();
};

// POST add albums to the shopping cart
export const postToShoppingCart = async (albumId) => {
  try {
    const response = await fetch(`/api/albums/${albumId}/shopping-cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {

      if (response.status === 401) {
        return { error: 'You need to be logged in to add items to your shopping cart.' };
      } else if (response.status === 403) {
        return { error: 'You cannot add your own album to the cart.' };
      } else if (response.status === 409) {
        return { error: 'This album is already in your shopping cart.' };
      } else if (response.status === 404) {
        return { error: 'Album not found.' };
      } else {
        return { error: 'Unable to add item to your shopping cart.' };
      }
    }

    return response.json();
  } catch (error) {
    return { error: error.message || 'An unexpected error occurred.' };
  }
};


 // DELETE album from the shopping cart
export const deleteFromShoppingCart = async (albumId) => {
  const response = await fetch(`/api/shopping-cart/${albumId}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
  });

  if (!response.ok) {
      return { error: 'Failed to remove album from shopping cart.' };
  }

  return response.json();
};
