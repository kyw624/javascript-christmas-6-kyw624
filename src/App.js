import { Console } from '@woowacourse/mission-utils';

import Order from './Order.js';
import EventPlanner from './EventPlanner.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import { OUTPUT_MESSAGE } from './constants/messages.js';

const {
  printMenu,
  printBeforeDiscountTotalAmount,
  printGift,
  printBenefitsList,
  printTotalDiscountAmount,
  printFinalPaymentAmount,
  printEventBadge,
} = OutputView;

class App {
  async run() {
    Console.print(OUTPUT_MESSAGE.GREETING);

    const visitDate = await InputView.readDate();
    const orderList = await InputView.readOrder();

    Console.print(OUTPUT_MESSAGE.BENEFIT_PREVIEW(visitDate));

    const order = new Order(orderList);
    order.getbeforeDiscountTotalAmount();

    const eventPlanner = new EventPlanner(visitDate, orderList);
    eventPlanner.getEventsByDate();
    eventPlanner.checkGiftEvent(order.beforeDiscountTotalAmount);
    eventPlanner.getBadge();

    this.printResultDetails(order, eventPlanner);
  }

  printResultDetails(orderInstance, plannerInstance) {
    printMenu(orderInstance.orders);
    printBeforeDiscountTotalAmount(orderInstance.beforeDiscountTotalAmount);
    printGift(plannerInstance);
    printBenefitsList(plannerInstance);
    printTotalDiscountAmount(plannerInstance);
    printFinalPaymentAmount(orderInstance, plannerInstance);
    printEventBadge(plannerInstance);
  }
}

export default App;
