/** Action Type Constants: */
const LOAD_SUPPORTED_BYS = "supportedBys/LOAD_SUPPORTED_BYS";

/**  Action Creators: */
const loadSupportedBys = (albumId, data) => ({
  type: LOAD_SUPPORTED_BYS,
  payload: {
    albumId,
    data,
  },
});

/** Thunk Action Creators: */
export const getSupportedBys = (albumId) => async (dispatch) => {
  const response = await fetch(`/api/albums/${albumId}/supported-bys`);

  if (response.ok) {
    const supportedBys = await response.json();

    dispatch(loadSupportedBys(albumId, supportedBys));
    return supportedBys;
  } else {
    console.error("Failed to load supported by users.");
  }
};

/** Reducer: */
const initialState = {};

/** Reducer */
const supportedBysReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUPPORTED_BYS: {
      const { albumId, data } = action.payload;
      return {
        ...state,
        [albumId]: data,
      };
    }
    default:
      return state;
  }
};

export default supportedBysReducer;
