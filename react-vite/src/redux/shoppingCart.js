const GET_ALBUMS = "getAlbumsInShoppingCart/GET_ALBUMS";
const ADD_ALBUM = "addAlbumToShopingCart/ADD_ALBUM";
const REMOVE_ALBUM = "removeAlbumFromShoppingCart/REMOVE_ALBUM";

const getAlbumsInShoppingCart = (albums) => ({
  type: GET_ALBUMS,
  payload: albums
})

const addToShoppingCart = (albumData) => ({
  type: ADD_ALBUM,
  payload: albumData
});

const removeFromShoppingCart = (shoppingCartId) => ({
  type: REMOVE_ALBUM,
  payload: shoppingCartId
});

// this thunk doesn't work, always returns a 401 authorization error
export const thunkShoppingCartAlbums = () => async (dispatch) => {
  const res = await fetch("/api/shopping-cart/all");
  if (res.ok) {
    const data = await res.json();
    dispatch(getAlbumsInShoppingCart(data));
  }
};

export const thunkShoppingCartAlbumAdd = (albumData) => async (dispatch) => {
  const res = await fetch(`/api/albums/${albumData.album_id}/shopping-cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(albumData)
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addToShoppingCart(data));
  }
};

export const thunkShoppingCartAlbumRemove = (albumId) => async (dispatch) => {
  const res = await fetch(`/api/shopping-cart/${albumId}`, {
    method: "DELETE"
  });
  if (res.ok) {
    dispatch(removeFromShoppingCart({ id: albumId }));
  }
};

const initialState = {};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALBUMS: {
      const newState = { ...state };
      action.payload.forEach(album => {
        newState[album.id] = album
      });
      return newState
    }

    case ADD_ALBUM: {
      const newState = { ...state };
      newState[action.payload.id] = action.payload
      return newState
    }

    case REMOVE_ALBUM: {
      const newState = { ...state };
      delete newState[action.payload.id]
      return newState
    }

    default:
      return state;
  }
};


export default shoppingCartReducer;
