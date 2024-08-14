import './HomePage.css';
import { SiYoutubemusic } from "react-icons/si";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { LuCassetteTape } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
// import React, { useState, useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';

function HomePage() {
    let albumData = useLoaderData();
    console.log('flag!!!!!!',albumData)

    return (
        <div className='main-home'>
            <div className="container-stroy-home">
                <div className="left-img-home">
                    <img src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                </div>
                <div className="container-right-img-home">
                    <img src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                    <img src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                    <img src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>Fans have paid artists <span style={{ fontWeight: 'bold', fontSize: '20px' }}>$1.35 billion</span> using Solocamp, and <span style={{ fontWeight: 'bold', fontSize: '20px' }}>$190 million</span> in the last year.</div>
            <div className="container-body-home">
                <div className="container-selling-home">
                    <h4 style={{ marginLeft: '0%', marginBottom: '20px' }}>SELLING RIGHT NOW</h4>
                    <div className='container-album-home'>
                        {/* {
                            albumData.map(albumEl => {
                            <div className='container-album-detail-home'>
                                <img style={{width:'100%'}} src={albumEl.album_art[0]}/>
                                <div>{albumEl.name}</div>
                                <div>{albumEl}</div>
                                <div></div>
                            </div>
                            })
                        } */}
                        <div className='container-album-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>{}</div>
                            <div>by artist</div>
                            <div>Solid for $ </div>
                        </div>
                        <div className='container-album-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Album title</div>
                            <div>by artist</div>
                            <div>Solid for $ </div>
                        </div>
                        <div className='container-album-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Album title</div>
                            <div>by artist</div>
                            <div>Solid for $ </div>
                        </div>
                        <div className='container-album-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Album title</div>
                            <div>by artist</div>
                            <div>Solid for $ </div>
                        </div>
                        <div className='container-album-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Album title</div>
                            <div>by artist</div>
                            <div>Solid for $ </div>
                        </div>
                        <div className='container-album-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Album title</div>
                            <div>by artist</div>
                            <div>Solid for $ </div>
                        </div>
                        <div className='container-album-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Album title</div>
                            <div>by artist</div>
                            <div>Solid for $ </div>
                        </div>
                    </div>
                </div>
                <div className="container-events-home">
                    <h4 style={{ marginLeft: '0%', marginBottom: '20px', paddingTop: '50px' }}>UPCOMING SOLOCAMP LIVE EVENTS</h4>
                    <div className='container-event-home'>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Event name</div>
                            <div>by group</div>
                            <br></br>
                            <div>Listening Party </div>
                            <div>Date </div>
                            <div>Time</div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Event name</div>
                            <div>by group</div>
                            <br></br>
                            <div>Listening Party </div>
                            <div>Date </div>
                            <div>Time</div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Event name</div>
                            <div>by group</div>
                            <br></br>
                            <div>Listening Party </div>
                            <div>Date </div>
                            <div>Time</div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Event name</div>
                            <div>by group</div>
                            <br></br>
                            <div>Listening Party </div>
                            <div>Date </div>
                            <div>Time</div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Event name</div>
                            <div>by group</div>
                            <br></br>
                            <div>Listening Party </div>
                            <div>Date </div>
                            <div>Time</div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Event name</div>
                            <div>by group</div>
                            <br></br>
                            <div>Listening Party </div>
                            <div>Date </div>
                            <div>Time</div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Event name</div>
                            <div>by group</div>
                            <br></br>
                            <div>Listening Party </div>
                            <div>Date </div>
                            <div>Time</div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Event name</div>
                            <div>by group</div>
                            <br></br>
                            <div>Listening Party </div>
                            <div>Date </div>
                            <div>Time</div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Event name</div>
                            <div>by group</div>
                            <br></br>
                            <div>Listening Party </div>
                            <div>Date </div>
                            <div>Time</div>
                        </div>
                        <div className='container-event-detail-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div>Event name</div>
                            <div>by group</div>
                            <br></br>
                            <div>Listening Party </div>
                            <div>Date </div>
                            <div>Time</div>
                        </div>
                    </div>
                    <div className="container-signup-home">
                        <div style={{ textAlign: 'center', marginTop: '70px', fontSize: '17px' }}>Get the best of Solocamp Daily, delivered every Friday</div>
                        <div className='sigup-input-button-home' style={{ textAlign: 'center', marginTop: '20px' }}>
                            <input placeholder='your email address'></input>
                            <button style={{ backgroundColor: 'black', color: 'white' }}>SIGN UP</button>
                        </div>
                    </div>
                    <div className="container-discover-home">
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Discover</div>
                        <p style={{ color: 'grey' }}>filter by:</p>
                        <p><FaLocationDot />&nbsp;location</p>
                        <p><LuCassetteTape />&nbsp;format</p>
                        <p><IoTimeOutline />&nbsp;time</p>
                    </div>
                    <div className='container-all-home'>
                        <p>all</p>
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


                            <div className='container-down-left-img-home'>
                                <div className='img-info-home'>
                                    <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                                    <div>Album title</div>
                                    <div>Artist</div>
                                    <div>genre</div>
                                </div>
                                <div className='img-info-home'>
                                    <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                                    <div>Album title</div>
                                    <div>Artist</div>
                                    <div>genre</div>
                                </div>
                                <div className='img-info-home'>
                                    <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                                    <div>Album title</div>
                                    <div>Artist</div>
                                    <div>genre</div>
                                </div>
                                <div className='img-info-home'>
                                    <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                                    <div>Album title</div>
                                    <div>Artist</div>
                                    <div>genre</div>
                                </div>
                            </div>
                            <div className='container-down-left-img-home'>
                                <div className='img-info-home'>
                                    <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                                    <div>Album title</div>
                                    <div>Artist</div>
                                    <div>genre</div>
                                </div>
                                <div className='img-info-home'>
                                    <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                                    <div>Album title</div>
                                    <div>Artist</div>
                                    <div>genre</div>
                                </div>
                                <div className='img-info-home'>
                                    <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                                    <div>Album title</div>
                                    <div>Artist</div>
                                    <div>genre</div>
                                </div>
                                <div className='img-info-home'>
                                    <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                                    <div>Album title</div>
                                    <div>Artist</div>
                                    <div>genre</div>
                                </div>
                            </div>
                            <div className='page-home'>
                                <button>previous</button>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <p>...</p>
                                <button>next</button>
                            </div>
                        </div>
                        <div className='container-down-right-img-home'>
                            <img style={{ width: '100%' }} src="https://res.cloudinary.com/dhukvbcqm/image/upload/v1723505751/b39ec0_1344b039b28c44d7a55449f3c83d4b41_mv2_vgm2kk.webp" />
                            <div className="music-player">
                                <SiYoutubemusic style={{ fontSize: '40px' }} />
                                <span>song playing...</span>
                                {/* <audio id="music" src="your-music-file.mp3"></audio> */}
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
                        </div>
                    </div>
                </div>
                {/* <div className="container-new-notable-home"></div>
                <div className="container-daily-home"></div> */}
            </div>
            <div className="container-footer-home">
                <div className='containter-footer-detail-home'>
                    <div className='container-text-home'>
                        <div style={{ color: 'white' }}>About</div>
                        <div style={{ color: 'white' }}>Buttons/Logos</div>
                        <div style={{ color: 'white' }}>Bandcamp Daily</div>
                        <div style={{ color: 'white' }}>Gift Cards</div>
                    </div>
                    <div className='container-text-home'>
                        <div style={{ color: 'white' }}>About</div>
                        <div style={{ color: 'white' }}>Buttons/Logos</div>
                        <div style={{ color: 'white' }}>Bandcamp Daily</div>
                        <div style={{ color: 'white' }}>Gift Cards</div>
                    </div>
                    <div className='container-text-home'>
                        <div style={{ color: 'white' }}>About</div>
                        <div style={{ color: 'white' }}>Buttons/Logos</div>
                        <div style={{ color: 'white' }}>Bandcamp Daily</div>
                        <div style={{ color: 'white' }}>Gift Cards</div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default HomePage
