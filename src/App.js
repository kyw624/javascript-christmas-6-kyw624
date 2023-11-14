import { Console } from '@woowacourse/mission-utils';

import Order from './Order.js';
import EventPlanner from './EventPlanner.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import { OUTPUT_MESSAGE } from './constants/messages.js';

const {
  printGreeting,
  printPreviewDetails,
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
    printGreeting();
    const visitDate = await InputView.readDate();
    const orderList = await InputView.readOrder();
    printPreviewDetails(visitDate);

    const order = new Order(orderList);
    const eventPlanner = new EventPlanner(visitDate, orderList);
    eventPlanner.applyAllEvents(order);

    this.printResultDetails(order, eventPlanner);
  }

  printResultDetails(orderInstance, plannerInstance) {
    printMenu(orderInstance.orders);
    printBeforeDiscountTotalAmount(
      orderInstance.getBeforeDiscountTotalAmount()
    );
    printGift(plannerInstance.getIsGift());
    printBenefitsList(plannerInstance.getBenefitsList());
    printTotalDiscountAmount(orderInstance.getTotalDiscountAmount());
    printFinalPaymentAmount(orderInstance.getFinalPaymentAmount());
    printEventBadge(plannerInstance.eventBadge);
  }
}

export default App;
