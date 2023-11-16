import EventPlanner from '../src/EventPlanner.js';

test('EventPlanner 객체 생성 테스트', () => {
  const inputs = [
    [3, ['해산물파스타-1', '제로콜라-2', '티본스테이크-1']],
    [3, ['제로콜라-2', '티본스테이크-1']],
    [3, ['티본스테이크-1']],
  ];

  inputs.forEach((input) => {
    const eventPlanner = new EventPlanner(...input);

    expect(eventPlanner).toBeInstanceOf(EventPlanner);
    expect(eventPlanner.getVisitDate()).toBe(input[0]);
  });
});

describe('기능 테스트', () => {
  test('10000원 이하는 이벤트 미적용', async () => {
    const input = ['3', ['제로콜라-1', '아이스크림-1']];
    const order = new Order(input[1]);
    const eventPlanner = new EventPlanner(...input);

    eventPlanner.applyAllEvents(order);

    expect(eventPlanner.getIsAppliedEvents()).toBe(false);
  });
});
