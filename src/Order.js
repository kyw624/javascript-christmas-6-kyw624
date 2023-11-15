import { EOL as LINE_SEPARATOR } from 'os';

import { MENU } from './constants/menu.js';

class Order {
  #orders;
  #beforeDiscountTotalAmount;
  #totalDiscountAmount;
  #finalPaymentAmount;

  constructor(order) {
    this.#orders = order;
    this.#beforeDiscountTotalAmount = 0;
    this.#totalDiscountAmount = 0;
    this.#finalPaymentAmount = 0;
  }

  getOrderList() {
    return this.#orders.reduce((orderList, order) => {
      const [food, count] = order.split('-');
      return orderList + `${food} ${count}개` + LINE_SEPARATOR;
    }, '');
  }

  getBeforeDiscountTotalAmount() {
    return this.#beforeDiscountTotalAmount;
  }

  getTotalDiscountAmount() {
    return this.#totalDiscountAmount;
  }

  getFinalPaymentAmount() {
    return this.#finalPaymentAmount;
  }

  calculateBeforeDiscountTotalAmount() {
    this.#orders.forEach((order) => {
      const [food, count] = order.split('-');
      this.#beforeDiscountTotalAmount += MENU[food].price * count;
    });
  }

  calculateTotalDiscountAmount(benefits) {
    const benefitsPrice = Object.values(benefits);

    this.#totalDiscountAmount = benefitsPrice.reduce(
      (total, { _, price }) => total + price,
      0
    );
  }

  calculateFinalPaymentAmount(isGift) {
    this.#finalPaymentAmount =
      this.#beforeDiscountTotalAmount -
      this.#totalDiscountAmount +
      (isGift ? MENU['샴페인'].price : 0);
  }
}

export default Order;
