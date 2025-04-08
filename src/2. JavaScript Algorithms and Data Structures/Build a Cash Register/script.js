let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

document.getElementById("price").value = price.toFixed(2);

document.getElementById("purchase-btn").addEventListener("click", () => {
  const cashInput = document.getElementById("cash");
  const changeDueElement = document.getElementById("change-due");
  const cash = parseFloat(cashInput.value);

  if (isNaN(cash)) {
    alert("Please enter a valid number");
    return;
  }

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    changeDueElement.textContent =
      "No change due - customer paid with exact cash";
    return;
  }

  const result = calculateChange(price, cash, cid);
  let output;

  if (result.status === "INSUFFICIENT_FUNDS") {
    output = "Status: INSUFFICIENT_FUNDS";
  } else if (result.status === "CLOSED") {
    output =
      "Status: CLOSED " +
      result.change
        .map(([name, amount]) => `${name}: $${amount.toFixed(2)}`)
        .join(" ");
  } else {
    output =
      "Status: OPEN " +
      result.change
        .map(([name, amount]) => `${name}: $${amount.toFixed(2)}`)
        .join(" ");
  }

  changeDueElement.textContent = output;
});

function calculateChange(price, cash, cid) {
  const currencyUnit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0,
  };

  let changeDue = cash - price;
  let totalCID = parseFloat(
    cid.reduce((acc, [, amount]) => acc + amount, 0).toFixed(2)
  );

  if (changeDue > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (parseFloat(changeDue.toFixed(2)) === totalCID) {
    const filteredCid = cid.filter(([, amount]) => amount > 0);
    filteredCid.sort((a, b) => currencyUnit[b[0]] - currencyUnit[a[0]]);
    return { status: "CLOSED", change: filteredCid };
  }

  let change = [];
  const reversedCid = [...cid].reverse();
  let remainingChange = changeDue;

  for (let [name, amount] of reversedCid) {
    const unitValue = currencyUnit[name];
    let used = 0;
    let available = amount / unitValue;

    while (remainingChange >= unitValue && available > 0) {
      remainingChange = parseFloat((remainingChange - unitValue).toFixed(2));
      used += unitValue;
      available--;
    }

    if (used > 0) {
      change.push([name, used]);
    }
  }

  if (remainingChange > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  change.sort((a, b) => currencyUnit[b[0]] - currencyUnit[a[0]]);
  return { status: "OPEN", change: change };
}
