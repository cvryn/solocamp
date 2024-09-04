import { useRef, useState } from "react";
import { CgPlayButtonR, CgPlayPauseR } from "react-icons/cg";
import { IoIosRewind, IoIosFastforward } from "react-icons/io";

const MusicPlayer = ({ songs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  // Disable the play button if there is no song URL
  const togglePlayPauseForValidUrl = () => {
    if (currentSong.song_url === "song_url") return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (currentSongIndex < songs.length - 1) {
      // Pause current song
      audioRef.current.pause();
      // Change pause back to play button
      setIsPlaying(false);
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      // Loop back to the first song!
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentSongIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      // Pause current song
      audioRef.current.pause();
      // Change pause back to play button
      setIsPlaying(false);
      setCurrentSongIndex(currentSongIndex - 1);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
      // Loop back to last song!
      setCurrentSongIndex(songs.length - 1);
    }
  };

  const handleSongEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div id="music-player-table-container" style={{ cursor: "pointer" }}>
      {isPlaying ? (
        <CgPlayPauseR
          style={{ fontSize: "3rem", cursor: "pointer" }}
          onClick={togglePlayPauseForValidUrl}
        />
      ) : (
        <CgPlayButtonR
          style={{
            fontSize: "3rem",
            cursor:
              currentSong.song_url === "song_url" ? "not-allowed" : "pointer",
            color: currentSong.song_url === "song_url" ? "gray" : "black",
          }}
          onClick={togglePlayPauseForValidUrl}
        />
      )}
      <IoIosRewind
        style={{ fontSize: "3rem", cursor: "pointer" }}
        onClick={handlePrevious}
      />
      <div
        style={{
          fontSize: "16px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "200px",
        }}
      >
        {songs.length > 0 ? currentSong.title : "No songs available"}
      </div>
      <IoIosFastforward
        style={{ fontSize: "3rem", cursor: "pointer" }}
        onClick={handleNext}
      />

      {currentSong && (
        <audio
          ref={audioRef}
          src={currentSong.song_url}
          onEnded={handleSongEnd}
        />
      )}
    </div>
  );
};

export default MusicPlayer;
