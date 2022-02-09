const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/'
});

instance.interceptors.response.use((response) => response.data);

module.exports = instance;
