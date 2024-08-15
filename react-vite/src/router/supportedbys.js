export const supportedByLoader = async (method, endpoint, data = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    ...(data && { body: JSON.stringify(data) }),
  };

  const response = await fetch(endpoint, options);

  const responseData = await response.json();
  return responseData;
};


export const getSupportedBys = () => supportedByLoader('GET', '/api/supported-by/all');
export const getSupportedBysByAlbum = (albumId) =>
  supportedByLoader('GET', `/api/supported-by/album/${albumId}`);

export const createSupportedBy = (albumId, data) =>
  supportedByLoader('POST', `/api/supported-by/${albumId}`, data);
export const updateSupportedBy = ({ params, data }) => supportedByLoader('PUT', `/api/supported-by/${params.supportedById}`, data);
export const deleteSupportedBy = ({ params }) => supportedByLoader('DELETE', `/api/supported-by/${params.supportedById}`);
