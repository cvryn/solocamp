import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkDeleteAlbum, thunkGetAlbums } from "../../redux/albumReducer"
// import { useParams } from "react-router-dom";
import './ManageAlbum.css'
import CreateAlbumButton from "../HomePage/CreateAlbumButton";
import UpdateAlbumButton from "./UpdateAlbumButton";



export default function ManageAlbum() {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    // console.log(userId)
    const albumArr = useSelector(state => state.albums.album?.filter(el => el.user_id == userId))
    useEffect(() => {
        const func = async () => {
            await dispatch(thunkGetAlbums())
        }
        func()
    }, [dispatch]);

    if (!Array.isArray(albumArr)) {
        return <p>No albums available.</p>;
    }
    // console.log('where am i ?',data)
    // const albumArr = data?.filter(el => el.user_id == userId);
    // console.log('logged in user als',albums)

    const handleDelete = async(id)=>{
        await dispatch(thunkDeleteAlbum(id))
    }
    console.log(albumArr)
    if(albumArr.length==0) return;
    return (
        <div>
            <div className="container-manage-als" >
                {
                    albumArr?.map(el => {
                        return (
                            <div className="manage-als" key={el.id}>
                                {el.album_art? <img style={{width:'300px'}}src={el.album_art[0].album_art}></img> : <img style={{width:'300px'}}src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723760878/solocamp/ab67616d0000b273596a3cb8d308b743451c12c0_rx5yug.jpg"></img>}
                                <div>{el.name}</div>
                                <div>{el.year}</div>
                                <div>{el.genre}</div>
                                <div>{el.price}</div>
                                <div>{el.description}</div>
                                <button onClick={()=>handleDelete(el.id)}>Delete Album</button>
                                <UpdateAlbumButton el={el}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="create-album-button-home">
            <CreateAlbumButton/>

            </div>
           
        </div>
    )
}