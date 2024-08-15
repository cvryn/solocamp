import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import SupportedByItems from "./SupportedByItems";
import { deleteSupportedBy, getSupportedBys } from "../../router/supportedbys";
import { useState } from "react";
import "./ManageSupportedBys.css";

const ManageSupportedBys = () => {
  const initialSupportedBys = useLoaderData();
  const [supportedBys, setSupportedBys] = useState(initialSupportedBys);

  const currentUser = useSelector((state) => state.session.user);
  const currentUsername = currentUser?.username;

  const userSupportedBys = supportedBys.filter(
    (supportedBy) => supportedBy.user_username === currentUsername
  );

  const handleDeleteSupportedBy = async (supportedById) => {
    await deleteSupportedBy({ params: { supportedById } });
    setSupportedBys((prevSupportedBys) =>
      prevSupportedBys.filter((supportedBy) => supportedBy.id !== supportedById)
    );
  };

  const handleEditSupportedBy = async () => {
    const updatedSupportedBys = await getSupportedBys();
    setSupportedBys(updatedSupportedBys);
  };

  return (
    <div>
      <br />
      <h1 style={{padding: '10px'}}>Manage My Reviews</h1>
      <br />
      <div id="album-container-collection">
        {userSupportedBys.length > 0 ? (
          <SupportedByItems
            supportedBys={userSupportedBys}
            onDelete={handleDeleteSupportedBy}
            onEdit={handleEditSupportedBy}
          />
        ) : (
          <p>No supported by entries found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageSupportedBys;
