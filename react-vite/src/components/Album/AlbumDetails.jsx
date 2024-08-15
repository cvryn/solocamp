import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PiCopyright } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { getSupportedBysByAlbum } from '../../router/supportedbys';
import SupportedByList from "../SupportedBy/SupportedByList";
import SongList from "./Song/SongList";
import AlbumItem from "./AlbumItem";
import ReviewForm from "../SupportedBy/ReviewForm";

import "./AlbumDetails.css";
import { useSelector } from "react-redux";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const AlbumDetails = () => {
  const { albumId } = useParams();
  const { album, allAlbums } = useLoaderData();
  const songs = album?.songs || [];
  const [supportedBys, setSupportedBys] = useState([]);
  const [userHasReviewed, setUserHasReviewed] = useState(false);

  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    const fetchSupportedBys = async () => {
      try {
        const data = await getSupportedBysByAlbum(albumId);
        setSupportedBys(data);

        const hasReviewed = data.some(review => review.user_id === currentUser.id);
        setUserHasReviewed(hasReviewed);
      } catch (error) {
        console.error("Error fetching supported by data:", error);
      }
    };

    fetchSupportedBys();
  }, [albumId, currentUser.id]);

  const userAlbums = allAlbums.filter(a => a.user_username === album.user_username);
  const sameGenres = allAlbums.filter(a => a.genre === album.genre);
  const shuffledGenres = shuffleArray([...sameGenres]);

  const handleReviewSubmitted = (newReview) => {
    setSupportedBys((prev) => [...prev, newReview]);
    setUserHasReviewed(true);
  };

  const handleFollowClick = () => {
    alert("Feature coming soon...");
  };

  return (
    <>
      <div id="banner-image-album-details">
        <img className="banner-art-album-details" src={album?.album_art[0].album_banner} alt="album banner art" />
      </div>
      <div id="middle-container-album-details">
        <div id="main-container-album-details">
          <div id="track-title-container-album-details">
            <h1>{album?.name}</h1>
            <h5 className="album-name-and-artist-name">from {album?.name} by {album?.user_username}</h5>
          </div>
          <br />

          <div id="album-detail-container">
            <section id="left-column-container-album-details">
              <div id="music-player-table-container">music player placeholder!</div>
              <br />
              <div id="purchasing-options-album-details">
                <span>Digital Album</span>
                <br />
                <span>Streaming + Download</span>
                <br />
                <span>Includes unlimited streaming via the free Solocamp app, plus high-quality download in MP3, FLAC, and more.</span>
                <br /><br />
                <div className="buy-track-container">
                  <button className="buy-track-button" style={{ fontSize: "18px", cursor: "pointer" }}>Buy Digital Track</button>
                  &nbsp;<span style={{ fontSize: "18px", fontWeight: "bold" }}>${album?.price}&nbsp;</span>
                  <span>USD or more</span><br />
                  <button className="send-as-gift-button-album-details" style={{ fontSize: "12px", cursor: "pointer" }}>Send as Gift</button>
                </div>
              </div>

              <br />
              <div id="track-names-album-details">
                <ul><SongList songs={songs} /></ul>
                <br />
                <span>{album?.description}</span>
                <br /><br />
              </div>

              <div className="release-date-album-details">released {album?.year}</div>
              <br />

              <div className="license-info-album-details" style={{ display: "flex", alignItems: "center" }}>
                <PiCopyright />&nbsp;all rights reserved
              </div>
            </section>

            <section id="middle-column-container-album-details">
              <div className="album-art-album-details">
                <img className="album-art-image-album-details" src={album?.album_art[0].album_art} alt="album art image" />
              </div>
              <div className="wishlist-button-album-details">
                <button className="add-to-wishlist-button">
                  <IoMdHeartEmpty style={{ fontSize: "15px" }} /> Wishlist
                </button>
              </div>
              <div id="supported-by-container">
                <span>supported by</span>
                <div className="supported-by-users-comments">
                  <SupportedByList album={album} supportedBys={supportedBys} />
                </div>


                <ReviewForm
                  albumId={albumId}
                  songs={songs}
                  onReviewSubmitted={handleReviewSubmitted}
                  canLeaveReview={!userHasReviewed && currentUser.username !== album.user_username}
                />
              </div>
            </section>

            <section id="right-column-container-album-details">
              <div id="shopping-cart-container">SHOPPING CART COMPONENT, ONLY SHOWS UP IF USER CLICKS Buy Digital Album</div>
              <br />
              <div className="user-profile-pic-album-details">
                <img className="user-profile-pic-image-album-details" src={album?.user_profile_image} alt="user profile picture image" />
              </div>
              <br />
              <div id="artist-info-container-album-details"><span>{album.user_username}</span></div>
              <br />
              <button className="follow-artist-button-album-details" onClick={handleFollowClick}>Follow</button><br />
              <div className="discography-container-album-details">
                full discography
                <ul className="discography-list-album-details">
                  {userAlbums.map(userAlbum => (
                    <div key={userAlbum.id}><AlbumItem album={userAlbum} /></div>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <div className="tags-container-album-details">
            <div className="tags-album-details">Tags</div>
            <div>{album.genre}, {album.user_username}, {album.name}</div>
          </div>
        </div>
      </div>

      <section id="bottom-container-album-details">
        <div className="may-also-like-album-details" style={{ padding: '15px 0' }}>If you like {album.genre}, you might also like:</div>
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
      <br />
    </>
  );
};

export default AlbumDetails;
