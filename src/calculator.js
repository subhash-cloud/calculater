import React, { useState } from 'react';

function Calculator() {
  const [expression, setExpression] = useState(''); 
  const [result, setResult] = useState(''); 

  const handleNumberClick = (number) => {
    setExpression(expression + number); 
  };

  const handleOperatorClick = (operator) => {
    if (
      expression === '' ||
      isNaN(expression[expression.length - 1]) ||
      (operator === '-' && (expression === '' || isNaN(expression[expression.length - 1])))
    ) {
      return; 
    }
    setExpression(expression + operator); 
  };

  const handleClearClick = () => {
    setExpression('');
    setResult('');
  };

  const handleEqualsClick = () => {
    if (expression === '') {
      setResult('Error');
      return;
    }

    try {
      const evaluatedResult = eval(expression); 
      if (isNaN(evaluatedResult)) {
        setResult('NaN');
      } else if (!isFinite(evaluatedResult)) {
        setResult('Infinity');
      } else {
        setResult(evaluatedResult.toString()); 
      }
    } catch (error) {
      setResult('Error'); 
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <div className="display"> 
        <input type="text" className="expression-field" value={expression} readOnly />
      </div>
      <div className="result">
        {result}
      </div>
      <div className="buttons">
        <button onClick={() => handleNumberClick(7)} className="button">7</button>
        <button onClick={() => handleNumberClick(8)} className="button">8</button>
        <button onClick={() => handleNumberClick(9)} className="button">9</button>
        <button onClick={() => handleOperatorClick('+')} className="operator-button">+</button>
        <button onClick={() => handleNumberClick(4)} className="button">4</button>
        <button onClick={() => handleNumberClick(5)} className="button">5</button>
        <button onClick={() => handleNumberClick(6)} className="button">6</button>
        <button onClick={() => handleOperatorClick('-')} className="operator-button">-</button>
        <button onClick={() => handleNumberClick(1)} className="button">1</button>
        <button onClick={() => handleNumberClick(2)} className="button">2</button>
        <button onClick={() => handleNumberClick(3)} className="button">3</button>
        <button onClick={() => handleOperatorClick('*')} className="operator-button">*</button>
        <button onClick={handleClearClick} className="clear-button">C</button>
        <button onClick={() => handleNumberClick(0)} className="button">0</button>
        <button onClick={handleEqualsClick} className="equal-button">=</button>
        <button onClick={() => handleOperatorClick('/')} className="operator-button">/</button>
      </div>
    </div>
  );
}

export default Calculator;