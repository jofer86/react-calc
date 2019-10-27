import operate from './operate';

const Calculate = (obj, buttonName) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(buttonName);
  const operations = ['+', '-', 'x', '%', '+/-', '÷'].includes(buttonName);
  const equals = ['='].includes(buttonName);
  let { next, total, operation } = obj;

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (equals) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  if (numbers) {
    if (total === null && next === null && buttonName === '0') {
      return;
    }
    next = next === null ? buttonName : next += buttonName;
  }

  if (operations && next && buttonName === '+/-') {
    next = (parseInt(next) * -1).toString();
  }

  if (operations && total && buttonName === '+/-') {
    next = (parseInt(total) * -1).toString();
  }

  if (operations && next && total && operation) {
    next = operate(total, next, operation);
    total = null;
    operation = null;
  }

  if (operations && total) {
    operation = buttonName;
  }

  if (operations && buttonName !== '+/-' && next) {
    total = next;
    next = null;
    operation = buttonName;
  }

  // eslint-disable-next-line consistent-return
  return { next, total, operation };
};

export default Calculate;
