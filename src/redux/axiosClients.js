import axios from 'axios';


// const reqResAPI = 'https://reqres.in/api/';
const mockServer = 'http://localhost:3000/'; // use mock server for better simulation of GET, POST and PUT requests
const JSON_BASE_URL = mockServer;

const defaultClient = axios.create({
  baseURL: JSON_BASE_URL,
});

export const clients = {
  default: {
    client: defaultClient,
  },
};

export default defaultClient;
