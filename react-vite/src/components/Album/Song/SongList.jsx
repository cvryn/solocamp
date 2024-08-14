import { CgPlayButtonR } from "react-icons/cg";

const SongList = ({ songs }) => {
    return (
        <ul>
            {songs.map((song) => (
                <li key={song.id}>
                    <CgPlayButtonR />
                    &nbsp;{song.track_number}. {song.title}
                </li>
            ))}
        </ul>
    );
};


export default SongList;
