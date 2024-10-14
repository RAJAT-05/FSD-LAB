import React, { useState } from 'react';
import './Calculator.css'; // We'll create a CSS file for styling later

const Calculator = () => {
    const [input, setInput] = useState('');  // To store the current input
    const [result, setResult] = useState(''); // To store the calculated result

    // Function to handle button click
    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    // Function to clear the input and result
    const handleClear = () => {
        setInput('');
        setResult('');
    };

    // Function to handle backspace
    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    // Function to calculate the result when '=' is pressed
    const handleEqual = () => {
        try {
            setResult(eval(input)); // eval() is used for simplicity, but be careful using it in production
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <input type="text" value={input} readOnly />
                <h2>{result}</h2>
            </div>
            <div className="buttons">
                <button onClick={handleClear}>AC</button>
                <button onClick={handleBackspace}>C</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={handleEqual}>=</button>
                <button onClick={() => handleClick('0')} className="zero">0</button>
                <button onClick={() => handleClick('.')}>.</button>
            </div>
        </div>
    );
};

export default Calculator;
