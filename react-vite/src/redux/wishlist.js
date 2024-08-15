const GET_ALBUM_COUNT = "albumsInWishlist/GET_ALBUM_COUNT";

export const getAllAlbums = (albums) => ({
  type: GET_ALBUM_COUNT,
  payload: albums
});


export const thunkWishlistAlbumCount = () => async (dispatch) => {
  const res = await fetch("/api/wishlist/counts");
  if (res.ok) {
    const data = await res.json()
    dispatch(getAllAlbums(data))
  }
};

const initialState = {};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALBUM_COUNT: {
      const newState = { ...state };
      action.payload.forEach(album => {
        newState[album.id] = album
      });
      return newState
    };

    default:
      return state;
  };
}


export default wishlistReducer
