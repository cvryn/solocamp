const ADD_ALBUM = 'albums/addAlbum';
const GET_ALBUMS = 'album/getAlbum';
const UPDATE_ALBUM = 'album/updateAlbum';
const DELETE_ALBUM = 'album/deleteAlbum';

const addAlbum = (album) => ({
    type: ADD_ALBUM,
    payload: album
});

const getAlbums = (payload) => ({
    type: GET_ALBUMS,
    payload: payload
})

const updateAlbum = (album) => ({
    type: UPDATE_ALBUM,
    album
})

const deleteAlbum = (id) => ({
    type: DELETE_ALBUM,
    id
})

export const thunkGetAlbums = () => async (dispatch) => {
    const res = await fetch('/api/albums', {
        method: 'GET'
    })
    if (res.ok) {
        const data = await res.json()
        // console.log('get all als?, ', data)
        dispatch(getAlbums(data))
    }else {
        const errorData = await res.json();
        return { errors: errorData.errors };
    }
}
export const thunkUpdateAlbum = (album) => async (dispatch) => {
    let {
        album_id,
        album_art_id,
        name,
        year,
        genre,
        price,
        description,
        albumart,
        albumbanner,
        backgroundcolor } = album;

    const res = await fetch(`/api/albums/${album_id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name, year, genre, price, description
        })
    })
    if (res.ok) {
        const newAl = await res.json()
        
        const resImg = await fetch(`/api/album-art/${album_art_id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                album_art: albumart,
                album_banner: albumbanner,
                background_color: backgroundcolor,
                album_id: album_id
            })
        });
        if (resImg.ok) {
            const newImg = await resImg.json();
            newAl.album_art = [newImg];
            dispatch(updateAlbum(newAl))
            return { newAl, newImg };
        }else {
            const errorData = await resImg.json();
            return { errors: errorData.errors };
        }
    }else {
        const errorData = await res.json();
        return { errors: errorData.errors };
    }
}

export const thunkCreateAlbum = (album) => async (dispatch) => {
    let { name, year, genre, price, description, albumart, albumbanner, backgroundcolor } = album;
    // console.log('title in thunk??', title)
    const response = await fetch("/api/albums/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name, year, genre, price, description
        })
    });

    if (response.ok) {
        const newAl = await response.json();
        const resImg = await fetch(`api/album-art/${newAl.id}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                album_art: albumart,
                album_banner: albumbanner,
                background_color: backgroundcolor,
                album_id: newAl.id
            })
        })
        if (resImg.ok) {
            const newImg = await resImg.json();
            // console.log('in new img thunk', newImg)
            newAl.album_art = [newImg];
            dispatch(addAlbum(newAl));
            // dispatch(updateAlbum(newAl))
            return { newAl, newImg };
        }else {
            await fetch(`/api/albums/${newAl.id}`, {
                method: 'DELETE'
            });
            // dispatch(deleteAlbum(newAl.id));
            const errorData = await resImg.json();
            return { errors: errorData.errors };
        }
    }else {
        const errorData = await response.json();
        // console.log('error in thunk for img',errorData)
        return { errors: errorData };
    }
}

export const thunkDeleteAlbum = (id) => async (dispatch) => {
    const res = await fetch(`/api/albums/${id}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        dispatch(deleteAlbum(id));
        return;
    }
}

const initialState = {};

function albumReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ALBUM:{
            return {
                ...state,
                album: [...state.album, action.payload]
            };
        }
            // return { ...state, album: action.payload }
        case GET_ALBUMS:
            return { ...state, album: action.payload }
        case UPDATE_ALBUM: {
            const newState = { ...state };
            newState.album = state.album.map(alb =>
                alb.id === action.album.id ? action.album : alb
            );
            return newState;
        }
        case DELETE_ALBUM: {
            let newState = { ...state };
            delete newState[action.id];
            newState.album = state.album.filter(alb => alb.id !== action.id);
            return newState;
        }
        default:
            return state;
    }
}

export default albumReducer