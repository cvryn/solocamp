import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";

import { PiCopyright } from "react-icons/pi";
import { CgPlayButtonR } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";

import { getSupportedBys } from "../../redux/supportedByReducer";

import SupportedByList from "../SupportedBy/SupportedByItems";

import "./AlbumDetails.css";

const AlbumDetails = () => {

    const dispatch = useDispatch();
    const { albumId } = useParams()
    // console.log(albumId)

    const supportedBys = useSelector((state)=> state.supportedBys[albumId] || [])
    console.log('who supports this album?', supportedBys)

    useEffect(() => {
        dispatch(getSupportedBys(albumId));
    }, [dispatch, albumId])


    useEffect(() => {
        console.log('Supported Bys:', supportedBys);
    }, [supportedBys]);

  return (
    <>
      {/* <h1>ʕ*•ﻌ•ʔฅ</h1> */}
      <div id="banner-image-album-details">
        <img
          className="banner-art-album-details"
          src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723501235/solocamp/joji_smithereens_banner_p0m1t6.png"
          alt="album banner art"
        />
        <div id="music-spacer">music</div>
      </div>
      <div id="middle-container-album-details">
        <div id="track-title-container-album-details">
          <h1>Track title - Something!</h1>
          <h5 className="album-name-and-artist-name">
            from (album name) by (artist name){" "}
          </h5>
        </div>
        <br />
        <div id="album-detail-container">
          <section id="left-column-container-album-details">
            {/* <h1>ʕ*•͈ ﻌ •͈ʔฅ left</h1> */}
            <div id="music-player-table-container">
              music player placeholder!
            </div>
            <br />
            <div id="purchasing-options-album-details">
              <span>Digital Track</span>
              <span>Streaming + Download</span>
              <br />
              <span>
                Includes unlimited straming via the free Solocamp app, plus
                high-quality download in MP3, FLAC, and more.
              </span>
              <div className="buy-track-container">
                <button className="buy-track-button">Buy Digital Track</button>{" "}
                &nbsp;
                <span>$MONEYS &nbsp;</span>
                <span>USD or more</span>
                <br />
                <button className="send-as-gift-button-album-details">
                  Send as Gift
                </button>
              </div>
              <br />
            </div>
            <div id="full-digital-discography">
              <a href="">SPOT TO CLICK OTHER ALBUMS FROM THE SAME ARTIST</a>
            </div>
            <br />
            <div id="track-names-album-details">
              <ul>
                {/* could just map through the tracks */}
                <li>
                  <CgPlayButtonR />
                  &nbsp;1. Track 1
                </li>
                <li>
                  <CgPlayButtonR />
                  &nbsp;2. Track 2
                </li>
                <li>
                  <CgPlayButtonR />
                  &nbsp;3. Track 3
                </li>
                <li>
                  <CgPlayButtonR />
                  &nbsp;4. Track 4
                </li>
                <li>
                  <CgPlayButtonR />
                  &nbsp;5. Track 5
                </li>
                <li>
                  <CgPlayButtonR />
                  &nbsp;6. Track 6
                </li>
              </ul>
              <br />
              <span>ALBUM DESCRIPTION!</span>
              <br />
              <br />
              {/* <span>30 downloads available</span> */}
            </div>

            <div className="release-date-album-details">
              released (YEAR album was released)
            </div>
            <br />

            <div
              className="license-info-album-details"
              style={{ display: "flex", alignItems: "center" }}
            >
              <PiCopyright />
              &nbsp;all rights reserved
            </div>
          </section>
          <section id="middle-column-container-album-details">
            {/* <h1>ʕ*•͈ ﻌ •͈ʔฅ middle</h1> */}
            <div className="album-art-album-details">
              <img
                className="album-art-image-album-details"
                src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723501284/solocamp/JOJI_SMITHEREENS_pgr5bh.jpg"
                alt="album art image"
              />
            </div>
            <div className="wishlist-button-album-details">
              <button className="add-to-wishlist-button">
                <IoMdHeartEmpty style={{ fontSize: "15px" }} />
                Wishlist
              </button>
            </div>
            <div id="supported-by-container">
                <span>supported by</span>
                <div className="supported-by-users-comments">
                    <SupportedByList supportedBys={supportedBys} />
                </div>
            </div>
          </section>
          <section id="right-column-container-album-details">
            {/* <h1>ʕ*•͈ ﻌ •͈ʔฅ right</h1> */}
            <div id="shopping-cart-container">
              {" "}
              SHOPPING CART COMPONENT, ONLY SHOWS UP IF USER CLICKS Buy Digital
              Album
            </div>
            <div className="user-profile-pic-album-details">
              <img
                className="user-profile-pic-image-album-details"
                src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723501277/solocamp/joji_profile_jtbizm.jpg"
                alt="user profile picture image"
              />
            </div>
            <div id="artist-info-container-album-details">
              <span>ARTIST NAME</span>
              <br />
              <span>artist location</span>
            </div>
            <button className="follow-artist-button-album-details">
              Follow
            </button>
            <br />
            <div className="discography-container-album-details">
              discography
              <ul className="discography-list-album-details">
                <div>
                  <img
                    className="album-art-discography-album-details"
                    src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723527850/solocamp/Joji_Ballads_1_sg5s8y.jpg"
                  ></img>
                  Component One
                </div>
                <div>
                  <img
                    className="album-art-discography-album-details"
                    src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723527850/solocamp/Joji_Ballads_1_sg5s8y.jpg"
                  ></img>
                  Component Two
                </div>
                <div>
                  <img
                    className="album-art-discography-album-details"
                    src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723527850/solocamp/Joji_Ballads_1_sg5s8y.jpg"
                  ></img>
                  Component Three
                </div>
              </ul>
            </div>
          </section>
        </div>
        <div className="tags-container-album-details">
          <div className="tags-album-details">Tags</div>
          <div>
            album genre, artist name, album name, track number: (song_id),
          </div>
        </div>
      </div>

      <section id="bottom-container-album-details">
        <div className="may-also-like-album-details">
          <ul className="album-art-may-also-like-album-details">
            <div className='albums-also-like-album-details'>
              <img
                className="album-art-discography-album-details"
                src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723527850/solocamp/Joji_Ballads_1_sg5s8y.jpg"
              ></img>
              Component Three
            </div>
            <div className='albums-also-like-album-details'>
              <img
                className="album-art-discography-album-details"
                src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723527854/solocamp/Joji_In_Tongues_eowwa1.jpg"
              ></img>
              Component Three
            </div>
            <div className='albums-also-like-album-details'>
              <img
                className="album-art-discography-album-details"
                src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723527851/solocamp/Joji_Nectar_uofubc.jpg"
              ></img>
              Component Four
            </div>
            <div className='albums-also-like-album-details'>
              <img
                className="album-art-discography-album-details"
                src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723527850/solocamp/Joji_Ballads_1_sg5s8y.jpg"
              ></img>
              Component Five
            </div>
            <div className='albums-also-like-album-details'>
              <img
                className="album-art-discography-album-details"
                src="https://res.cloudinary.com/dfj8lsesn/image/upload/v1723529390/solocamp/joji_in_tongeues_album_art_zpfnv8.jpg"
              ></img>
              Component Six
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AlbumDetails;
