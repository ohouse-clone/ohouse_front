import { atom } from 'recoil';

export const categoryFetchApiState = atom({
  key: 'categoryFetchApiState',
  default: '20_22_20_20',
});

export const categoryData = atom({
  key: 'categoryDataState',
  default: '',
});
