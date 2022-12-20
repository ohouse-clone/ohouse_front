import axios from 'axios';

const URL = '/api';

export const getCategory = async categoryId => {
  await axios.get(`${URL}/store/api/v1/category/${categoryId}`);
};

export const furnitureList = [
  {
    category: '침대',
    banner: '',
    hash: '20_22_20_20',
    list: [
      {
        category: '침대프레임',
        hash: '20_22_20_20',
        list: [
          { category: '일반침대', hash: '20_22_20_20' },
          { category: '수납침대', hash: '20_22_20_21' },
          { category: '저상형침대', hash: '20_22_20_22' },
        ],
      },
      {
        category: '침대+매트리스',
        list: [
          { category: '일반침대' },
          { category: '수납침대' },
          { category: '저상형침대' },
        ],
      },
    ],
  },
  {
    category: '매트리스/토퍼',
    list: [
      {
        category: '매트리스',
        list: [
          { category: '스프링매트리스' },
          { category: '라텍스매트리스' },
          { category: '폼매트리스' },
        ],
      },
      {
        category: '토퍼',
        list: [],
      },
    ],
  },
  {
    category: '소파',
    list: [
      {
        category: '일반소파',
        list: [],
      },
      {
        category: '리클라이너',
        list: [],
      },
    ],
  },
];

const fabricList = [];
