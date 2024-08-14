import { useModal } from '../../context/Modal'
import { deleteSupportedBy } from '../../router/supportedbys';
import './DeleteSupportedByModal.css';

const DeleteSupportedByModal = ({ supportedById }) => {

    const { closeModal } = useModal();

    const handleDelete = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="modal-overlay-delete-supported-by">
            <div className="modal-content-delete-supported-by">
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this entry?</p>
                <div className="modal-buttons-delete-supported-by">
                    <button >Yes</button>
                    <button >No</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteSupportedByModal;
