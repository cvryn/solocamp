import { SiYoutubemusic } from "react-icons/si";
// import { IoMdHeartEmpty } from "react-icons/io";
import './HomePage.css'


function SongPlaying({ selectedImageId, albumData }) {

    // console.log(albumData[selectedImageId])
    return (
        <div className='container-down-right-img-home'>
            <img style={{ width: '100%' }} src={albumData[selectedImageId - 1]?.album_art[0]?.album_art} />
            <div className="music-player">
                <SiYoutubemusic style={{ fontSize: '40px' }} onClick={() => alert('playing demo feature coming soon...')} />
                <span>play a demo</span>
            </div>
            <br></br>
            <div>from {albumData[selectedImageId - 1]?.name}</div>
            <br></br>
            <div>by {albumData[selectedImageId - 1]?.user_username}</div>
            <div>Los Angeles, California</div>
            {/* <div className='buy-now-home'>
                <div>buy now</div>
                <div className='heart-wishlist-home'>
                    <div><IoMdHeartEmpty /></div>
                    <div>wishlist</div>
                </div>
            </div> */}

        </div>

    )
}


export default SongPlaying
