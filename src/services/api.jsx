// services/api.js

import axios from 'axios';

// Create an instance of axios with default settings
const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});



export default apiClient;
