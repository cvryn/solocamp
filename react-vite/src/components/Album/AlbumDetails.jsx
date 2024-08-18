import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { PiCopyright } from "react-icons/pi";
import { CgPlayButtonR } from "react-icons/cg";
import { IoIosRewind, IoIosFastforward } from "react-icons/io";
import { getSupportedBysByAlbum } from "../../router/supportedbys";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import { MdOutlineClose } from "react-icons/md";
import { postToShoppingCart, getShoppingCart, deleteFromShoppingCart } from "../../router/shoppingcart";
import { thunkShoppingCartAlbums } from "../../redux/shoppingCart";
import SupportedByList from "../SupportedBy/SupportedByList";
import SongList from "./Song/SongList";
import AlbumItem from "./AlbumItem";
import ReviewForm from "../SupportedBy/ReviewForm";
import ShoppingCart from "./ShoppingCart";
import WishlistButton from "./WishlistButton";
import { thunkWishlistAlbumAdd, thunkWishlistAlbumRemove, thunkWishlistAlbums } from '../../redux/wishlist';
import "./AlbumDetails.css";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const AlbumDetails = () => {
  const currentUser = useSelector((state) => state.session.user);
  const albumsInCollection = useSelector((state) => state.session.user?.album_in_collection);
  const dispatch = useDispatch();
  const shoppingCartObj = useSelector(state => state.shoppingCart);
  const loginModalRef = useRef();
  const { albumId } = useParams();
  const { album, allAlbums } = useLoaderData();
  const navigate = useNavigate();
  const songs = album?.songs || [];
  const albumsInWishlistObj = useSelector(state => state.wishlist);
  const albumsInWishlist = Object.values(albumsInWishlistObj);

  const [supportedBys, setSupportedBys] = useState([]);
  const [userHasReviewed, setUserHasReviewed] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [validations, setValidations] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [wishlistStatus, setWishlistStatus] = useState(albumsInWishlist.some(album => album.id === Number(albumId)));

  useEffect(() => {
    dispatch(thunkShoppingCartAlbums());
    dispatch(thunkWishlistAlbums());
  }, [dispatch]);

  useEffect(() => {
    const purchaseErrors = {};

    if (currentUser && album.user_id === currentUser.id) {
      purchaseErrors.ownAlbum = "Cannot purchase own album";
    }

    if (currentUser) {
      const isInCart = cartItems.some((item) => item.id === albumId);
      if (isInCart) {
        purchaseErrors.alreadyInCart = "Album added to shopping cart";
      }

      for (const value in shoppingCartObj) {
        if (value === albumId) {
          purchaseErrors.alreadyInCart = "Album added to shopping cart";
        }
      }

      const isInCollection = albumsInCollection?.find(album => album.id === Number(albumId));
      if (isInCollection) {
        purchaseErrors.alreadyInCollection = "You already purchased this album";
      }
    }

    setValidations(purchaseErrors);
  }, [albumId, album.user_id, currentUser, cartItems, albumsInCollection, shoppingCartObj]);

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
      if (!currentUser) return null;

      const data = await getShoppingCart();
      setCartItems(data);
    };

    fetchSupportedBys();
    fetchCartItems();
  }, [albumId, currentUser]);

  useEffect(() => {
    if (showMenu && loginModalRef.current) {
      loginModalRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showMenu]);

  const userAlbums =
    allAlbums?.filter((a) => a.user_username === album?.user_username) || [];
  const sameGenres = allAlbums?.filter((a) => a.genre === album?.genre) || [];
  const shuffledGenres = shuffleArray([...sameGenres]);

  const backgroundColor = album?.album_art?.[0]?.background_color || "#FFFFFF";
  const gradientBackground = `linear-gradient(to left, ${backgroundColor}, #FFFFFF)`;

  const handleReviewSubmitted = (newReview) => {
    setSupportedBys((prev) => [...prev, newReview]);
    setUserHasReviewed(true);
  };

  const handleAddToCart = async () => {
    if (!currentUser) {
      setShowMenu(true);
      return;
    }

    if (albumId && album.user_id !== undefined && album.user_id !== currentUser?.id) {
      await postToShoppingCart(albumId);

      const newItem = {
        id: albumId,
        name: album.name,
        price: album.price,
      };

      setCartItems((prevCartItems) => {
        if (Array.isArray(prevCartItems)) {
          return [...prevCartItems, newItem];
        }
        return [newItem];
      });
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

  const closeMenu = () => setShowMenu(false);

  const albumArt = album.album_art?.[0];

  if (!album) return <div>Loading...</div>;

  return (
    <>
      {showMenu && (
        <div className="button-login-modal-album-listings" ref={loginModalRef}>
          <OpenModalMenuItem
            itemText="Log in to add album to shopping cart"
            onItemClick={closeMenu}
            modalComponent={<LoginFormModal />}
          />
          <MdOutlineClose
            onClick={closeMenu}
            style={{ fontSize: "1.5rem", position: "absolute", right: "20px" }}
          />
        </div>
      )}

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
                by {album.user_username}
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
                    {songs.length > 0 ? album.name : "No songs available"}
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
                      className={`buy-album-button ${Object.values(validations).length > 0 ? "disabled" : ""}`}
                      onClick={handleAddToCart}
                      disabled={Object.values(validations).length > 0}
                    >
                      Buy Digital Album
                    </button>
                    {validations.ownAlbum && <div style={{ margin: "10px 0", color: "orange" }}>{validations.ownAlbum}</div>}
                    {validations.alreadyInCart && <div style={{ margin: "10px 0", color: "orange" }}>{validations.alreadyInCart}</div>}
                    {validations.alreadyInCollection && <div style={{ margin: "10px 0", color: "orange" }}>{validations.alreadyInCollection}</div>}
                    <br />
                    <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                      ${album.price}&nbsp;
                    </span>
                    <span>USD or more</span>
                    <br />
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
                <div className="wishlist-button-album-details">
                  <WishlistButton
                    albumId={albumId}
                    currentUser={currentUser}
                    isInWishlist={wishlistStatus}
                    onToggleWishlist={async () => {
                      if (!currentUser) {
                        setShowMenu(true);
                        return;
                      }
                      if (wishlistStatus) {
                        await dispatch(thunkWishlistAlbumRemove(Number(albumId)));
                        setWishlistStatus(false);
                      } else {
                        await dispatch(thunkWishlistAlbumAdd({ user_id: currentUser.id, album_id: Number(albumId) }));
                        setWishlistStatus(true);
                      }
                      dispatch(thunkWishlistAlbums());
                    }}
                  />
                </div>
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
    </>
  );
};

export default AlbumDetails;
