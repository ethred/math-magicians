import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: 0,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    // In case there is an operation, update 'next'
    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + buttonName };
      }
      return { ...obj, next: buttonName };
    }
    // If case there is no operation, update 'next' and 'clear' the value
    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { ...obj, next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.total}.` };
    }
    return { ...obj, next: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    // If '=' is with no operation, there is nothing to do
    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  // Button must contain an operation

  // When the user presses an operation button without having entered a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // When the user presses an operation after pressing '='
  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName };
  }

  // When the user presses an operation button and there is an existing operation
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    if (!obj.total) {
      return { total: 0, operation: buttonName };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // In case if there is no operation yet, but the user typed it

  // The user hasn't typed a number yet, just to save the operation as it is
  if (!obj.next) {
    return { operation: buttonName };
  }

  // If the operation is saved and shifted from 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
