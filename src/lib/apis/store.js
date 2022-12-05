import axios from 'axios';

const URL = '/api';

export const getStoreCategoryData = async id => {
  const { data } = await axios.get(`${URL}/v1/category/${id}`);
  return data;
};

export const getStoreItemData = async category => {
  const { data } = await axios.get(`${URL}/v1/item/items?category=${category}`);
  return data;
};

export const getStoreProductsData = async (itemId, price, productName) => {
  const { data } = await axios.get(
    `${URL}/v1/product/products?itemId=${itemId}`,
  );
  return data;
};
