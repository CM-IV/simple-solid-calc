import { createSignal } from "solid-js";

const handleButtonClick = (input: string, value: string) => {
  return input + value;
};

const handleClear = () => {
  return '';
};

const handleCalculate = (input: string) => {
  try {
    const result = new Function(`return ${input}`)();
    return result.toString();
  } catch (error) {
    return 'Error';
  }
};

const Calculator = () => {
  const [input, setInput] = createSignal<string>('');

  const handleClick = (value: string) => {
    setInput((prevInput) => handleButtonClick(prevInput, value));
  };

  const handleEquals = () => {
    setInput((prevInput) => handleCalculate(prevInput));
  };

  return (
    <div class="calculator">
      <h1>SolidJS Calculator</h1>
      <input type="text" value={input()} readOnly />
      <div class="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <br />
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => setInput(handleClear())}>C</button>
        <br />
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('**')}>^</button>
        <br />
        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={handleEquals}>=</button>
      </div>
    </div>
  );
};

export { handleButtonClick, handleClear, handleCalculate };

