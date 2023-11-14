import { CATEGORIES, MENU } from '../constants/menu.js';
import { ERROR_MESSAGE } from '../constants/messages.js';

const regExp = new RegExp(/^([가-힣]+-\d+,)*[가-힣]+-\d+$/);

export function validateVisitDate(date) {
  if (isNaN(date)) {
    throw new Error(ERROR_MESSAGE.DATE);
  }

  if (date < 1 || date > 31) {
    throw new Error(ERROR_MESSAGE.DATE);
  }
}

export function validateMenu(order) {
  if (!regExp.test(order)) {
    throw new Error(ERROR_MESSAGE.ORDER);
  }

  const orderList = order.split(',');
  const menuBoard = Object.keys(MENU);
  const menuMap = new Map();

  let isOnlyDrink = true;
  let menuCount = 0;

  for (const menu of orderList) {
    const [food, count] = menu.split('-');

    if (isOnlyDrink && MENU[food].category !== CATEGORIES['DRINK']) {
      isOnlyDrink = false;
    }

    menuCount += Number(count);

    if (menuCount > 20) {
      throw new Error(ERROR_MESSAGE.MAX_ORDER_SIZE_EXCEEDED);
    }

    if (!menuBoard.includes(food)) {
      throw new Error(ERROR_MESSAGE.ORDER);
    }

    if (isNaN(count) || count < 1) {
      throw new Error(ERROR_MESSAGE.ORDER);
    }

    if (menuMap.has(food)) {
      throw new Error(ERROR_MESSAGE.ORDER);
    }

    menuMap.set(food, count);
  }

  if (isOnlyDrink) {
    throw new Error(ERROR_MESSAGE.ONLY_DRINK_ORDER_NOT_ALLOWED);
  }
}
