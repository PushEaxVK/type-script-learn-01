import { use } from './base-types';

// any - варто уникати використання
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = {};

const num: number = notSure;

function fetchData() {
  // some fetch
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = fetchData();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fetchUserData(id: string, callback: (data: any) => void): void {
  const responseData = {
    name: 'Tom',
    id
  };
  callback(responseData);
}

fetchUserData('123', use);

// unknown
function fetchSomeData() {
  return 'Tom';
}

const userData: unknown = fetchSomeData();
if (typeof userData === 'string') {
  console.log(userData.toUpperCase());
}

// tuple
const tupleType: [string, boolean] = ['Hello', true];

const date: [number, number, number] = [1, 10, 2004];

const tuple: [string, ...number[]] = ['hello', 1, 2, 3, 4, 5];

// Enum
enum Role {
  ADMIN,
  USER
}

const person = {
  role: Role.ADMIN
};

// Як літерал
type Role2 = 'ADMIN' | 'USER';

const person2: { role: Role2 } = {
  role: 'ADMIN'
};

// const об'єкт + typeof
const Role3 = {
  ADMIN: 0,
  USER: 1
} as const;

type Role3 = (typeof Role3)[keyof typeof Role3];

const person3 = {
  role: Role3.ADMIN
};

console.log(Role.ADMIN);
console.log(Role[Role.ADMIN]);

// rename
enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Banned = 'Banned'
}

const status: UserStatus = UserStatus.Active;

// const enum - replaced by literals
// їх не можна використовувати у виразах, які вимагають виконання під час виконання
const enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401
}

const status2 = HttpCodes.OK;
console.log(status2);

use(num, data, tupleType, date, tuple, person, person2, person3, status);
