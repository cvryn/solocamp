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
        console.log('get all als?, ', data)
        dispatch(getAlbums(data))
    }
}
export const thunkUpdateAlbum = (album) => async (dispatch) => {
    let { 
        user_id, 
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
        method:'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name, year, genre, price, description
        })
    })
    if(res.ok){
        const newAl = await res.json()
        dispatch(updateAlbum(newAl))
        const resImg = await fetch(`/api/album-art/${album_art_id}`,{
            method:'PUT',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({
                album_art:albumart,
                album_banner:albumbanner,
                background_color:backgroundcolor,
                album_id:album_id
            })
        });
        if(resImg.ok){
            const newImg = await resImg.json();
            newAl.album_art= [newImg];
            
            return {newAl, newImg};
        }
    }
}

export const thunkCreateAlbum = (album) => async (dispatch) => {
    let { user_id, name, year,genre,price,description,albumart,albumbanner,backgroundcolor } = album;
    if(!albumart){
        albumart="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp"
    }
    if(!albumbanner){
        albumart="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp"
    }
    if(!backgroundcolor){
        albumart="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp"
    }
    const response = await fetch("/api/albums/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name, year, genre, price, description
        })
    });

    if (response.ok) {
        const newAl = await response.json();
        dispatch(addAlbum(newAl));
        const resImg = await fetch(`api/album-art/${newAl.id}`, {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                album_art:albumart,
                album_banner:albumbanner,
                background_color:backgroundcolor,
                album_id:newAl.id
            })
        })
        if(resImg.ok){
            const newImg = await resImg.json();
           console.log('in new img thunk',newImg)
            newAl.album_art= [newImg];
            
            return {newAl, newImg};
        }
        
    } 
}

export const thunkDeleteAlbum = (id) => async(dispatch) => {
    const res = await fetch(`/api/albums/${id}`, {
        method:'DELETE'
    });
    if(res.ok){
        dispatch(deleteAlbum(id));
        return;
    }
}

const initialState = {};

function albumReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ALBUM:
            return { ...state, album: action.payload }
        case GET_ALBUMS:
            return { ...state, album: action.payload }
        case DELETE_ALBUM:
            const newState = {...state};
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default albumReducer