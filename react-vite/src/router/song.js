export const songLoader = async (method, endpoint, data = null) => {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(data && { body: JSON.stringify(data) }),
    };

    try {
      const response = await fetch(endpoint, options);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server Error: ${response.status} - ${errorText}`);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Failed to load data:", error);
      throw error;
    }
  };

// GET all songs
export const getSongs = () => songLoader('GET', '/api/songs/');

// GET song by song id
export const getSongById = (songId) => songLoader('GET', `/api/songs/${songId}`);

// GET all songs by album id
export const getSongsByAlbumId = (albumId) => songLoader('GET', `/api/albums/${albumId}/song`);

// POST a new song to an album (belonging to the current user)
export const createSong = (albumId, songData) => songLoader('POST', `/api/albums/${albumId}/song`, songData);

// PUT edit song
export const updateSong = ({ songId, data }) =>
    songLoader('PUT', `/api/songs/${songId}`, data);

// DELETE song
export const deleteSong = (songId) => songLoader('DELETE', `/api/songs/${songId}`);
