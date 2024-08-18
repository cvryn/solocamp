import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import SupportedByItems from "./SupportedByItems";
import { deleteSupportedBy, getSupportedBys } from "../../router/supportedbys";
import { useState } from "react";
import "./ManageSupportedBys.css";

const ManageSupportedBys = () => {
  const initialSupportedBys = useLoaderData();
  const navigate = useNavigate();
  const [supportedBys, setSupportedBys] = useState(initialSupportedBys);

  const currentUser = useSelector((state) => state.session.user);
  const currentUsername = currentUser?.username;

  const userSupportedBys = supportedBys.filter(
    (supportedBy) => supportedBy.user_username === currentUsername
  );

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

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
    <div style={{ minHeight: "1000px" }}>
      <br />
      <h1 style={{ padding: "10px" }}>Manage My Reviews</h1>
      <br />
      <div id="album-container-collection">
        {userSupportedBys.length > 0 ? (
          <SupportedByItems
            supportedBys={userSupportedBys}
            onDelete={handleDeleteSupportedBy}
            onEdit={handleEditSupportedBy}
          />
        ) : (
          <div className="no-supported-by-container">
            <div>No review entries found.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageSupportedBys;
