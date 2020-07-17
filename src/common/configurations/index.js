import React from 'react';
import { SquareRootExpression, PowerExpression, LogarithmExpression} from '../ui';

const ButtonConfigurationsMap = new Map(
  [
    ["(", 
      {
        key: "(",
        label: "(",
        operatorType: "scientific",
        className: "",
      }
    ],
    [")", 
      {
        key: ")",
        label: ")",
        operatorType: "scientific",
        className: "",
      }
    ],
    ["mc", 
      {
        key: "mc",
        label: "mc",
        operatorType: "scientific",
        className: "",
      }
    ],
    ["m+", 
      {
        key: "m+",
        label: "m+",
        operatorType: "scientific",
        className: "",
      }
    ],
    ["m-",
      {
        key: "m-",
        label: "m-",
        operatorType: "scientific",
        className: "",
      }
    ],
    ["mr",
      {
        key: "mr",
        label: "mr",
        operatorType: "scientific",
        className: "",
      }
    ],
    ["AC",
      {
        key: "AC",
        label: "AC",
        className: "",
      }
    ],
    ["+/-", 
      {
        key: "+/-",
        label: "+/-",
        className: "",
      }
    ],
    ["%", 
      {
        key: "%",
        label: "%",
        className: "",
      }
    ],
    ["÷",
      {
        key: "÷",
        label: "÷",
        operatorType: "arithmetic",
        className: "",
      }
    ],
    ["second",
      {
        key: "second",
        label: <PowerExpression base="2" exponent="nd" />,
        operatorType: "scientific",
        className: "",
      }
    ],
    ["xPow2",
      {
        key: "xPow2",
        label: <PowerExpression base="x" exponent="2" />,
        operatorType: "scientific",
        className: "",
      }
    ],
    ["xPow3", 
      {
        key: "xPow3",
        label: <PowerExpression base="x" exponent="3" />,
        operatorType: "scientific",
        className: "",
      }
    ],
    ["xPowY",
      {
        key: "xPowY",
        label: <PowerExpression base="x" exponent="y" />,
        operatorType: "scientific",
        className: "",
      }
    ],
    ["ePowX",
      {
        key: "ePowX",
        label: <PowerExpression base="e" exponent="x" />,
        operatorType: "scientific",
        className: "",
      }
    ],
    ["10PowX",
      {
        key: "10PowX",
        label: <PowerExpression base="10" exponent="x" />,
        operatorType: "scientific",
        className: "",
      }
    ],
    ["7",
      {
        key: "7",
        label: "7",
        operatorType: "number",
        className: "",
      }
    ],
    ["8", 
      {
        key: "8",
        label: "8",
        operatorType: "number",
        className: "",
      }
    ],
    ["9",
      {
        key: "9",
        label: "9",
        operatorType: "number",
        className: "",
      }
    ],
    ["x",
      {
        key: "x",
        label: "x",
        operatorType: "arithmetic",
        className: "",
      }
    ],
    ["1/x", 
      {
        key: "1/x",
        label: "1/x",
        operatorType: "scientific",
        className: "",
      }
    ],
    ["2SqrX", {
      key: "2SqrX",
      label: <SquareRootExpression radicand="X" index="2" />,
      operatorType: "scientific",
      className: "",
    }],
    ["3SqrX", {
      key: "3SqrX",
      label: <SquareRootExpression radicand="X" index="3" />,
      operatorType: "scientific",
      className: "",
    }],
    ["XSqrY", {
      key: "XSqrY",
      label: <SquareRootExpression radicand="Y" index="X" />,
      operatorType: "scientific",
      className: "",
    }],
    ["In", {
      key: "In",
      label: "In",
      operatorType: "scientific",
      className: "",
    }],
    ["log10", {
      key: "log10",
      label: <LogarithmExpression base="log" exponent="10" />,
      operatorType: "scientific",
      className: "",
    }],
    ["4", {
      key: "4",
      label: "4",
      operatorType: "number",
      className: "",
    }],
    ["5", {
      key: "5",
      label: "5",
      operatorType: "number",
      className: "",
    }],
    ["6", {
      key: "6",
      label: "6",
      operatorType: "number",
      className: "",
    }],
    ["-", {
      key: "-",
      label: "-",
      operatorType: "arithmetic",
      className: "",
    }],
    ["x!", {
      key: "x!",
      label: "x!",
      operatorType: "scientific",
      className: "",
    }],
    ["sin", {
      key: "sin",
      label: "sin",
      operatorType: "scientific",
      className: "",
    }],
    ["cos", {
      key: "cos",
      label: "cos",
      operatorType: "scientific",
      className: "",
    }],
    ["tan", {
      key: "tan",
      label: "tan",
      operatorType: "scientific",
      className: "",
    }],
    ["e", {
      key: "e",
      label: "e",
      operatorType: "scientific",
      className: "",
    }],
    ["EE", {
      key: "EE",
      label: "EE",
      operatorType: "scientific",
      className: "",
    }],
    ["1", {
      key: "1",
      label: "1",
      operatorType: "number",
      className: "",
    }],
    ["2", {
      key: "2",
      label: "2",
      operatorType: "number",
      className: "",
    }],
    ["3", {
      key: "3",
      label: "3",
      operatorType: "number",
      className: "",
    }],
    ["+", {
      key: "+",
      label: "+",
      operatorType: "arithmetic",
      className: "",
    }],
    ["Rad", {
      key: "Rad",
      label: "Rad",
      operatorType: "scientific",
      className: "",
    }],
    ["sinh",
    {
      key: "sinh",
      label: "sinh",
      operatorType: "scientific",
      className: "",
    }],
    ["cosh", {
      key: "cosh",
      label: "cosh",
      operatorType: "scientific",
      className: "",
    }],
    ["tanh", {
      key: "tanh",
      label: "tanh",
      operatorType: "scientific",
      className: "",
    }],
    ["nArray", {
      key: "nArray",
      label: <span>&#8719;</span>,
      operatorType: "scientific",
      className: "",
    }],
    ["Rand", {
      key: "Rand",
      label: "Rand",
      operatorType: "scientific",
      className: "small-font",
    }],
    ["0", {
      key: "0",
      label: "0",
      operatorType: "number",
      className: "expanded-button",
    }],
    [".", {
      key: ".",
      label: ".",
      operatorType: "number",
      className: "",
    }],
    ["=", {
      key: "=",
      label: "=",
      operatorType: "arithmetic",
      className: "",
    }],
]);

const ButtonConfigurations = Array.from(ButtonConfigurationsMap);

export { ButtonConfigurationsMap, ButtonConfigurations };