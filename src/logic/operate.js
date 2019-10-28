import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberTwo === '0' && operation === '÷') return 'Error';
  Big.PE = 10;

  const operations = {
    '+': 'plus',
    '-': 'minus',
    '÷': 'div',
    x: 'times',
  };

  const num1 = Big(parseFloat(numberOne));
  const num2 = Big(parseFloat(numberTwo));
  const oper = operations[operation];


  return num1[oper](num2).toString();
};

export default operate;
