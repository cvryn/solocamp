
export const supportedByLoader = async (method, endpoint, data = null) => {

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
      throw new Error(`Failed to ${method} data.`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSupportedBys = () => supportedByLoader('GET', '/api/supported-by/all');
export const createSupportedBy = (albumId, data) =>
  supportedByLoader('POST', `/api/albums/${albumId}/supported-bys`, data);
export const updateSupportedBy = ({ params, data }) => supportedByLoader('PUT', `/api/supported-by/${params.supportedById}`, data);
export const deleteSupportedBy = ({ params }) => supportedByLoader('DELETE', `/api/supported-by/${params.supportedById}`);
