import { MENU } from './constants/menu.js';

class Order {
  constructor(order) {
    this.orders = order;
    this.totalAmount = 0;
  }

  getTotalOrderAmount() {
    this.orders.forEach((order) => {
      const [food, count] = order.split('-');
      this.totalAmount += MENU[food].price * count;
    });
  }
}

export default Order;
