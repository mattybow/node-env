import _ from 'lodash';


// [
//   ['Sarah', 400, ['Alice', 'Bob', 'John', 'Sarah']],
//   ['John', 100, ['Alice', 'Bob']]
// ]
//
// perTransactionCost = 400/length
//
// {
//   Alice: -100 + -50
//   Bob: -100 + -50
//   John: -100 + 100
//   Sarah: 400 + -100
// }
//{"Alice":-600,"Bob":-600,"John":900,"Sarah":300}


export default function whoOwesWhat(transactions){
  const people = {};

  transactions.forEach((transaction) => {
    const [payer, amount, bens] = transaction;
    const perAmount = -1 * amount / bens.length;
    bens.forEach((ben) => {
      if(!(ben in people)){
        people[ben] = perAmount;
      } else {
        people[ben] = people[ben] + perAmount;
      }
    });
    people[payer] = people[payer] + amount;
  });

  let t =0;

  while(Object.keys(people).length && t < 10){
    const payee = Object.keys(people).find((person) => people[person] > 0);
    const payer = Object.keys(people).find((person) => people[person] < 0);
    const payeeBalance = people[payee]; //900
    const payerBalance = people[payer]; //-600
    const payAmount = payeeBalance >= (-1 * payerBalance) ? payerBalance : -payeeBalance;
    const newPayeeBalance = payeeBalance + payAmount;  //300
    console.log(people, payAmount);
    console.log(`${payer} pays ${payee}: ${-1* payAmount}`); //600
    // update the payee
    if (newPayeeBalance === 0) {
      delete people[payee];
    } else {
      people[payee] = newPayeeBalance;
    }
    // update payer
    if (-1*payerBalance <= payeeBalance){
      delete people[payer];
    } else {
      people[payer] = -newPayeeBalance;
    }
    Object.keys(people).forEach((person) => {
      if(people[person] === 0){
        delete people[person];
      }
    });
    t++;
  }
}

//  TEST 0
// const case0 = {
//   input: [
//     [
//       ['Sarah', 400, ['Alice', 'Bob', 'John', 'Sarah']],
//       ['John', 1000, ['Alice', 'Bob']]
//     ]
//   ],
//   expectedOutput: 199,
// };
// test(doSomething, case0, 0);

// [
//   ['Sarah', 400, ['Alice', 'Bob', 'John', 'Sarah']],
//   ['John', 100, ['Alice', 'Bob']]
// ]
