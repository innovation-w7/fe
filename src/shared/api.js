import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.177.177.138/api/',
});

export default instance;
