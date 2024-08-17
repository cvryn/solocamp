import defaultUserPic from "../../../public/defaultuserpic.jpg";
import "./SupportedByList.css";

const SupportedByList = ({ album, supportedBys }) => {
  console.log("Album data:", album);
  console.log("Supported Bys:", supportedBys);

  const isValidImageUrl = (url) => {
    if (typeof url !== 'string' || url.trim() === '') {
      return false;
    }
    const validImages = [".jpg", ".jpeg", ".png"];
    return validImages.some((ext) => url.endsWith(ext));
  };

  const getProfilePic = (url) => {
    return isValidImageUrl(url) ? url : defaultUserPic;
  };

  return (
    <div id="supported-by-container-supported-by-list">
      <div className="supported-by-users-comments-supported-by-list">
        {supportedBys.length > 0 ? (
          <ul>
            {supportedBys.map((supportedBy) => (
              <li key={supportedBy.id}>
                <br />
                <div style={{ display: "flex" }}>
                  <img
                    src={getProfilePic(supportedBy.user_profile_image)}
                    alt={`${supportedBy.user_username}'s profile`}
                    style={{ height: "28px", width: "28px" }}
                  />
                  <div
                    className="supported-bys-left-by-others"
                    style={{ paddingLeft: "10px" }}
                  >
                    <span>{supportedBy.user_username}:&nbsp;</span>
                    <span style={{ fontStyle: "italic" }}>
                      {supportedBy.description}
                    </span>
                    <br />
                    {supportedBy.song_title && (
                      <span style={{ fontStyle: "italic" }}>
                        Favorite Track: {supportedBy.song_title}.
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <span>No users have supported this album yet. Be the first!</span>
        )}
      </div>
    </div>
  );
};

export default SupportedByList;
