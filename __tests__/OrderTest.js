import Order from '../src/Order.js';

test('Order 객체 생성 테스트', () => {
  const inputs = [
    ['해산물파스타-1', '제로콜라-2', '티본스테이크-1'],
    ['제로콜라-2', '티본스테이크-1'],
    ['티본스테이크-1'],
  ];

  inputs.forEach((input) => {
    const order = new Order(input);

    expect(order).toBeInstanceOf(Order);
  });
});
