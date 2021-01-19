import Operate from '../logic/operate';

describe('if user presses AC key, calculate', () => {
  test('assigns null to all calculatorData', () => {
    expect(Operate(5, 7, '+')).toEqual(12);
  });
  test("doesn't leave calculatorData unmutated", () => {
    expect(Operate(5, 7, '+')).not.toEqual(8);
  });
  test('assigns null to all calculatorData', () => {
    expect(Operate(5, 7, '-')).toEqual(-2);
  });
  test("doesn't leave calculatorData unmutated", () => {
    expect(Operate(5, 7, '-')).not.toEqual(2);
  });
  test('assigns null to all calculatorData', () => {
    expect(Operate(5, 7, 'X')).toEqual(35);
  });
  test("doesn't leave calculatorData unmutated", () => {
    expect(Operate(5, 7, 'X')).not.toEqual(12);
  });
  test('assigns null to all calculatorData', () => {
    expect(Operate(35, 7, '÷')).toEqual(5);
  });
  test("doesn't leave calculatorData unmutated", () => {
    expect(Operate(35, 7, '÷')).not.toEqual(0.2);
  });
});
