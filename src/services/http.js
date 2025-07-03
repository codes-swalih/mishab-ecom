import axios from 'axios';
import https from 'https';

function getToken() {
  const cname = 'token';
  if (typeof window !== 'undefined') {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  return '';
}
const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL
    : 'https://smeraassosiates.com';

const config = {
  baseURL: baseURL + '/api',
  timeout: 30000
};

// Only disable SSL verification in development
if (process.env.NODE_ENV !== 'production') {
  config.httpsAgent = new https.Agent({
    rejectUnauthorized: false
  });
}

const http = axios.create(config);
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
