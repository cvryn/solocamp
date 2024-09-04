import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkUpdateAlbum } from "../../redux/albumReducer";
import { useNavigate } from "react-router-dom";


function UpdateAlbumFormModal({ el }) {
    const userId = useSelector(state => state.session.user.id)
    // console.log('who is el?', el)


    const dispatch = useDispatch();
    const [name, setName] = useState(el?.name);
    const [year, setYear] = useState(el.year);
    const [genre, setGenre] = useState(el.genre);
    const [price, setPrice] = useState(el.price);
    const [description, setDescription] = useState(el.description);
    const [albumart, setAlbumart] = useState(el.album_art ? el.album_art[0].album_art : '');
    const [albumbanner, setAlbumbanner] = useState(el.album_art ? el.album_art[0].album_banner : '');
    const [backgroundcolor, setBackgroundcolor] = useState(el.album_art ? el.album_art[0].background_color : "");
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();

    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault();

        const serverResponse = await dispatch(
            thunkUpdateAlbum({
                user_id: userId,
                album_id: el.id,
                album_art_id: el.album_art ? el.album_art[0].id : '',
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

        if (!serverResponse.errors) {
            closeModal();
            navigate('/manage-albums');
        } else {
            setErrors(serverResponse);
        }
    };
const albumId = el.id;
// console.log('album id', albumId)
    const handleUpdateSong = () => {
        navigate('/song', {state:{albumId}})
        closeModal()
    }

    return (
        <div id="container-signup-form-modal">
            <h1>Update Album</h1>

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
                {errors?.errors?.name && <p style={{ color: 'red' }}>{errors.errors.name}</p>}

                <label>
                    Year
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </label>
                {errors?.errors?.year && <p style={{ color: 'red' }}>{errors.errors.year}</p>}

                <label>
                    Genre
                    <select
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    >
                        <option value="">Select Genre</option>
                        <option value="pop">pop</option>
                        <option value="alternative">alternative</option>
                        <option value="rap">rap</option>
                        <option value="r&b">r&b</option>
                        <option value="electronic">electronic</option>
                        <option value="rock">rock</option>
                        <option value="experimental">experimental</option>
                        <option value="jazz">jazz</option>
                        <option value="country">country</option>
                    </select>
                </label>
                {errors?.errors?.genre && <p style={{ color: 'red' }}>{errors.errors.genre}</p>}

                <label>
                    Price
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                {errors?.errors?.price && errors.errors.price.map((el, index) => (
                    <div key={el.id || index} style={{ color: 'red' }}>{el}</div>
                ))}

                <label>
                    Description
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                {errors?.errors?.description && <p style={{ color: 'red' }}>{errors.errors.description}</p>}
                <label>
                    Album art
                    <input
                        type="text"
                        value={albumart}
                        onChange={(e) => setAlbumart(e.target.value)}
                        required
                    />
                </label>
                {errors?.errors?.album_art && <p style={{ color: 'red' }}>{errors.errors.album_art}</p>}
                <label>
                    Album banner
                    <input
                        type="text"
                        value={albumbanner}
                        onChange={(e) => setAlbumbanner(e.target.value)}
                    />
                </label>
                {errors?.errors?.album_banner && <p style={{ color: 'red' }}>{errors?.errors.album_banner}</p>}
                <label>
                    Background color
                    <input
                        type="text"
                        value={backgroundcolor}
                        onChange={(e) => setBackgroundcolor(e.target.value)}
                    />
                </label>
                {errors?.errors?.background_color && <p style={{ color: 'red' }}>{errors.errors.background_color}</p>}
                <button type="submit">Update</button>
                <button type="button" onClick={handleUpdateSong}>Update Songs</button>

            </form>
        </div>
    );
}

export default UpdateAlbumFormModal
