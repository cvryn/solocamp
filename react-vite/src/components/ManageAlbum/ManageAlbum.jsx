import { useEffect, useState, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkDeleteAlbum, thunkGetAlbums } from "../../redux/albumReducer"
// import { useParams } from "react-router-dom";
import './ManageAlbum.css'
import CreateAlbumButton from "../HomePage/CreateAlbumButton";
import UpdateAlbumButton from "./UpdateAlbumButton";
// import { useLoaderData } from "react-router-dom";



export default function ManageAlbum() {
    const [isLoaded, setIsLoaded] = useState(true);
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user?.id)
    // const albumArr = useSelector(state => state.albums.album?.filter(el => el.user_id == userId))
    const albumAll = useSelector(state => state.albums.album);
    const albumArr = useMemo(() => {
        return albumAll?.filter(el => el.user_id == userId);
    }, [albumAll, userId]);
    
    // let routerTest = useLoaderData();
    // let albumArr = routerTest.filter(el => el.user_id == userId)
    // console.log('testing router data', routerTest)
    useEffect(() => {
        const func = async () => {
            await dispatch(thunkGetAlbums())
            setIsLoaded(false)
        }
        func()
    }, [dispatch]);

    if (!userId) return (<h1 style={{textAlign:'center'}}>Please log in or sign up</h1>)

    // if (!isLoaded ) {
    //     return <p>Loading...</p>
    // }
    // if (!Array.isArray(albumArr)) {
    //     return <p>Loading...</p>;
    // }
    const handleDelete = async (id) => {
        await dispatch(thunkDeleteAlbum(id));
        setIsLoaded(false); 
    }

// if (albumArr.length === 0) {
//     return null;
// }
// console.log('ablum array', albumArr)
    if (albumArr && albumArr.map(el => el.album_art) ) {
        return ( isLoaded ?
            <div>Is loading...</div> :
            <div>
                <div className="container-manage-als" >
                    {
                        albumArr?.map(el => {
                            return (
                                <div className="manage-als" key={el.id}>
                                    {/* {el.album_art ? <img style={{ width: '300px' }} src={el.album_art[0].album_art}></img> : <img style={{ width: '300px' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp"></img>} */}
                                    {el?.album_art?.map(art => {
                                       return <img key={el.id} style={{ width: '100%',height:"30%",marginBottom:'10px' }} src={art.album_art}></img>
                                    })}

                                    <div>{el.name}</div>
                                    <br></br>
                                    <div>{el.year}</div>

                                    <div>{el.genre}</div>

                                    <div>${el.price}</div>
                                    <br></br>
                                    <div>{el.description}</div>
                                    <div className="update-button-manage-albums">
                                        <UpdateAlbumButton el={el} />
                                    </div>
                                    <button style={{backgroundColor:'lightgray',border:"1px solid black", marginTop:'10px'}}onClick={() => handleDelete(el.id)}>Delete Album</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="create-album-button-container">
                <div className="create-album-button-home">
                    <CreateAlbumButton />

                </div>

                </div>

            </div>
        )
    } else {
        return (
            null
            // <div className="create-first-album">
            //     <h2 style={{textAlign:'center', fontSize:"15px"}}>Post your first album on Solocamp</h2>
            //     <div className="create-album-button">
            //     <CreateAlbumButton />

            //     </div>
            // </div>
            );
    }
}
