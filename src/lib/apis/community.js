import axios from 'axios';

const URL = '/api';

export const itemDataPOST = async (itemPostPath, itemData) => {
  await axios.post(`${URL}/community/api/v1/card_collections/${itemPostPath}`, itemData);
};
