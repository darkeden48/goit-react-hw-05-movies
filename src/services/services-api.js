const BASE_URL = 'api.themoviedb.org/3';
const API_URL = '070151ea430b4e74dbca9bca592b262c';

async function movieApi(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function ApiTrend() {
  return movieApi(`${BASE_URL}/trending/movie/day?api_key=${API_URL}`);
}
