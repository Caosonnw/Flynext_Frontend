import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 30000,
});
http.interceptors.request.use((config) => {
  const tokenLocal = localStorage.getItem('LOGIN_USER');
  const token = JSON.parse(tokenLocal);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
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

    if (
      error.response.status == 401 &&
      error.response.data == 'TokenExpiredError'
    ) {
      try {
        const token = error.config.headers.Authorization.replace('Bearer ', '');
        const result = await http.post(`/auth/reset-token`, { token });
        localStorage.setItem('LOGIN_USER', result.data.data);
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${result.data.data}`;
        return http(originalRequest);
      } catch (error) {
        console.log(error);
        // Handle logout here
      }
    }

    return Promise.reject(error);
  }
);
