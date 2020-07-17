import Big from "big.js";

export const compute = (previous, current, operator) => {
  const operand1 = Big(previous || "0");
  const operand2 = Big(current || (operator === "÷" || operator === 'x' ? "1": "0"));

  switch(operator) {
    case "+": return operand1.plus(operand2).toString();
    case "-": return operand1.minus(operand2).toString();

    case "*":
    case "x": return operand1.times(operand2).toString();

    case "/":
    case "÷": {
      if (parseFloat(operand2) === 0) {
        return "Divide by 0 error";
      } 

      return operand1.div(operand2).toString();
    }

    default: return "0";
  }
}
