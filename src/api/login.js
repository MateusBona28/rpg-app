import axios from "axios";

const loginApi = axios.create( {
  baseURL: 'http://localhost:8080/api',
} );

export const loginRequests = {
  auth: async function (payload) {
    const response = await loginApi.post('/auth', payload);
    return response;
  }
}