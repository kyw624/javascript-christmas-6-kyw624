import { MENU } from './constants/menu.js';

class Order {
  constructor(order) {
    this.orders = order;
    this.beforeDiscountTotalAmount = 0;
    this.totalDiscountAmount = 0;
    this.finalPaymentAmount = 0;
  }

  getbeforeDiscountTotalAmount() {
    this.orders.forEach((order) => {
      const [food, count] = order.split('-');
      this.beforeDiscountTotalAmount += MENU[food].price * count;
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
