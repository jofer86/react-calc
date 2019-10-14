import Big from 'big';

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

  return num1[oper](num2).toString();
};

export default operate;
