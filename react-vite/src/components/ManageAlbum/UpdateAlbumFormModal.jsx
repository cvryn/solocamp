import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkUpdateAlbum } from "../../redux/albumReducer";
import { useNavigate } from "react-router-dom";


function UpdateAlbumFormModal({el}) {
    const userId = useSelector(state => state.session.user.id)
    // console.log('who is el?', el)
   
    const dispatch = useDispatch();
    const [name, setName] = useState(el.name);
    const [year, setYear] = useState(el.year);
    const [genre, setGenre] = useState(el.genre);
    const [price, setPrice] = useState(el.price);
    const [description, setDescription] = useState(el.description);
    const [albumart, setAlbumart] = useState(el.album_art[0].album_art);
    const [albumbanner, setAlbumbanner] = useState(el.album_art[0].album_banner);
    const [backgroundcolor, setBackgroundcolor] = useState(el.album_art[0].background_color);
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serverResponse = await dispatch(
            thunkUpdateAlbum({
                user_id: userId,
                album_id:el.id,
                album_art_id: el.album_art[0].id,
                name,
                year,
                genre,
                price,
                description,
                albumart,
                albumbanner,
                backgroundcolor
            })
        );
        // let newAlbum = {
        //     user_id: userId,
        //         name,
        //         year,
        //         genre,
        //         price,
        //         description,
        //         albumart,
        //         albumbanner,
        //         backgroundcolor
        // }

        if (serverResponse) {
            setErrors(serverResponse);
        } else {
            closeModal();
            navigate('/manage-albums')
        }
    };

    return (
        <div id="container-signup-form-modal">
            <h1>Update Album</h1>
            {errors.server && <p>{errors.server}</p>}

            <form id="container-signup-form"
                onSubmit={handleSubmit}
            >

                <label>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                {errors.name && <p>{errors.name}</p>}

                <label>
                    Year
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </label>
                {errors.year && <p>{errors.year}</p>}

                <label>
                    Genre
                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </label>
                {errors.genre && <p>{errors.genre}</p>}

                <label>
                    Price
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                {errors.price && <p>{errors.price}</p>}

                <label>
                    Description
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                {errors.description && <p>{errors.description}</p>}
                <label>
                    Album art
                    <input
                        type="text"
                        value={albumart}
                        onChange={(e) => setAlbumart(e.target.value)}
                        required
                    />
                </label>
                {errors.albumart && <p>{errors.albumart}</p>}
                <label>
                    Album banner
                    <input
                        type="text"
                        value={albumbanner}
                        onChange={(e) => setAlbumbanner(e.target.value)}
                    />
                </label>
                {errors.albumbanner && <p>{errors.albumbanner}</p>}
                <label>
                    Background color
                    <input
                        type="text"
                        value={backgroundcolor}
                        onChange={(e) => setBackgroundcolor(e.target.value)}
                    />
                </label>
                {errors.backgroundcolor && <p>{errors.backgroundcolor}</p>}
                <button type="submit">Update</button>

            </form>
        </div>
    );
}

export default UpdateAlbumFormModal