import operate from './operate';

const calculate = (obj, buttonName) => {
  //   //Implement the calculate.js module
  // It should contain one default method: calculate.
  // The calculate method should accept a calculator data object and a button name as arguments.
  // The calculator data object should contain three properties: total, next and operation.
  // This method should use the buttonName argument to mutate the calculator’s data object and return its modified version. For instance if buttonName == "+/-", it should multiply total and next by -1 to make it negative or positive.
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName);
  const operations = ['+', '-', 'X', '%', '+/-', '='].includes(buttonName);
  let { next, total, operation } = obj;

  switch (buttonName) {
    case 'AC':
      next = null;
      total = null;
      operation = null;
      break
    case numbers:
      next = buttonName;
      total = '0';
      operation = null;
      break
    case operations:
      operation = next ? operation = buttonName : alert('error')
      total = next;
      next = '';
    case '=':
      total = operation ? 
    
}

export default calculate;
