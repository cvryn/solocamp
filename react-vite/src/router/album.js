// GET albums using react router
export const albumLoader = async ({ params }) => {
    const { albumId } = params;

    let album = null;
    let allAlbums = [];

    // Fetch album by albumId
    const albumResponse = await fetch(`/api/albums/${albumId}`);
    if (albumResponse.ok) {
        album = await albumResponse.json();
    } else {
        console.error('Failed to fetch album');
    }

    // Fetch all albums
    const allAlbumsResponse = await fetch('/api/albums');
    if (allAlbumsResponse.ok) {
        allAlbums = await allAlbumsResponse.json();
    } else {
        console.error('Failed to fetch all albums');
    }

    return { album, allAlbums };
};
