import Order from './Order.js';
import EventPlanner from './EventPlanner.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

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
