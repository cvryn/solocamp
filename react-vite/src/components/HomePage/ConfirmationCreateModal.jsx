import { useNavigate } from 'react-router-dom';


function ConfirmationModal({ show, onClose, onConfirm, message, redirectPath, modalData }) {
  // console.log('modal data in confirm modal', modalData)
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    if (redirectPath) {
      navigate(redirectPath, { state: { modalData } });
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold', fontSize: "x-large" }}>{message}</p>
        <div className="modal-buttons">
          <button onClick={handleConfirm}>Yes, now</button>
          {' '}
          <button onClick={onClose}>No, later</button>
        </div>
      </div>
    </div>
  );
}


export default ConfirmationModal;
