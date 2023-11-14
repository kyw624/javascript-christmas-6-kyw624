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

  getOrderList() {
    return this.orders.reduce((orderList, order) => {
      const [food, count] = order.split('-');
      return orderList + `${food} ${count}개\n`;
    }, '');
  }
}

export default Order;
