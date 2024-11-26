// GET albums using react router
export const albumLoader = async ({ params }) => {
    const { albumId } = params;

    let album = null;
    let allAlbums = [];
    let error = null;

    try {
        const albumResponse = await fetch(`/api/albums/${albumId}`);
        if (albumResponse.ok) {
            album = await albumResponse.json();
        } else {
            throw new Error('Failed to fetch album');
        }

        const allAlbumsResponse = await fetch('/api/albums/all');
        if (allAlbumsResponse.ok) {
            allAlbums = await allAlbumsResponse.json();
        } else {
            throw new Error('Failed to fetch all albums');
        }
    } catch (err) {
        error = err.message;
        console.error('Error occurred:', err);
    }

    return { album, allAlbums, error };
};
