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
  // Some logic
  use(num, str, bool, empty);
}
foo(1, 'String', false, null);

// Для значень за замовчуванням тип вказувати непотрібно
function foo2(num = 10, str = 'Some string', bool = true, empty = null) {
  // Some logic
  use(num, str, bool, empty);
}
foo2();

// Складні типи даних

// object
const obj: object = {};
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const obj2: {} = {};
const user = {
  name: 'Tom',
  age: 30
};
use(obj, obj2, user);

const user2: { name: string; age: number } = {
  name: 'Tom',
  age: 30
};
use(user2);

// type User
type User = {
  name: string;
  age: number;
};

const user3: User = {
  name: 'Tom',
  age: 30
};

const userJack: User = {
  name: 'Jack',
  age: 25
};

use(user3, userJack);

// interface
interface NewUser {
  name: string;
  age: number;
}

const user4: NewUser = {
  name: 'Tom',
  age: 30
};

use(user4);

// array
const arrString: string[] = ['Hello', 'Hu'];
const arrNumber: number[] = [1, 2, 3];
use(arrString, arrNumber);

// матриця
const matrix: number[][] = [
  [1, 2],
  [3, 4]
];
// різні типи
const mixed: (number | string)[] = [1, 'two'];
// generic
const numbers: Array<number> = [1, 2, 3, 4, 5];

use(matrix, mixed, numbers);

// Масив об'єктів
const users: {
  name: string;
  age: number;
}[] = [
  { name: 'Tom', age: 30 },
  { name: 'Jack', age: 25 },
  { name: 'Alice', age: 32 }
];
use(users);

const users2: User[] = [
  { name: 'Tom', age: 30 },
  { name: 'Jack', age: 25 },
  { name: 'Alice', age: 32 }
];
use(users2);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const arrayAny: any[] = [123, 'TEXT', { name: 'Tom' }, [1, 2, 3]];
use(arrayAny);
