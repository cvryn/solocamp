/** Action Type Constants: */
const LOAD_SUPPORTED_BYS = "supportedBys/LOAD_SUPPORTED_BYS";
// const ADD_SUPPORTED_BY = "supportedBys/ADD_SUPPORTED_BY";
// const DELETE_SUPPORTED_BY = "supportedBys/DELETE_SUPPORTED_BY";
// const UPDATE_SUPPORTED_BY = "supportedBys/UPDATE_SUPPORTED_BY";

/** Actions */
export const getSupportedBys = (supportedBys) => ({
  type: LOAD_SUPPORTED_BYS,
  payload: supportedBys,
});

// export const addSupportedBy = (supportedBy) => ({
//   type: ADD_SUPPORTED_BY,
//   payload: supportedBy,
// });

// export const deleteSupportedBy = (supportedById) => ({
//   type: DELETE_SUPPORTED_BY,
//   payload: supportedById,
// });

// export const updateSupportedBy = (supportedBy) => ({
//   type: UPDATE_SUPPORTED_BY,
//   payload: supportedBy,
// });

/** THUNKS */

// Fetch all supported by items for a specific album
export const fetchSupportedBys = (albumId) => async (dispatch) => {
  const response = await fetch(`/api/supported-by/${albumId}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch supported by items.");
  }

  const data = await response.json();
  dispatch(getSupportedBys(data));
};

// // Create a new supported by for a specific album
// export const createSupportedBy = (albumId, supportedByData) => async (dispatch) => {
//   const response = await fetch(`/api/albums/${albumId}/supported-bys`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(supportedByData),
//   });

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(addSupportedBy(data));
//   } else {
//     const errorData = await response.json();
//     throw new Error(errorData.errors || "Failed to create a new supported by.");
//   }
// };

// // Remove a supported by by ID
// export const removeSupportedBy = (supportedById) => async (dispatch) => {
//   const response = await fetch(`/api/supported-by/${supportedById}`, {
//     method: 'DELETE',
//   });

//   if (response.ok) {
//     dispatch(deleteSupportedBy(supportedById));
//   } else {
//     const errorData = await response.json();
//     throw new Error(errorData.error || "Failed to remove supported by.");
//   }
// };

// // Edit an existing supported by
// export const editSupportedBy = (supportedById, updatedData) => async (dispatch) => {
//   const response = await fetch(`/api/supported-by/${supportedById}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedData),
//   });

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(updateSupportedBy(data));
//   } else {
//     const errorData = await response.json();
//     throw new Error(errorData.errors || "Failed to update supported by.");
//   }
// };

const initialState = {};

/** Reducer */
const supportedBysReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUPPORTED_BYS: {
      const supportedBysById = {};
      action.payload.forEach((supportedBy) => {
        supportedBysById[supportedBy.id] = supportedBy;
      });
      return { ...state, ...supportedBysById };
    }

    // case ADD_SUPPORTED_BY:

    //   return { ...state, [action.payload.id]: action.payload };

    //   case DELETE_SUPPORTED_BY:
    //     const { [action.payload]: deleted, ...remainingState } = state;
    //     return remainingState;

    // case UPDATE_SUPPORTED_BY:

    //   return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};

export default supportedBysReducer;
