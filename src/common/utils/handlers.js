import Big from "big.js";
import { compute } from "./compute-helper";

export const handleNumberEntry = (obj, buttonName) => {
  if (buttonName === "0" && obj.next === "0") {
    return {};
  }

  // If there is an operation, update next
  if (obj.operation) {
    if (obj.next) {
      return { next: obj.next + buttonName };
    }
    return { next: buttonName };
  }

  // If there is no operation, update next and clear the value
  if (obj.next) {
    const next = obj.next === "0" ? buttonName : obj.next + buttonName;
    return {
      next,
      total: null,
    };
  }
  return {
    next: buttonName,
    total: null,
  };
};

export const handlePercentageOperator = (obj) => {
  if (obj.operation && obj.next) {
    const result = compute(obj.total, obj.next, obj.operation);
    return {
      total: Big(result)
        .div(Big("100"))
        .toString(),
      next: null,
      operation: null,
    };
  }
  if (obj.next) {
    return {
      next: Big(obj.next)
        .div(Big("100"))
        .toString(),
    };
  }
  return {};
};

export const handleClear = () => {
  return {
    total: null,
    next: null,
    operation: null,
  };
};

export const handleDotOperator = (obj) => {
  if (obj.next) {
    // ignore a . if the next number already has one
    if (obj.next.includes(".")) {
      return {};
    }
    return { next: obj.next + "." };
  }
  return { next: "0." };
};

export const handleEqualOperator = (obj) => {
  if (obj.next && obj.operation) {
    return {
      total: compute(obj.total, obj.next, obj.operation),
      next: null,
      operation: null,
    };
  } else {
    // '=' with no operation, nothing to do
    return {};
  }
};