import axios from 'axios';

export const getProducts = (search, page) => {
  const apiUrl = `https://localhost:5000/api/products`;
  return axios.get(apiUrl, {
    headers: {
      'x-api-key': 'YOUR_API_KEY_HERE',  // Replace with your API key
    },
  });
};
