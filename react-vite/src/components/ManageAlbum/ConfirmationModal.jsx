import './ConfirmationModal.css';


function ConfirmationModal({ show, onClose, onConfirm, message }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content" >
        <p style={{ fontWeight: 'bold', fontSize: "x-large" }}>{message}</p>
        <br></br>
        <div className="modal-buttons">
          <button onClick={onConfirm} >Yes</button>
          <button onClick={onClose} >No</button>
        </div>
      </div>
    </div>
  );
}


export default ConfirmationModal;
