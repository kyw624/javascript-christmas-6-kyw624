import { CATEGORYS } from './menu';

export const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export const EVENT_NONE = '없음';

export const EVENTS = {
  'D-DAY': {
    DEFAULT: 1000,
    MIN: 1,
    MAX: 25,
  },
  WEEKDAY: {
    DATE: [0, 1, 2, 3, 4],
    TARGET: CATEGORYS.DESSERT,
    DISCOUNT: 2023,
  },
  WEEKEND: {
    DATE: [5, 6],
    TARGET: CATEGORYS.MAIN,
    DISCOUNT: 2023,
  },
  SPECIAL: [3, 10, 17, 24, 25, 31],
};

export const EVENT_BADGE = {
  STAR: '별',
  TREE: '트리',
  SANTA: '산타',
};
