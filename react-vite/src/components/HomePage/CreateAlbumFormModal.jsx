import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkCreateAlbum } from "../../redux/albumReducer";
import { useNavigate } from "react-router-dom";

function CreateAlbumFormModal() {
    const userId = useSelector(state => state.session.user.id)
   
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [albumart, setAlbumart] = useState("");
    const [albumbanner, setAlbumbanner] = useState("");
    const [backgroundcolor, setBackgroundcolor] = useState("");
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serverResponse = await dispatch(
            thunkCreateAlbum({
                user_id: userId,
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
            <h1>Create Album</h1>
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
                <button type="submit">Create</button>

            </form>
        </div>
    );
}

export default CreateAlbumFormModal