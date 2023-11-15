import { Console } from '@woowacourse/mission-utils';

import App from '../src/App.js';
import { validateVisitDate, validateMenu } from '../src/utils/validateInput.js';
import { MENU, CATEGORIES } from '../src/constants/menu.js';
import { ERROR_MESSAGE } from '../src/constants/messages.js';

describe('예외 테스트', () => {
  describe('방문 날짜 예외 처리', () => {
    test('숫자가 아닌 경우', () => {
      const inputs = ['a', 'ㅂ', '-'];

      inputs.forEach((input) => {
        expect(() =>
          validateVisitDate(input).throwErr().toThrow(ERROR_MESSAGE.DATE)
        );
      });
    });

    test('숫자의 범위를 벗어난 경우 ex) 1~31', () => {
      const inputs = [0, 32, '0', '32'];

      inputs.forEach((input) => {
        expect(() =>
          validateVisitDate(input).throwErr().toThrow(ERROR_MESSAGE.DATE)
        );
      });
    });
  });

  describe('주문 메뉴 예외 처리', () => {
    test('입력 형식이 다를 경우 ex) 메뉴1-개수,메뉴2-개수,...', async () => {
      const inputs = [
        '해산물파스타-q',
        '제로콜라-1,아이스크림-ㅂ',
        '티본스테이크-1ㅂ',
        '레드와인-ㅂ1',
      ];

      inputs.forEach((input) => {
        expect(() =>
          validateMenu(input).throwErr().toThrow(ERROR_MESSAGE.ORDER)
        );
      });
    });

    test('최대 주문 가능한 메뉴 개수인 20개를 넘긴 경우', () => {
      const inputs = [
        '해산물파스타-21',
        '제로콜라-15,아이스크림-1,레드와인-4,티본스테이크-1',
      ];

      inputs.forEach((input) => {
        expect(() =>
          validateMenu(input)
            .throwErr()
            .toThrow(ERROR_MESSAGE.MAX_ORDER_SIZE_EXCEEDED)
        );
      });
    });

    test('메뉴판에 없는 메뉴를 주문한 경우', () => {
      const inputs = ['로제파스타-2', '펩시제로-1,켈리-2,해산물파스타-1'];

      inputs.forEach((input) => {
        expect(() =>
          validateMenu(input).throwErr().toThrow(ERROR_MESSAGE.ORDER)
        );
      });
    });

    test('메뉴의 개수가 1 이상이 아닌 경우', () => {
      const inputs = ['해산물파스타-0', '제로콜라-1,아이스크림-0'];

      inputs.forEach((input) => {
        expect(() =>
          validateMenu(input).throwErr().toThrow(ERROR_MESSAGE.ORDER)
        );
      });
    });

    test('이미 주문한 메뉴를 또 입력한 경우', () => {
      const inputs = [
        '해산물파스타-1,제로콜라-1,해산물파스타-1',
        '제로콜라-1,아이스크림-1,제로콜라-2',
      ];

      inputs.forEach((input) => {
        expect(() =>
          validateMenu(input).throwErr().toThrow(ERROR_MESSAGE.ORDER)
        );
      });
    });

    test('음료만 주문한 경우', () => {
      const inputs = ['제로콜라-1,레드와인-1', '제로콜라-1', '레드와인-1'];

      inputs.forEach((input) => {
        expect(() =>
          validateMenu(input)
            .throwErr()
            .toThrow(ERROR_MESSAGE.ONLY_DRINK_ORDER_NOT_ALLOWED)
        );
      });
    });
  });
});
