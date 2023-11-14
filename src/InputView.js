import { Console } from '@woowacourse/mission-utils';

import { INPUT_MESSAGE } from './constants/messages.js';
import { validateVisitDate, validateMenu } from './utils/validateInput.js';

const InputView = {
  async readDate() {
    while (true) {
      try {
        const visitDate = await Console.readLineAsync(INPUT_MESSAGE.VISIT_DATE);
        validateVisitDate(visitDate);

        return Number(visitDate);
      } catch (err) {
        Console.print(err.message);
      }
    }
  },

  async readOrder() {
    while (true) {
      try {
        const orderList = await Console.readLineAsync(
          INPUT_MESSAGE.MENU_TO_ORDER
        );
        validateMenu(orderList);

        return orderList.split(',');
      } catch (err) {
        Console.print(err.message);
      }
    }
  },
};

export default InputView;
