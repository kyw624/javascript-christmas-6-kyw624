import { Console } from '@woowacourse/mission-utils';

import { INPUT_MESSAGE } from './constants/messages.js';

const InputView = {
  async readDate() {
    const visitDate = await Console.readLineAsync(INPUT_MESSAGE.VISIT_DATE);
    return Number(visitDate);
  },

  async readOrder() {
    const orders = await Console.readLineAsync(INPUT_MESSAGE.MENU_TO_ORDER);
    return orders.split(',');
  },
};

export default InputView;
