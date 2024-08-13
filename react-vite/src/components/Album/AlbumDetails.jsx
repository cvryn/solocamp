import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import { PiCopyright } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
// import { IoMdHeart } from "react-icons/io";

import { getSupportedBys } from "../../redux/supportedByReducer";

import SupportedByList from "../SupportedBy/SupportedByItems";
import SongList from "./Song/SongList";
import AlbumItem from "./AlbumItem";

import "./AlbumDetails.css";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const AlbumDetails = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  // console.log(albumId)

  const { album, allAlbums } = useLoaderData();
  console.log("Let me see that album", album);
  const songs = album?.songs || [];
  console.log("what songs are in this album", songs);
  console.log("ALL Of THEM", allAlbums);

  const supportedBys = useSelector(
    (state) => state.supportedBys[albumId] || []
  );
  console.log("who supports this album?", supportedBys);

  // Fetch supported by by album id from the backend using react thunks
  useEffect(() => {
    dispatch(getSupportedBys(albumId));
  }, [dispatch, albumId]);

  useEffect(() => {
    console.log("Supported Bys:", supportedBys);
  }, [supportedBys]);

  const userAlbums = allAlbums.filter(
    (a) => a.user_username === album.user_username
  );
  // console.log("This persons albums, please", userAlbums)

  const sameGenres = allAlbums.filter((a) => a.genre === album.genre);
  console.log("Same Genre albums", sameGenres);


  const shuffledGenres = shuffleArray([...sameGenres]);

  return (
    <>
      {/* <h1>ʕ*•ﻌ•ʔฅ</h1> */}
      <div id="banner-image-album-details">
        <img
          className="banner-art-album-details"
          src={album?.album_art[0].album_banner}
          alt="album banner art"
        />
        <div id="music-spacer">music</div>
      </div>
      <div id="middle-container-album-details">
        <div id="main-container-album-details">
          <div id="track-title-container-album-details">
            <h1>{album?.name}</h1>
            <h5 className="album-name-and-artist-name">
              from {album?.name} by {album?.user_username}{" "}
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
                <span>Digital Album</span>
                <br />
                <span>Streaming + Download</span>
                <br />
                <span>
                  Includes unlimited streaming via the free Solocamp app, plus
                  high-quality download in MP3, FLAC, and more.
                </span>
                <br />
                <br />
                <div className="buy-track-container">
                  <button
                    className="buy-track-button"
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    Buy Digital Track
                  </button>{" "}
                  &nbsp;
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    ${album?.price}&nbsp;
                  </span>
                  <span>USD or more</span>
                  <br />
                  <button
                    className="send-as-gift-button-album-details"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                  >
                    Send as Gift
                  </button>
                </div>
              </div>

              <br />
              <div id="track-names-album-details">
                <ul>
                  <SongList songs={songs} />
                </ul>
                <br />
                <span>{album?.description}</span>
                <br />
                <br />
                {/* <span>30 downloads available</span> */}
              </div>

              <div className="release-date-album-details">
                released {album?.year}
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
                  src={album?.album_art[0].album_art}
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
                SHOPPING CART COMPONENT, ONLY SHOWS UP IF USER CLICKS Buy
                Digital Album
              </div>
              <div className="user-profile-pic-album-details">
                <img
                  className="user-profile-pic-image-album-details"
                  src={album?.user_profile_image}
                  alt="user profile picture image"
                />
              </div>
              <div id="artist-info-container-album-details">
                <span>{album.user_username}</span>
                <br />
                {/* <span>artist location</span> */}
              </div>
              <button className="follow-artist-button-album-details">
                Follow
              </button>
              <br />
              <div className="discography-container-album-details">
                full discography
                <ul className="discography-list-album-details">
                  {userAlbums.map((userAlbum) => (
                    <div key={userAlbum.id}>
                      <AlbumItem album={userAlbum} />
                    </div>
                  ))}
                </ul>
              </div>
            </section>
          </div>
          <div className="tags-container-album-details">
            <div className="tags-album-details">Tags</div>
            <div>
              {album.genre}, {album.user_username}, {album.name}
            </div>
          </div>
        </div>
      </div>

      <section id="bottom-container-album-details">
        <div className="may-also-like-album-details" style={{padding: '15px 0'}}>
          If you like {album.genre}, you might also like:
        </div>
          <div className="album-art-may-also-like-album-details">
            {shuffledGenres.map((genre, index) => {
              if (index < 8) {
                return (
                  <li key={genre.id}>
                    <AlbumItem album={genre} />
                  </li>
                );
              }
              return null;
            })}
          </div>
      </section>
    </>
  );
};

export default AlbumDetails;
