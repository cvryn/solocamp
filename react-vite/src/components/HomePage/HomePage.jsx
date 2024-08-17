import './HomePage.css';
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { LuCassetteTape } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import Pagination from './Pagination';
import { BsCalendar2Date } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { FaMicrophoneLines } from "react-icons/fa6";

// import CreateAlbumButton from './CreateAlbumButton';



const HorizontalScrollImages = () => {

    const navigate = useNavigate();
    let albumData = useLoaderData();
    // if (!Array.isArray(albumData)) {
    //     return <p>No albums available.</p>;  // Handle cases where data isn't an array
    // }

    const [displayedImages, setDisplayedImages] = useState(albumData.slice(0, 8));
    const containerRef = useRef(null);
    const imageIndex = useRef(8);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollLeft += 100;

                if (containerRef.current.scrollLeft + containerRef.current.clientWidth >= containerRef.current.scrollWidth) {
                    const newImages = [...displayedImages.slice(1), albumData[imageIndex.current]];
                    setDisplayedImages(newImages);
                    imageIndex.current = (imageIndex.current + 1) % albumData.length;
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [displayedImages, albumData]);

    return (
        <div
            ref={containerRef}
            style={{ width: '100%', overflowX: 'hidden', whiteSpace: 'nowrap' }}
        >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {displayedImages.map((el, index) => (
                    <div className='rolling-home' key={index}>
                        {/* {el.album_art? <img style={{width:'300px'}}src={el.album_art[0].album_art}></img> : <img style={{width:'300px'}}src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723760878/solocamp/ab67616d0000b273596a3cb8d308b743451c12c0_rx5yug.jpg"></img>} */}
                        {el.album_art ? <img onClick={() => navigate(`/albums/${el.id}`)} key={index} src={el.album_art[0].album_art} alt={`Image ${index}`} style={{ height: '200px', width: 'auto', marginRight: '10px' }} /> : <img onClick={() => navigate(`/albums/${el.id}`)} key={index} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723760878/solocamp/ab67616d0000b273596a3cb8d308b743451c12c0_rx5yug.jpg" style={{ height: '200px', width: 'auto', marginRight: '10px' }} />}
                        <br></br>
                        <div style={{ fontWeight: 'bold' }}>{el.name}</div>
                        <div>By {el.user_username}</div>
                        <div>Sold for ${el.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

function HomePage() {
    let albumData = useLoaderData();
    if (!albumData) return;
    // const dispatch = useDispatch();
    // useEffect(()=> {
    //     let func = async ()=> {
    //         await dispatch(thunkGetAlbums())
    //     }
    //     func()
    // },[dispatch])
    // let albumData = useSelector(state=> state.albums.album)

    // console.log('flag!!!!!!',albumData[0])
    let imageUrls = albumData ? albumData.map(album => album.album_art[0].album_art) : "https://res.cloudinary.com/dhukvbcqm/image/upload/v1723760878/solocamp/ab67616d0000b273596a3cb8d308b743451c12c0_rx5yug.jpg";

    // const navigate = useNavigate()
    // const handleAlbumCreate = () => {
    //     navigate('/albums/new')
    // }

    return (
        <div className='main-home'>
            <div className="container-stroy-home">
                <div className="left-img-home">
                    <img src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723826693/solocamp/i_7_fejxuv.webp" />
                </div>
                <div className="container-right-img-home">
                    <img src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723826695/solocamp/i_10_suur8v.webp" />
                    <img src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723826694/solocamp/i_6_k6byvw.webp" />
                    <img src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723826694/solocamp/i_5_ypqyof.webp" />
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>Fans have paid artists <span style={{ fontWeight: 'bold', fontSize: '20px' }}>$1.35 billion</span> using Solocamp, and <span style={{ fontWeight: 'bold', fontSize: '20px' }}>$190 million</span> in the last year.</div>
            <div className="container-body-home">
                <div className="container-selling-home">
                    <h4 style={{ marginLeft: '0%', marginBottom: '20px' }}>SELLING RIGHT NOW</h4>
                    <div className="container-stroy-home">
                        <HorizontalScrollImages images={imageUrls} />
                    </div>
                    {/* <div className='container-album-home'>
                        {
                            albumData.map(albumEl => {
                                return (
                                    <div className='container-album-detail-home'>
                                        <img style={{ width: '100%', height: '100px', width: '100px' }} src={albumEl.album_art[0].album_art} />
                                        <div>{albumEl.name}</div>
                                        <div>Artist: {albumEl.user_username}</div>
                                        <div>Solid for ${albumEl.price}</div>
                                    </div>
                                )
                            })
                        }
                    </div> */}
                </div>
                <div className="container-events-home">
                    <h4 style={{ marginLeft: '0%', marginBottom: '20px', paddingTop: '50px' }}>UPCOMING SOLOCAMP LIVE EVENTS</h4>
                    <div className='container-event-home'>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%', height: '60%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723825996/solocamp/i_3_njeoqt.webp" />
                            <div>
                                <br></br>
                                <div><FaMicrophoneLines />{' '}Chuck Johnson</div>
                                <div><GrGroup />{' '}Sun Glories Listening Party</div>
                                <br></br>
                                <div><IoMusicalNotesOutline />{' '}Listening Party </div>
                                <div><BsCalendar2Date /> {' '}August 15, 2024 </div>
                            </div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%', height: '60%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723825996/solocamp/i_ii1lxc.webp" />
                            <div>
                                <br></br>
                                <div><FaMicrophoneLines />{' '}Scuba</div>
                                <div><GrGroup />{' '}D:U:2</div>
                                <br></br>
                                <div><IoMusicalNotesOutline />{' '}Listening Party </div>
                                <div><BsCalendar2Date />{' '}August 15, 2024  </div>
                            </div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%', height: '60%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723825996/solocamp/i_1_ewvkqd.webp" />
                            <div>
                                <br></br>
                                <div><FaMicrophoneLines />{' '}Thotcrime</div>
                                <div><GrGroup />{' '}Connection Party</div>
                                <br></br>
                                <div><IoMusicalNotesOutline />{' '}Listening Party </div>
                                <div><BsCalendar2Date />{' '}August 15, 2024  </div>
                            </div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%', height: '60%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723825996/solocamp/i_2_tfrgid.webp" />
                            <div>
                                <br></br>
                                <div><FaMicrophoneLines />{' '}Charly Blis</div>
                                <div><GrGroup />{' '}FOREVER</div>
                                <br></br>
                                <div><IoMusicalNotesOutline />{' '}Listening Party </div>
                                <div><BsCalendar2Date />{' '}August 15, 2024  </div>
                            </div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%', height: '60%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723826193/solocamp/i_4_unvwmk.webp" />
                            <div>
                                <br></br>
                                <div><FaMicrophoneLines />{' '}Galiano</div>
                                <div><GrGroup />{' '}Halfway Somewhere</div>
                                <br></br>
                                <div><IoMusicalNotesOutline />{' '}Listening Party </div>
                                <div><BsCalendar2Date />{' '}August 15, 2024  </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container-signup-home"> */}
                        {/* <div style={{ textAlign: 'center', marginTop: '70px', fontSize: '17px' }}>Your Albums on Solocamp</div> */}
                        {/* <div className='sigup-input-button-home' style={{ textAlign: 'center', marginTop: '20px' }}> */}
                            {/* <input placeholder='your email address'></input> */}
                            {/* <button onClick={()=> handleAlbumCreate()}style={{ backgroundColor: 'black', color: 'white' }}>CREATE ALBUM</button> */}
                            {/* <CreateAlbumButton/> */}
                            {/* <button onClick={() => navigate('/manage-albums')}>Manage Albums</button> */}
                        {/* </div> */}
                    {/* </div> */}
                    <div className="container-discover-home">
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Discover</div>
                        <p style={{ color: 'grey' }}>filter by:</p>
                        <p><FaLocationDot />&nbsp;location</p>
                        <p><LuCassetteTape />&nbsp;format</p>
                        <p><IoTimeOutline />&nbsp;time</p>
                    </div>
                    <div className='container-all-home'>
                        <p style={{ backgroundColor: 'black' }}>all</p>
                        <p>pop</p>
                        <p>rock</p>
                        <p>electronic</p>
                        <p>R&B</p>
                    </div>
                    <div className='container-all-home bestselling'>
                        <p>best-selling</p>
                        <p>new arrivals</p>
                        <p>artist-recommended</p>
                    </div>
                    <div className='container-all-home artist'>
                        <p>artists from anywhere</p>
                        <p>amsterdam</p>
                        <p>atlanta</p>
                    </div>
                    <div className='container-img-list-home'>
                        <div className='container-two-list-left-home'>
                            <div className='container-album-home'>
                                <Pagination albumData={albumData} />
                                {/* {
                                    albumData.map(albumEl => {
                                        return (
                                            <div className='container-album-detail-home'>
                                                <img style={{ width: '100%', height: '100px', width: '100px' }} src={albumEl.album_art[0].album_art} />
                                                <div>{albumEl.name}</div>
                                                <div>Artist: {albumEl.user_username}</div>
                                                <div>Solid for ${albumEl.price}</div>
                                            </div>
                                        )
                                    })
                                } */}
                            </div>
                        </div>
                        {/* <SongPlaying/> */}
                        {/* <div className='container-down-right-img-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div className="music-player">
                                <SiYoutubemusic style={{ fontSize: '40px' }} />
                                <span>song playing...</span>
                            </div>
                            <br></br>
                            <div>from the album title</div>
                            <br></br>
                            <div>by Artist</div>
                            <div>Los Angeles, California</div>
                            <div className='buy-now-home'>
                                <div>buy now</div>
                                <div className='heart-wishlist-home'>
                                    <div><IoMdHeartEmpty /></div>
                                    <div>wishlist</div>
                                </div>
                                <div>hear more</div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="container-new-notable-home"></div>
                <div className="container-daily-home"></div> */}
            </div>

        </div>
    )

}

export default HomePage
