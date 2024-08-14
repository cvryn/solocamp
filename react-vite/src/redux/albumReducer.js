const ADD_ALBUM = 'albums/addAlbum'

const addAlbum = (album) => ({
    type: ADD_ALBUM,
    payload: album
});


export const thunkCreateAlbum = (album) => async(dispatch) => {
    const {user_id, name, year, genre, price, description} = album;
    console.log('flaggggg',name)
    const response = await fetch("/api/albums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user_id, name, year, genre, price, description
        })
      });
    
      if(response.ok) {
        const data = await response.json();
        dispatch(addAlbum(data));
      } else if (response.status < 500) {
        const errorMessages = await response.json();
        return errorMessages
      } else {
        return { server: "Something went wrong. Please try again" }
      }
}


const initialState = {};

function albumReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ALBUM:
            return {...state, album: action.payload}
        default:
            return state;
    }
}

export default albumReducer