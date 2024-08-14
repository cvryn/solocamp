// Fetch all supported users by album ID
export const getSupportedBys = async () => {
  const response = await fetch('/api/supported-by/all');
  if (response.ok) {
    const supportedBys = await response.json();
    return supportedBys;
  } else {
    console.error('Failed to fetch supported entries.');
  }
};

// POST new supported by
export const createSupportedBy = async (data) => {
  const response = await fetch(`/api/supported-bys`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const newSupportedBy = await response.json();
    return newSupportedBy;
  }
};

// PUT existing supported by
export const updateSupportedBy = async ({ params, data }) => {
  const { supportedById } = params;
  const response = await fetch(`/api/supported-bys/${supportedById}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const updatedSupportedBy = await response.json();
  return updatedSupportedBy;
};

// DELETE supported by
export const deleteSupportedBy = async ({ params }) => {
  const { supportedById } = params;
  const response = await fetch(`/api/supported-bys/${supportedById}`, {
    method: "DELETE",
  });

  return { message: "Supported By deleted successfully" };
};
