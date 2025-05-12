import './style.css';

function addNumber(num1: number, num2: number) {
  return num1 + num2;
}

console.log(addNumber(1, 2));

// boolean: логічний тип даних
let isDone: boolean = false;

// number: числовий тип даних
let decimal: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string: текстовий тип даних
let color: string = 'blue';

// null та undefinde: спеціальні типи даних
let empty: null = null;
let notParam: undefined = undefined;

// Можна не вказувати тип якщо передається явно
const num = 10;
const str = 'Some string';
const bool = true;
const empty = null;
const notParam1 = undefined;

function foo(num: number, str: string, bool: boolean, empty: null) {
  // Some logic
}

// Для значень за замовчуванням тип вказувати непотрібно
function foo2(num = 10, str = 'Some string', bool = true, empty = null) {
  // Some logic
}
