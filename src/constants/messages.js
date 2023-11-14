import { Console } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';

import { EVENT_BADGE, EVENT_NONE } from './events.js';

export const INPUT_MESSAGE = Object.freeze({
  VISIT_DATE:
    `12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)` +
    LINE_SEPARATOR,
  MENU_TO_ORDER:
    `주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)` +
    LINE_SEPARATOR,
});

export const RESULT_LIST = [
  'ORDER_LIST',
  'TOTAL_ORDER_AMOUNT',
  'GIFT_MENU',
  'BENEFITS',
  'TOTAL_BENEFIT_AMOUNT',
  'AMOUNT_AFTER_DISCOUNT',
  'EVENT_BADGE',
];

export const OUTPUT_MESSAGE = Object.freeze({
  GREETING: `안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`,
  BENEFIT_PREVIEW: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!` +
    LINE_SEPARATOR,
  BADGE: (price) => {
    if (price >= 20000) {
      return EVENT_BADGE.SANTA;
    }

    if (price >= 10000) {
      return EVENT_BADGE.TREE;
    }

    if (price >= 5000) {
      return EVENT_BADGE.STAR;
    }

    return EVENT_NONE;
  },
  RESULT_DETAILS: {
    ORDER_LIST: '<주문 메뉴>' + LINE_SEPARATOR,
    BEFORE_DISCOUNT_TOTAL_AMOUNT: '<할인 전 총주문 금액>' + LINE_SEPARATOR,
    GIFT_MENU: LINE_SEPARATOR + '<증정 메뉴>' + LINE_SEPARATOR,
    BENEFITS_LIST: LINE_SEPARATOR + '<혜택 내역>' + LINE_SEPARATOR,
    TOTAL_DISCOUNT_AMOUNT: '<총혜택 금액>' + LINE_SEPARATOR,
    FINAL_PAYMENT_AMOUNT:
      LINE_SEPARATOR + '<할인 후 예상 결제 금액>' + LINE_SEPARATOR,
    EVENT_BADGE: LINE_SEPARATOR + '<12월 이벤트 배지>' + LINE_SEPARATOR,
  },
});

const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  DATE: `${ERROR_PREFIX} 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  ORDER: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  MAX_ORDER_SIZE_EXCEEDED: `${ERROR_PREFIX} 메뉴는 최대 20개까지 주문 가능합니다. 다시 입력해 주세요.`,
  ONLY_DRINK_ORDER_NOT_ALLOWED: `${ERROR_PREFIX} 음료만을 주문할 수 없습니다. 다시 입력해 주세요.`,
});
