import EventPlanner from '../src/EventPlanner.js';

test('EventPlanner 객체 생성 테스트', () => {
  const inputs = [
    [3, ['해산물파스타-1', '제로콜라-2', '티본스테이크-1']],
    [3, ['제로콜라-2', '티본스테이크-1']],
    [3, ['티본스테이크-1']],
  ];

  inputs.forEach((input) => {
    const eventPlanner = new EventPlanner(input[0], ...input);

    expect(eventPlanner).toBeInstanceOf(EventPlanner);
    expect(eventPlanner.getVisitDate()).toBe(input[0]);
  });
});
