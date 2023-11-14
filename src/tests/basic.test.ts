import { handleButtonClick, handleClear, handleCalculate } from '../components/solid/calculator';
import { expect, test } from 'vitest';

test('input values are concatenated', () => {
    const result = handleButtonClick('5', '3');
    expect(result).toBe('53');
});

test('handleClear() resets the input', () => {
    const result = handleClear();
    expect(result).toBe('');
});

test('handleCalculate() performs addition', () => {
    const result = handleCalculate('5+3');
    expect(result).toBe('8');
});

test('handleCalculate() works with exponents', () => {
    const result = handleCalculate('5**3');
    expect(result).toBe('125');
});

test('handleCalculate() works with parenthesis', () => {
    const result = handleCalculate('(8+2)*3');
    expect(result).toBe('30');
});