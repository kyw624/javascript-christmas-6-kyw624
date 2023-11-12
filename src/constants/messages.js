import { Console } from '@woowacourse/mission-utils';

import { EVENT_BADGE } from './events.js';

export const INPUT_MESSAGE = Object.freeze({
  VISIT_DATE: `12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n`,
  MENU_TO_ORDER: `주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n`,
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
  GREETING: `안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n`,
  BENEFIT_PREVIEW: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
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

    return EVENT_BADGE.NONE;
  },
  RESULT_DETAILS: {
    // orders = [ food1-count, food2-count, ... ];
    ORDER_LIST: (orders) => {
      let orderMessage = `\n<주문 메뉴>`;

      orders.forEach((order) => {
        const [food, count] = order.split('-');
        orderMessage += `\n${food} ${count}개`;
      });

      return orderMessage;
    },
    TOTAL_ORDER_AMOUNT: '<할인 전 총주문 금액>\n',
    GIFT_MENU: '\n<증정 메뉴>\n',
    BENEFITS: '\n<혜택 내역>\n',
    TOTAL_BENEFIT_AMOUNT: '\n<총혜택 금액>\n',
    AMOUNT_AFTER_DISCOUNT: '\n<할인 후 예상 결제 금액>\n',
    EVENT_BADGE: '\n<12월 이벤트 배지>\n',
  },
});

const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  DATE: `${ERROR_PREFIX} 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  ORDER: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
});
