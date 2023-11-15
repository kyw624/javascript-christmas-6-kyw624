import { Console } from '@woowacourse/mission-utils';

import Order from './Order.js';
import EventPlanner from './EventPlanner.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import { OUTPUT_MESSAGE } from './constants/messages.js';

class App {
  async run() {
    OutputView.printGreeting();

    const visitDate = await InputView.readDate();
    const orderList = await InputView.readOrder();

    const order = new Order(orderList);
    const eventPlanner = new EventPlanner(visitDate, orderList);

    eventPlanner.applyAllEvents(order);

    OutputView.printResultDetails(order, eventPlanner);
  }
}

export default App;
