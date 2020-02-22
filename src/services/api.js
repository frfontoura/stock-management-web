import axios from 'axios';
import { toast } from 'react-toastify';

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const INTERNAL_SERVER_ERROR = 500;

const api = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

const configureInterceptors = (store, history) => {
  api.interceptors.response.use(
    response => response,
    error => {
      const { status } = error.response;
      if (status === UNAUTHORIZED) {
        toast(error.response.data.message, { type: toast.TYPE.ERROR });
      }

      if (status === FORBIDDEN) {
        toast(error.response.data.message, { type: toast.TYPE.ERROR });
      }

      if (status === INTERNAL_SERVER_ERROR) {
        toast('Something went wrong... 😰', { type: toast.TYPE.ERROR });
        console.error(error.response.data.message);
      }

      return Promise.reject(error);
    }
  );
};

export default api;
export { configureInterceptors };
