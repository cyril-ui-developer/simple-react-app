import axios from 'axios';

const JSON_BASE_URL = 'http://localhost:3000/';

const defaultClient = axios.create({
  baseURL: JSON_BASE_URL,
});

export const clients = {
  default: {
    client: defaultClient,
  },
};

export default defaultClient;
