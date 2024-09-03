import React from 'react';

const ConfirmationModal = ({ onClose, onCreateAlbum, onAddSongs }) => {
    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <h2>What would you like to do?</h2>
                <button style={buttonStyle} onClick={onCreateAlbum}>
                    Just create album, add songs to it later
                </button>
                <button style={buttonStyle} onClick={onAddSongs}>
                    Add songs to this album
                </button>
                <button style={closeButtonStyle} onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
    padding: '10px 20px',
    margin: '10px 0',
    width: '100%',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
};

const closeButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'gray',
};

export default ConfirmationModal;
