import { Console } from '@woowacourse/mission-utils';

import { INPUT_MESSAGE } from './constants/messages';

const InputView = {
  async readDate() {
    const visitDate = await Console.readLineAsync(INPUT_MESSAGE.VISIT_DATE);
    return visitDate;
  },

  async readOrder() {
    const orders = await Console.readLineAsync(INPUT_MESSAGE.MENU_TO_ORDER);
    return orders;
  },
};

export default InputView;
