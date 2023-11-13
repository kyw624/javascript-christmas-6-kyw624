import { MENU } from './constants/menu.js';

class Order {
  constructor(order) {
    this.orders = order;
    this.totalOrderAmount = 0;
  }

  getTotalOrderAmount() {
    this.orders.forEach((order) => {
      const [food, count] = order.split('-');
      this.totalOrderAmount += MENU[food].price * count;
    });
  }
}

export default Order;
