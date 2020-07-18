import { handleClear, handleEqualOperator, handleNumberEntry, handlePercentageOperator, handleDotOperator } from './handlers';
import { compute } from "./compute-helper";

const isNumber = (item) => {
  return /[0-9]+/.test(item);
};

export const calculate = (obj, buttonName) => {
  try {

    if (buttonName === "AC") {
      return handleClear();
    }

    if (isNumber(buttonName)) {
      return handleNumberEntry(obj, buttonName);
    }

    if (buttonName === "%") {
      return handlePercentageOperator(obj)
    }

    if (buttonName === ".") {
      return handleDotOperator(obj);
    }

    if (["=", "Enter"].includes(buttonName)) {
      return handleEqualOperator(obj);
    }

    if (buttonName === "+/-") {
      if (obj.next) {
        return { next: (-1 * parseFloat(obj.next)).toString() };
      }
      if (obj.total) {
        return { total: (-1 * parseFloat(obj.total)).toString() };
      }
      return {};
    }

    // Button must be an operation
    if (obj.operation) {
      return {
        total: compute(obj.total, obj.next, obj.operation),
        next: null,
        operation: buttonName,
      };
    }

    // no operation yet, but the user typed one

    // The user hasn't typed a number yet, just save the operation
    if (!obj.next) {
      return { operation: buttonName };
    }

    // save the operation and shift 'next' into 'total'
    return {
      total: obj.next,
      next: null,
      operation: buttonName,
    };

  } catch {
    return handleClear();
  }
}
