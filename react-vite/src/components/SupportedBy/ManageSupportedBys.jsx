import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
SupportedByItems;

import "./ManageSupportedBys.css";
import SupportedByItems from "./SupportedByItems";

const ManageSupportedBys = () => {
  const supportedBys = useLoaderData();
  console.log("who supports", supportedBys);

  const currentUser = useSelector((state) => state.session.user);
  console.log("Whoooooooo", currentUser);

  const currentUsername = currentUser?.username;

  const userSupportedBys = supportedBys.filter(
    (supportedBy) => supportedBy.user_username === currentUsername
  );

  return (
    <div>
      <br />
      <h1>Manage Supported Bys</h1>
      <br />
      <div id="album-container-collection">
        {userSupportedBys.length > 0 ? (
          <SupportedByItems supportedBys={userSupportedBys} />
        ) : (
          <p>No supported by entries found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageSupportedBys;
