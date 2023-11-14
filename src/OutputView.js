import { Console } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';

import { EVENT_NONE } from './constants/events.js';
import { MENU } from './constants/menu.js';
import { OUTPUT_MESSAGE } from './constants/messages.js';

const {
  ORDER_LIST,
  BEFORE_DISCOUNT_TOTAL_AMOUNT,
  GIFT_MENU,
  BENEFITS_LIST,
  TOTAL_DISCOUNT_AMOUNT,
  FINAL_PAYMENT_AMOUNT,
  EVENT_BADGE,
} = OUTPUT_MESSAGE.RESULT_DETAILS;

const OutputView = {
  printMenu(order) {
    let menuResult = '';

    order.forEach((menu) => {
      const [food, count] = menu.split('-');
      menuResult += `${food} ${count}개${LINE_SEPARATOR}`;
    });

    Console.print(ORDER_LIST + menuResult);
  },

  printBeforeDiscountTotalAmount(totalAmount) {
    Console.print(
      BEFORE_DISCOUNT_TOTAL_AMOUNT + `${totalAmount.toLocaleString()}원`
    );
  },

  printGift(plannerInstance) {
    const isGift = Object.keys(plannerInstance.benefits).includes('GIFT');
    const giftResult = isGift ? '샴페인 1개' : EVENT_NONE;

    Console.print(GIFT_MENU + giftResult);
  },

  printBenefitsList(plannerInstance) {
    const benefits = Object.values(plannerInstance.benefits);
    const isBenefits = benefits.length ? true : false;
    const benefitsResult = isBenefits
      ? benefits.reduce((result, { message, price }) => {
          return (
            result + `${message}${price.toLocaleString()}원${LINE_SEPARATOR}`
          );
        }, '')
      : EVENT_NONE;

    Console.print(BENEFITS_LIST + benefitsResult);
  },

  printTotalDiscountAmount(plannerInstance) {
    const benefits = Object.values(plannerInstance.benefits);
    const isBenefits = benefits.length ? true : false;
    const totalBenefitsResult = plannerInstance.getTotalDiscountAmount();
    const prefix = isBenefits ? '' : '-';

    Console.print(
      TOTAL_DISCOUNT_AMOUNT +
        `${prefix}${totalBenefitsResult.toLocaleString()}원`
    );
  },

  printFinalPaymentAmount(orderInstance, plannerInstance) {
    const benefits = Object.values(plannerInstance.benefits);
    const isBenefits = benefits.length ? true : false;
    const totalBenefits = isBenefits
      ? plannerInstance.getTotalDiscountAmount() - MENU['샴페인'].price
      : 0;

    const totalAmount = orderInstance.beforeDiscountTotalAmount;
    const resultAmount = `${(totalAmount - totalBenefits).toLocaleString()}원`;

    Console.print(FINAL_PAYMENT_AMOUNT + resultAmount);
  },

  printEventBadge(plannerInstance) {
    Console.print(EVENT_BADGE + plannerInstance.eventBadge);
  },
};

export default OutputView;
