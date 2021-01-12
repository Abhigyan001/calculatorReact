import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const dataResult = data;

  if (buttonName === '+/-') {
    if (total && !next) {
      dataResult.total = total * -1;
    }
    if (next) {
      dataResult.next = next * -1;
    }
  }

  if (buttonName === '%') {
    if (total && !next) {
      dataResult.total = operate(total, 100, '%');
    }
    if (next) {
      dataResult.next = operate(next, 100, '%');
    }
  }

  if (buttonName === 'AC') {
    dataResult.total = '';
    dataResult.next = '';
    dataResult.operation = '';
  }

  if (['+', 'X', '-', '÷', '='].includes(buttonName)) {
    if (total && next && operation) {
      const newOperation = buttonName === '=' ? '' : buttonName;
      dataResult.total = operate(total, next, operation);
      dataResult.operation = newOperation;
    }

    if (total && !next) {
      dataResult.operation = buttonName;
    }
  }

  if (buttonName === '.') {
    if (!total && !next) {
      dataResult.total = '0.';
    }
    if (next && next.indexOf('.') === -1) {
      dataResult.next = `${next}.`;
    }
    if (total && !next && total.indexOf('.') === -1) {
      dataResult.total = `${total}.`;
    }
  }

  return dataResult;
};

export default calculate;
