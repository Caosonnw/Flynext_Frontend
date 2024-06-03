import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 30000,
});
http.interceptors.request.use((config) => {
  const tokenLocal = localStorage.getItem('LOGIN_USER');
  if (tokenLocal) {
    try {
      const token = JSON.parse(tokenLocal);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error parsing token:', error);
    }
  }
  return config;
});
http.interceptors.response.use(
  function (response) {
    // console.log(response);

    return response;
  },
  async function (error) {
    console.log(error);
    console.log(error.response.data.message);

    if (
      error.response &&
      error.response.status === 401 &&
      (error.response.data.message === 'TokenExpiredError' ||
        error.response.data.message === 'Unauthorized')
    ) {
      try {
        const result = await http.post(`/auth/reset-token`);
        localStorage.setItem('LOGIN_USER', result.data.data);
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${result.data.data}`;
        return http(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }

    return Promise.reject(error);
  }
);
