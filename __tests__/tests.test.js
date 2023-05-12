import { stringLength, reverseString, capitalize } from '../strings.js';
import { add, substract, multiply, divide } from '../calculator.js';


describe('String functions', () => {
	test('Get the lenght of a string "hola"', () => {
		expect(stringLength('hola')).toBe(4);
	});

	test('Get the lenght of a string ""', () => {
		expect(stringLength('')).toBe('error!');
	});

	test('Get the lenght of a string "hola12345678910"', () => {
		expect(stringLength('hola12345678910')).toBe('error!');
	});

	test('Get the the reverse of a string "hola" most return "aloh"', () => {
		expect(reverseString('hola')).toBe('aloh');
	});

	test('Capitalize of a string "hola" most return "Hola"', () => {
		expect(capitalize('hola')).toBe('Hola');
	});
});

describe('Add', () => {
	test('3 + 5 = 8', () => {
		expect(add(3, 5)).toBe(8);
	});

	test('3 + (-5) = -2', () => {
		expect(add(3, -5)).toBe(-2);
	});

	test('0 + 5 = 5', () => {
		expect(add(0, 5)).toBe(5);
	});

});

describe('Substract', () => {
	test('3 - 5 = -2', () => {
		expect(substract(3, 5)).toBe(-2);
	});

	test('3 - (-5) = 8', () => {
		expect(substract(3, -5)).toBe(8);
	});

	test('0 - 5 = -5', () => {
		expect(substract(0, 5)).toBe(-5);
	});

});

describe('Multiply', () => {
	test('3 * 5 = 15', () => {
		expect(multiply(3, 5)).toBe(15);
	});

	test('3 * (-5) = -15', () => {
		expect(multiply(3, -5)).toBe(-15);
	});

	test('0 * 5 = 0', () => {
		expect(multiply(0, 5)).toBe(0);
	});

});

describe('Divide', () => {
	test('15 / 5 = 3', () => {
		expect(divide(15, 5)).toBe(3);
	});

	test('3 / 0 = undefined', () => {
		expect(divide(3, 0)).toBe(undefined);
	});

	test('0 / 0 = undefined', () => {
		expect(divide(0, 0)).toBe(undefined);
	});

});