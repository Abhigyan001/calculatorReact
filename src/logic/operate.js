import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  try {
    const one = Big(+numberOne);
    const two = Big(+numberTwo);

    switch (operation) {
      case '+':
        result = n1.plus(n2);
        break;

      case '-':
        result = n1.minus(n2);
        break;

      case '×':
        result = n1.times(n2);
        break;

      case '÷':
        result = n1.div(n2);
        break;

      case '%':
        result = n1.mod(n2);
        break;

      default:
        break;
    }
  } catch (error) {
    result = NaN;
  }
  return result.toPrecision();
};

export default operate;
