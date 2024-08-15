import React, { useState } from 'react';
import './Pagination.css';
import SongPlaying from './SongPlaying';

const Pagination = ({ albumData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImageId, setSelectedImageId] = useState(null);
    const itemsPerPage = 9;

    // Calculate the indices for slicing the data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = albumData?.slice(indexOfFirstItem, indexOfLastItem);
    console.log(albumData)

    // Calculate the total number of pages
    const totalPages = Math.ceil(albumData?.length / itemsPerPage);

    // Function to handle page changes
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleImageClick = (id) => {
        setSelectedImageId(id);
    }

    return (
        <div  className='page-container-home'>
            <div>
                <div className='container-album-home'>
                    {currentItems?.map(albumEl => (
                        <div key={albumEl.id} className='container-album-detail-home'>
                            <img 
                            onClick={()=> handleImageClick(albumEl.id)}
                                style={{ width: '100%', height: '120px', width:'120px' }} src={albumEl.album_art[0].album_art} />
                            <div className='album-genre'>
                            <div>{albumEl.name}</div>
                            <div>{albumEl.user_username}</div>
                            <div>{albumEl.genre}</div>
                            </div>
                        </div>
                    ))}
                </div>
    
                {/* Pagination controls */}
                <div className='pagination'>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index + 1} 
                            onClick={() => handlePageChange(index + 1)} 
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <SongPlaying selectedImageId={selectedImageId} albumData={albumData}/>

        </div>
    );
};

export default Pagination;