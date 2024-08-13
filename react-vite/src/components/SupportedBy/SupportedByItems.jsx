const SupportedByList = ({ supportedBys = [] }) => { // Default to an empty array
    return (
      <>
        <div id="supported-by-container-supported-by-list">
          <div className="supported-by-users-comments-supported-by-list">
            {supportedBys.length > 0 ? (
              <ul>
                {supportedBys.map((supportedBy) => (
                  <li key={supportedBy.id}>
                    <br />
                    <span>{supportedBy.description}</span>
                    {supportedBy.song_title && (
                      <span>&nbsp;Favorite Track: {supportedBy.song_title}</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <span>No users have supported this album yet. Be the first!</span>
            )}
          </div>
        </div>
      </>
    );
  };

  export default SupportedByList;
