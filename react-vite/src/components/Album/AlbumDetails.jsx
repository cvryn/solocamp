import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { PiCopyright } from "react-icons/pi";
import { CgPlayButtonR } from "react-icons/cg";
import { IoIosRewind, IoIosFastforward } from "react-icons/io";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { getSupportedBysByAlbum } from "../../router/supportedbys";
import { postToShoppingCart, getShoppingCart, deleteFromShoppingCart } from "../../router/shoppingcart";
import SupportedByList from "../SupportedBy/SupportedByList";
import SongList from "./Song/SongList";
import AlbumItem from "./AlbumItem";
import ReviewForm from "../SupportedBy/ReviewForm";
import ShoppingCart from "./ShoppingCart";
import { thunkWishlistAlbumAdd, thunkWishlistAlbumRemove } from "../../redux/wishlist";
import "./AlbumDetails.css";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const AlbumDetails = () => {
  const { albumId } = useParams();
  const { album, allAlbums } = useLoaderData();
  const navigate = useNavigate();
  const songs = album?.songs || [];
  const [supportedBys, setSupportedBys] = useState([]);
  const [userHasReviewed, setUserHasReviewed] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSupportedBys = async () => {
      if (albumId) {
        const data = await getSupportedBysByAlbum(albumId);
        setSupportedBys(data);

        const hasReviewed = currentUser
          ? data.some((review) => review.user_id === currentUser.id)
          : false;
        setUserHasReviewed(hasReviewed);
      }
    };

    const fetchCartItems = async () => {
      const data = await getShoppingCart();
      setCartItems(data);
    };

    fetchSupportedBys();
    fetchCartItems();
  }, [albumId, currentUser]);

  useEffect(() => {
    if (currentUser && album) {
      setIsInWishlist(!!wishlist[album.id]);
    }
  }, [currentUser, album, wishlist]);

  const handleReviewSubmitted = (newReview) => {
    setSupportedBys((prev) => [...prev, newReview]);
    setUserHasReviewed(true);
  };

  const handleAddToCart = async () => {
    if (albumId) {
      const result = await postToShoppingCart(albumId);

      if (result.error) {
        alert(result.error);
        return;
      }

      const newItem = {
        id: albumId,
        name: album.name,
        price: album.price,
      };

      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    }
  };

  const handleRemoveItem = async (itemId) => {
    const result = await deleteFromShoppingCart(itemId);

    if (result.error) {
      alert(result.error);
      return;
    }

    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleFollowClick = () => {
    alert("Feature coming soon...");
  };

  const handleWishlistToggle = async () => {
    if (!currentUser) {
      alert("You need to be logged in to add to the wishlist.");
      return;
    }

    if (isInWishlist) {
      await dispatch(thunkWishlistAlbumRemove(album.id));
      setIsInWishlist(false);
    } else {
      await dispatch(thunkWishlistAlbumAdd({ album_id: album.id }));
      setIsInWishlist(true);
    }
  };

  if (!album) {
    return <div>Loading...</div>;
  }

  const albumArt = album.album_art?.[0];
  const firstSong = songs[0];
  const userAlbums = allAlbums?.filter((a) => a.user_username === album?.user_username) || [];
  const sameGenres = allAlbums?.filter((a) => a.genre === album?.genre) || [];
  const shuffledGenres = shuffleArray([...sameGenres]);
  const backgroundColor = album?.album_art?.[0]?.background_color || "#FFFFFF";
  const gradientBackground = `linear-gradient(to left, ${backgroundColor}, #FFFFFF)`;

  return (
    <div style={{ background: gradientBackground }}>
      <div id="banner-image-album-details">
        <img
          className="banner-art-album-details"
          src={albumArt?.album_banner}
          alt="album banner art"
        />
      </div>
      <div id="middle-container-album-details">
        <div id="main-container-album-details">
          <div id="track-title-container-album-details">
            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>
              {album.name}
            </h1>
            <div className="album-name-and-artist-name">
              from {album.name} by {album.user_username}
            </div>
          </div>
          <br />
          <div id="album-detail-container">
            <section id="left-column-container-album-details">
              <div id="music-player-table-container">
                <button
                  className="play-button-placeholder"
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={handleFollowClick}
                >
                  <CgPlayButtonR />
                </button>
                <button
                  className="rewind-button-album-details"
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={handleFollowClick}
                >
                  <IoIosRewind />
                </button>
                <div style={{ fontSize: "16px" }}>
                  {firstSong ? firstSong.title : "No songs available"}
                </div>
                <button
                  className="forward-button-album-details"
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={handleFollowClick}
                >
                  <IoIosFastforward />
                </button>
              </div>

              <div
                id="purchasing-options-album-details"
                style={{ paddingTop: "35px" }}
              >
                <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Digital Album
                </span>
                <br />
                <span style={{ fontSize: "12px", color: "RGB(136, 136, 136)" }}>
                  Streaming + Download
                </span>
                <br />
                <span>
                  Includes unlimited streaming via the free Solocamp app, plus
                  high-quality download in MP3, FLAC, and more.
                </span>
                <br />
                <br />
                <div className="buy-album-container">
                  <button
                    className="buy-album-button"
                    onClick={handleAddToCart}
                  >
                    Buy Digital Album
                  </button>
                  &nbsp;
                  <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                    ${album.price}&nbsp;
                  </span>
                  <span>USD or more</span>
                  <br />
                  <button
                    className="send-as-gift-button-album-details"
                    onClick={handleFollowClick}
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
                <span>{album.description}</span>
                <br />
                <br />
              </div>
              <div className="release-date-album-details">
                released {album.year}
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
              <div className="album-art-album-details">
                <img
                  className="album-art-image-album-details"
                  src={albumArt?.album_art}
                  alt="album art image"
                />
              </div>
              {album.user_username !== currentUser?.username && (
                <div className="wishlist-button-album-details">
                  <button
                    className="add-to-wishlist-button"
                    onClick={handleWishlistToggle}
                  >
                    {isInWishlist ? (
                      <>
                        <IoMdHeart style={{ fontSize: "15px" }} />
                        Wishlist - added
                      </>
                    ) : (
                      <>
                        <IoMdHeartEmpty style={{ fontSize: "15px" }} />
                        Wishlist
                      </>
                    )}
                  </button>
                </div>
              )}
              <br />
              <div id="supported-by-container">
                <span>supported by</span>
                <div className="supported-by-users-comments">
                  <SupportedByList album={album} supportedBys={supportedBys} />
                </div>
                {currentUser ? (
                  <ReviewForm
                    albumId={albumId}
                    songs={songs}
                    onReviewSubmitted={handleReviewSubmitted}
                    canLeaveReview={
                      !userHasReviewed &&
                      currentUser?.username !== album.user_username
                    }
                  />
                ) : (
                  <div>Please log in to leave a review.</div>
                )}
              </div>
            </section>

            <section id="right-column-container-album-details">
              <div id="shopping-cart-container">
                <ShoppingCart
                  cartItems={cartItems}
                  onRemoveItem={handleRemoveItem}
                  onCheckout={handleCheckout}
                />
              </div>
              <br />
              <div className="user-profile-pic-album-details">
                <img
                  className="user-profile-pic-image-album-details"
                  src={album.user_profile_image}
                  alt="user profile picture image"
                />
              </div>
              <br />
              <div id="artist-info-container-album-details">
                <span>{album.user_username}</span>
              </div>
              <br />
              <button
                className="follow-artist-button-album-details"
                onClick={handleFollowClick}
              >
                Follow
              </button>
              <br />
              <div className="discography-container-album-details">
                full discography
                <ul className="discography-list-album-details">
                  {userAlbums.map((userAlbum) => (
                    <li key={userAlbum.id}>
                      <AlbumItem album={userAlbum} />
                    </li>
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
        <div
          className="may-also-like-album-details"
          style={{ padding: "15px 0" }}
        >
          If you like {album.genre}, you might also like:
        </div>
        <div className="album-art-may-also-like-album-details">
          {shuffledGenres.slice(0, 8).map((genre) => (
            <li key={genre.id}>
              <AlbumItem album={genre} />
            </li>
          ))}
        </div>
      </section>
      <br />
    </div>
  );
};

export default AlbumDetails;
