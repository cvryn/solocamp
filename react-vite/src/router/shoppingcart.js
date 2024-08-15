// GET albums in the shopping cart
export const getShoppingCart = async () => {
  const response = await fetch('/api/shopping-cart/');

  if (!response.ok) {
      return { error: 'Failed to fetch shopping cart.' };
  }
  return response.json();
};


export const postToShoppingCart = async (albumId) => {
  const response = await fetch(`/api/albums/${albumId}/shopping-cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return { error: 'Cannot add your own items to the shopping cart.' };
  }

  return response.json();
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
