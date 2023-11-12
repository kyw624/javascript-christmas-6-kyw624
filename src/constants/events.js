import { CATEGORYS } from './menu.js';

export const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export const EVENT_NONE = '없음';

export const EVENTS = Object.freeze({
  'D-DAY': {
    NAME: 'D-DAY',
    DEFAULT: 1000,
    MIN: 1,
    MAX: 25,
  },
  WEEKDAY: {
    NAME: 'WEEKDAY',
    DAY: [0, 1, 2, 3, 4],
    TARGET: CATEGORYS.DESSERT,
    DISCOUNT: 2023,
  },
  WEEKEND: {
    NAME: 'WEEKEND',
    DAY: [5, 6],
    TARGET: CATEGORYS.MAIN,
    DISCOUNT: 2023,
  },
  SPECIAL: {
    NAME: 'SPECIAL',
    DATE: [3, 10, 17, 24, 25, 31],
  },
});

export const EVENT_BADGE = Object.freeze({
  STAR: '별',
  TREE: '트리',
  SANTA: '산타',
});
