const GET_ALBUMS = "getAlbumsInCollection/GET_ALBUMS";
const ADD_ALBUMS = "addAlbumsToCollection/ADD_ALBUMS"

const getAllAlbumsInCollection = (albums) => ({
  type: GET_ALBUMS,
  payload: albums
});

const addToCollections = (albumData) => ({
  type: ADD_ALBUMS,
  payload: albumData
});

export const thunkCollectionAlbums = () => async (dispatch) => {
  const res = await fetch("/api/collection/all");
  if (res.ok) {
    const data = await res.json();
    dispatch(getAllAlbumsInCollection(data));
  }
};

export const thunkCollectionAlbumAdd = (albumData) => async (dispatch) => {
  const res = await fetch(`/api/albums/${albumData.album_id}/collection`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(albumData)
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addToCollections(data));
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

    case ADD_ALBUMS: {
      const newState = { ...state };
      newState[action.payload.id] = action.payload
      return newState
    }

    default:
      return state;
  }
}


export default collectionReducer
