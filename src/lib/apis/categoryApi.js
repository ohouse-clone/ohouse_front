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

export const fabricList = [
  {
    category: '침구세트',
    list: [],
  },
  {
    category: '커튼/부자재',
    list: [
      {
        category: '암막커튼',
        list: [],
      },
      {
        category: '일반커튼',
        list: [],
      },
      {
        category: '레이스/속커튼',
        list: [],
      },
      {
        category: '가리개커튼',
        list: [],
      },
    ],
  },
  {
    category: '러그/카페트',
    list: [
      {
        category: '극세사/단모러그',
        list: [],
      },
      {
        category: '사이잘록러그',
        list: [],
      },
      {
        category: '샤기러그',
        list: [],
      },
    ],
  },
];

export const lightList = [
  {
    category: '공간별조명',
    list: [
      {
        category: '거실조명',
        list: [
          { category: '샹들리에' },
          { category: '직부조명' },
          { category: 'LED거실등' },
        ],
      },
      {
        category: '방조명',
        list: [{ category: '직부조명' }, { category: 'LED방등' }],
      },
      {
        category: '주방조명',
        list: [{ category: '레일조명' }, { category: '펜던트조명' }],
      },
    ],
  },
  {
    category: '천장등',
    list: [
      {
        category: '직부조명',
        list: [],
      },
      {
        category: '팬던트조명',
        list: [],
      },
      {
        category: '센서등',
        list: [],
      },
      {
        category: '레일조명',
        list: [],
      },
    ],
  },
  {
    category: '장스탠드',
    list: [],
  },
];
