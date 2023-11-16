import { Console } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';

import { EVENT_NONE } from './constants/events.js';
import { OUTPUT_MESSAGE } from './constants/messages.js';

const OutputView = {
  printResultDetails(orderInstance, plannerInstance) {
    this.printPreviewTitle(plannerInstance.getVisitDate());
    this.printMenu(orderInstance.getOrderList());
    this.printBeforeDiscountTotalAmount(
      orderInstance.getBeforeDiscountTotalAmount()
    );
    this.printGift(plannerInstance.getIsGift());
    this.printBenefitsList(plannerInstance.getBenefitsList());
    this.printTotalDiscountAmount(orderInstance.getTotalDiscountAmount());

    const isAppliedEvents = plannerInstance.getIsAppliedEvents();
    const finalPaymentAmount = isAppliedEvents
      ? orderInstance.getFinalPaymentAmount()
      : orderInstance.getBeforeDiscountTotalAmount();
    this.printFinalPaymentAmount(finalPaymentAmount);

    this.printEventBadge(plannerInstance.getEventBadge());
  },

  printGreeting() {
    Console.print(OUTPUT_MESSAGE.GREETING);
  },

  printPreviewTitle(visitDate) {
    Console.print(OUTPUT_MESSAGE.BENEFIT_PREVIEW(visitDate));
  },

  printMenu(menuResult) {
    Console.print(OUTPUT_MESSAGE.RESULT_DETAILS.ORDER_LIST + menuResult);
  },

  printBeforeDiscountTotalAmount(totalAmount) {
    Console.print(
      OUTPUT_MESSAGE.RESULT_DETAILS.BEFORE_DISCOUNT_TOTAL_AMOUNT +
        `${totalAmount.toLocaleString()}원`
    );
  },

  printGift(isGift) {
    const giftResult = isGift ? '샴페인 1개' : EVENT_NONE;

    Console.print(OUTPUT_MESSAGE.RESULT_DETAILS.GIFT_MENU + giftResult);
  },

  printBenefitsList(benefitsList) {
    Console.print(OUTPUT_MESSAGE.RESULT_DETAILS.BENEFITS_LIST + benefitsList);
  },

  printTotalDiscountAmount(totalDiscountAmount) {
    const prefix = totalDiscountAmount === 0 ? '' : '-';

    Console.print(
      OUTPUT_MESSAGE.RESULT_DETAILS.TOTAL_DISCOUNT_AMOUNT +
        `${prefix}${totalDiscountAmount.toLocaleString()}원`
    );
  },

  printFinalPaymentAmount(finalPaymentAmount) {
    Console.print(
      OUTPUT_MESSAGE.RESULT_DETAILS.FINAL_PAYMENT_AMOUNT +
        `${finalPaymentAmount.toLocaleString()}원`
    );
  },

  printEventBadge(eventBadge) {
    Console.print(OUTPUT_MESSAGE.RESULT_DETAILS.EVENT_BADGE + eventBadge);
  },
};

export default OutputView;
