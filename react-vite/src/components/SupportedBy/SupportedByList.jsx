import "./SupportedByList.css";

const SupportedByList = ({ supportedBys, isAuthenticated }) => {


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
                    src={supportedBy.user_profile_image}
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
          <span>No users have reviewed this album yet. Be the first!</span>
        )}

        {!isAuthenticated && (
          <div style={{ marginTop: "20px" }}>
            <span>Please log in to leave a review.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportedByList;
