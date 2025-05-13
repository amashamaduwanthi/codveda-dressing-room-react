import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};
