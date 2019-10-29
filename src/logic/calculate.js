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
    return { next, total, operation };
  }

  if (equals && total && next && operation) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
    return { next, total, operation };
  }

  if (numbers && total && !next && !operation) {
    next = buttonName;
    total = null;
    operation = null;
    return { next, total, operation };
  }

  if (numbers) {
    if (total === null && next === null && buttonName === '0') {
      return { next, total, operation };
    }
    next = next === null ? buttonName : next += buttonName;
    return { next, total, operation };
  }

  if (operations && next && buttonName === '+/-') {
    next = (parseFloat(next) * -1).toString();
    return { next, total, operation };
  }

  if (operations && total && !next && !operation && buttonName === '+/-') {
    next = (parseFloat(total) * -1).toString();
    total = null;
    return { next, total, operation };
  }

  if (operations && total && buttonName === '+/-') {
    next = (parseFloat(total) * -1).toString();
    return { next, total, operation };
  }

  if (operations && next && total && operation) {
    next = operate(total, next, operation);
    total = null;
    operation = null;
    return { next, total, operation };
  }

  if (operations && total) {
    operation = buttonName;
    return { next, total, operation };
  }

  if (operations && buttonName !== '+/-' && next) {
    total = next;
    next = null;
    operation = buttonName;
    return { next, total, operation };
  }


  // eslint-disable-next-line consistent-return
  return { next, total, operation };
};

export default Calculate;
