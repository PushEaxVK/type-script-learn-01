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

use(num, data, tupleType, date, tuple);
