// TESTS
import Promise from 'bluebird';
import doSomething from './doSomething';
import test from './test';

//  TEST 0
const case0 = {
  input: [
    [100, 123, 44000, 2, 19, 0, 80, 10, 1, 2, 3, 46, 6, 7],
    // [100, 123],
    12
  ],
  expectedOutput: true,
};
test(doSomething, case0, 0);

// [
//   ['Sarah', 400, ['Alice', 'Bob', 'John', 'Sarah']],
//   ['John', 100, ['Alice', 'Bob']]
// ]
