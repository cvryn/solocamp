const GET_ALBUMS = "getAlbumsInCollection/GET_ALBUMS";


const getAllAlbums = (albums) => ({
  type: GET_ALBUMS,
  payload: albums
});


export const thunkCollectionAlbums = () => async (dispatch) => {
  const res = await fetch("/api/collection/all");
  if (res.ok) {
    const data = await res.json();
    dispatch(getAllAlbums(data));
  }
};
const initialState = {};

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALBUMS: {
      const newState = { ...state };
      action.payload.forEach(album => {
        newState[album.id] = album
      });
      return newState
    }

    default:
      return state;
  }
}


export default collectionReducer
