import axios from 'axios';
import { getToken } from './auth';

const axiosInstance = axios.create({
  baseURL: 'https://pds-twitter-clone-app.herokuapp.com/api',
});

export const api = {
  ...axiosInstance,
  async authGet(path: string) {
    const token = await getToken();
    try {
      const { data } = await api.get(path, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async authPost(path: string, body: any) {
    const token = await getToken();
    try {
      const { data } = await api.post(path, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error.response);
      return null;
    }
  },
  async authDelete(path: string) {
    const token = await getToken();
    try {
      const { data } = await api.delete(path, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
