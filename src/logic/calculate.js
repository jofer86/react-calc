import operate from './operate';

const Calculate = (obj, buttonName) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName);
  const notZero = buttonName !== '0';
  const operations = ['+', '-', 'X', '%', '=', '+/-'].includes(buttonName);
  let { next, total, operation } = obj;

  switch (buttonName) {
    case 'AC':
      next = null;
      total = null;
      operation = null;
      break;
    case numbers:
    case notZero:
      next += buttonName;
      total = '0';
      operation = null;
      break;
    case !notZero:
      break;
    case operations:
      if (operation === '+/-') {
        next = (parseInt(next) * -1).toString();
      }
      if (next && total) {
        total = next;
        next = 0;
        operation = buttonName;
      }

      if (next && total && operation) {
        total = operate(total, next, operation);
        next = total;
        operation = null;
      }
      if (operation) {
        break;
      }
      break;

    default:
      next = null;
      total = null;
      operation = null;
  }
};

export default Calculate;
