import axios from 'axios';
import { toast } from 'react-toastify';

const UNAUTHORIZED = 401;

const api = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

api.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response;
    if (status === UNAUTHORIZED) {
      toast(error.response.data.message, { type: toast.TYPE.ERROR });
    }
    return Promise.reject(error);
  }
);

export default api;
