const apiRequest = async (url: string, options: Record<string, any>) => {
  let response;

  const BASE_URL = process.env.NEXT_API_BASE_URL;

  if (options) {
    response = await fetch(`${BASE_URL}${url}`, options);
  } else {
    response = await fetch(`${BASE_URL}${url}`);
  }

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
};

const apiService = {
  apiRequest,
};
