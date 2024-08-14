import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteSupportedByModal from "./DeleteSupportedByModal";

import "./SupportedByItems.css";

const SupportedByItems = ({ supportedBys }) => {
  console.log("THE supportedBys", supportedBys);

  console.log("!!!!!!!!!!!!!!", supportedBys.album_id);

  const currentUser = useSelector((state) => state.session.user);
  console.log("Current User:", currentUser);

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
            <Link to={`/albums/${supportedBy.album_id}`} >
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
            <div className="edit-delete-button-collection">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportedByItems;
