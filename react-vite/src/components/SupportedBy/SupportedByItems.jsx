import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteReviewModal from "./DeleteSupportedByModal";
import EditSupportedByModal from "./EditSupportedByModal";
import { useModal } from "../../context/Modal";
import "./SupportedByItems.css";

const SupportedByItems = ({ supportedBys, onDelete, onEdit }) => {
  const { setModalContent } = useModal();
  const currentUser = useSelector((state) => state.session.user);

  const openDeleteModal = (supportedById) => {
    setModalContent(
      <DeleteReviewModal onDelete={() => onDelete(supportedById)} />
    );
  };

  const openEditModal = (supportedBy) => {
    setModalContent(
      <EditSupportedByModal
        supportedBy={supportedBy}
        onEditComplete={(updatedSupportedBy) => {
          const updatedSupportedBys = supportedBys.map((sb) =>
            sb.id === updatedSupportedBy.id ? updatedSupportedBy : sb
          );
          onEdit(updatedSupportedBys);
        }}
      />
    );
  };

  return (
    <div id="collection-album-items-container">
      {supportedBys.map((supportedBy) => (
        <div key={supportedBy.id} className="supported-by-container">
          <div>
            <img
              className="album-art-collection"
              src={supportedBy.album_art}
              alt={`${supportedBy.album_title} Art`}
            />
            <Link to={`/albums/${supportedBy.album_id}`}>
              <div className="supported-by-info">
                <h2>{supportedBy.album_title}</h2>
                <p>by {supportedBy?.album_posted_by_username}</p>
              </div>
            </Link>
          </div>
          <br />
          <div className="supported-by-description">
            <p>
              {currentUser?.username}:&nbsp;{supportedBy.description}
            </p>
            <br />
            <p>Favorite Track: {supportedBy.song_title}</p>
            <br />
            <div className="edit-delete-button-collection">
              <button onClick={() => openEditModal(supportedBy)}>Edit</button>
              <button onClick={() => openDeleteModal(supportedBy.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportedByItems;
