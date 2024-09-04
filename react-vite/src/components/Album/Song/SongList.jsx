
const SongList = ({ songs }) => {
    return (
        <ul>
            {songs.map((song) => (
                <li key={song.id}>
                    &nbsp;{song.track_number}. {song.title}
                </li>
            ))}
        </ul>
    );
};


export default SongList;
