import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  Big.PE = 10;

  const operations = {
    '+': 'plus',
    '-': 'minus',
    '÷': 'div',
    x: 'times',
  };

  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  const oper = operations[operation];

  if (numberTwo === 0 && operation === '÷') {
    return 'Error';
  }

  return num1[oper](num2).toString();
};

export default operate;
