import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ba5b43fba217532a9538f65fce33ba95655e5cb658db20987c660d57f772894e'
  }
});