import { BASE_URL_FALLBACK } from '@/utils/consts';

const apiRequest = async (
  url: string,
  options?: Record<string, any>,
): Promise<any> => {
  let response;

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || BASE_URL_FALLBACK;

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

export const apiService = {
  apiRequest,
};
