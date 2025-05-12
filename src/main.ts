import './style.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function use(...params: any[]): void {
  void params;
}

function addNumber(num1: number, num2: number) {
  return num1 + num2;
}

console.log(addNumber(1, 2));

// boolean: логічний тип даних
const isDone: boolean = false;
use(isDone);

// number: числовий тип даних
const decimal: number = 6;
const float: number = 3.14;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
use(decimal, float, hex, binary, octal);

// string: текстовий тип даних
const color: string = 'blue';
use(color);

// null та undefinde: спеціальні типи даних
const empty: null = null;
const notParam: undefined = undefined;
use(empty, notParam);

// Можна не вказувати тип якщо передається явно
const num = 10;
const str = 'Some string';
const bool = true;
const empty2 = null;
const notParam1 = undefined;
use(num, str, bool, empty2, notParam1);

function foo(num: number, str: string, bool: boolean, empty: null) {
  use(num, str, bool, empty);
  // Some logic
}
foo(1, 'String', false, null);

// Для значень за замовчуванням тип вказувати непотрібно
function foo2(num = 10, str = 'Some string', bool = true, empty = null) {
  // Some logic
  use(num, str, bool, empty);
}
foo2();
