import axios from "axios";

const registerApi = axios.create( {
  baseURL: 'http://localhost:8080/api',
} );

export const registerFunctions = {
  tryCreateNewUser: async function (payload) {
    const response = await registerApi.post('/users', payload);
    return response;
  }
}