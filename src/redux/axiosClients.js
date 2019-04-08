import axios from 'axios';

const JSON_BASE_URL = 'https://reqres.in/api/';

const defaultClient = axios.create({
  baseURL: JSON_BASE_URL,
});

export const clients = {
  default: {
    client: defaultClient,
  },
};

export default defaultClient;
