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

  

  return dataResult;
};

export default calculate;
