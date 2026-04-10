const BASE_URL = 'http://localhost:5000/api';

export async function get(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}
