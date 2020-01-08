/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  // Calculate the change due
  let change = cash - price;
  // "The checkCashRegister() function should always return an object with a status key and a change key" / build template response
  let response = { status: "", change: [] };
  // Use reduce method to calculate the amount of cash in the drawer, give 0 as argument for initial value
  let cidTotal = cid.reduce(function(accumulator, current) {
    return accumulator + current[1];
  }, 0);
  // "Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change." This addresses the first part of this statement
  if (cidTotal < change) {
    response["status"] = "INSUFFICIENT_FUNDS";
    return response;
  }
  // Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
  else if (cidTotal === change) {
    response["status"] = "CLOSED";
    response["change"] = cid;
    return response;
  } else {
    // "Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key."
    // Reverse cid array
    cid = cid.reverse();
    let cidInfo = [];
    // Array of denominations
    let val = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    // Build array of objects containing name, val, and totalVal
    for (let i = 0; i < cid.length; i++) {
      let item = {};
      item["name"] = cid[i][0];
      item["val"] = val[i];
      item["totalVal"] = cid[i][1];
      cidInfo.push(item);
    }

    for (let i = 0; i < cidInfo.length; i++) {
      let temp = [];

      if (
        change >= cidInfo[i]["val"] &&
        change > 0 &&
        cidInfo[i]["totalVal"] > 0
      ) {
        temp.push(cidInfo[i].name);
        // Math.floor to minimize floating point discrepancies
        let money = Math.floor(change / cidInfo[i]["val"]) * cidInfo[i]["val"];
        if (money > cidInfo[i]["totalVal"]) {
          money = cidInfo[i]["totalVal"];
        }
        temp.push(money);
        change -= money;
        // Format number using fixed-point notation
        change = +change.toFixed(2);
        // Build response['change'] array
        response["change"].push(temp);
      }
      if (change === 0) {
        break;
      }
    }
    // "Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key."
    if (change === 0) {
      response["status"] = "OPEN";
    }
    // "Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change." This addresses the second part of this statement
    else {
      response["status"] = "INSUFFICIENT_FUNDS";
      response["change"] = [];
    }
  }
  return response;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);
