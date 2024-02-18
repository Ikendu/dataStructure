// Design a cash register drawer function checkCashRegister() that
// accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with
// a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer
//is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the
//value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change
//due in coins and bills, sorted in highest to lowest order, as the value
//of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05],
// ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20],
//  ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN",
//  change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1],
//  ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

//solution
const cashReg = (price, cash, cid) => {
  let units = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };
  let changeSum = (cash - price) * 100;
  let changeSumCheck = changeSum;
  let status = "";
  let change = [];
  let cidSum = 0;
  let reverseCid = cid.filter((item) => item !== 0).reverse();

  reverseCid.map((item) => {
    let curr = item[0];
    let currSum = item[1] * 100;
    let amount = 0;
    cidSum += item[1];

    while (changeSum >= units[curr] && currSum > 0) {
      amount += units[curr];
      changeSum -= units[curr];
      currSum -= units[curr];
    }
    if (amount > 0) {
      change.push([curr, amount]);
    }
  });
  if (changeSum > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (changeSum === 0 && cidSum == changeSumCheck) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { status, change };
};
console.log(
  cashReg(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
