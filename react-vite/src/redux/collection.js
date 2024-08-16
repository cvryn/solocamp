const GET_COUNT = "albumsInCollection/GET_COUNT";


const getAllAlbums = (albums) => ({
  type: GET_COUNT,
  payload: albums
});


export const thunkCollectionAlbumCount = () => async (dispatch) => {
  const res = await fetch("/api/collection/counts");
  if (res.ok) {
    const data = await res.json()
    dispatch(getAllAlbums(data))
  }
};

const initialState = {};

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_COUNT: {
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
