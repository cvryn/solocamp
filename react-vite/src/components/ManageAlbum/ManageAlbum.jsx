import { useEffect, useState, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { thunkDeleteAlbum, thunkGetAlbums } from "../../redux/albumReducer"
import './ManageAlbum.css'
import CreateAlbumButton from "../HomePage/CreateAlbumButton";
import UpdateAlbumButton from "./UpdateAlbumButton";
import ConfirmationModal from "./ConfirmationModal"


export default function ManageAlbum() {
    const currentUser = useSelector(state => state.session.user)
    const navigate = useNavigate()
    const [isLoaded, setIsLoaded] = useState(true);
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user?.id)
    // const albumArr = useSelector(state => state.albums.album?.filter(el => el.user_id == userId))
    const albumAll = useSelector(state => state.albums.album);
    const albumArr = useMemo(() => {
        return albumAll?.filter(el => el.user_id == userId);
    }, [albumAll, userId]);

    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        if (!currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        const func = async () => {
            await dispatch(thunkGetAlbums())
            setIsLoaded(false)
        }
        func()
    }, [dispatch]);

    if (!userId) return (<h1 style={{ textAlign: 'center' }}>Please log in or sign up</h1>)

    // const handleDelete = async (id) => {
    //     await dispatch(thunkDeleteAlbum(id));
    //     setIsLoaded(false);
    // }
    const handleDelete = async (id) => {
        setShowModal(true);
        setModalData({ id });
    };

    const handleConfirmDelete = async () => {
        const { id } = modalData;

        await dispatch(thunkDeleteAlbum(id));
        setIsLoaded(false);

        setShowModal(false); // Close modal
    };

    if (albumArr && albumArr.map(el => el.album_art)) {
        return (isLoaded ?
            <div>Is loading...</div> :
            <div style={{ minHeight: "1000px" }}>
                <div className="container-manage-als" >
                    {
                        albumArr?.map(el => {
                            return (
                                <div className="manage-als" key={el.id}>
                                    <ConfirmationModal
                                        show={showModal}
                                        onClose={() => setShowModal(false)}
                                        onConfirm={handleConfirmDelete}
                                        message="Confirm Deletion"
                                    />
                                    {/* {el.album_art ? <img style={{ width: '300px' }} src={el.album_art[0].album_art}></img> : <img style={{ width: '300px' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp"></img>} */}
                                    {el?.album_art?.map(art => {
                                        return <img
                                            key={el.id}
                                            onClick={() => navigate(`/albums/${el.id}`)}
                                            style={{ width: '250px', marginBottom: '10px', aspectRatio: "1/1" }}
                                            src={art.album_art}
                                        />
                                    })}

                                    <div style={{
                                        fontWeight: 'bold',
                                        fontSize: '20px',
                                        height: "46px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}>
                                        {el.name}
                                    </div>
                                    <br></br>
                                    <div>{el.year}</div>
                                    <div>{el.genre}</div>
                                    <div>${el.price}</div>
                                    <br></br>
                                    <div style={{
                                        height: "33px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}>{el.description}</div>
                                    <div className="update-button-manage-albums button-hover-effect">
                                        <UpdateAlbumButton el={el} />
                                    </div>
                                    <button
                                        className='delete-button-manage-al button-hover-effect'
                                        onClick={() => handleDelete(el.id)}
                                    >
                                        Delete Album
                                    </button>
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
        return (null);
    }
}
