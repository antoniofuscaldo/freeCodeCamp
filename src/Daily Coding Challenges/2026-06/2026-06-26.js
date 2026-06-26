/**

Blood Bank

Given an array of the inventory at a blood bank and an array of patient blood type requests, return a string in the format "X of Y patients served". Where X is the maximum number of patients that can receive blood from the bank's inventory, and Y is the total number of patients.

Each entry in both arrays is one of the following blood types: "AB", "A", "B", or "O".

Compatibility rules:

"AB" can receive from any blood type.
"A" can receive from "A" and "O".
"B" can receive from "B" and "O".
"O" can only receive from "O".
Duplicate entries in the given arrays represent quantity.

*/

function triageBlood(bank, patients) {
  const inv = { O: 0, A: 0, B: 0, AB: 0 };
  const need = { O: 0, A: 0, B: 0, AB: 0 };
  for (const b of bank) inv[b]++;
  for (const p of patients) need[p]++;

  let served = 0;

  const use = (type) => {
    if (inv[type] > 0) {
      inv[type]--;
      served++;
      return true;
    }
  };

  for (let i = 0; i < need.O; i++) use('O');

  for (let i = 0; i < need.A; i++) if (!use('A')) use('O');

  for (let i = 0; i < need.B; i++) if (!use('B')) use('O');

  for (let i = 0; i < need.AB; i++) {
    if (!use('AB')) if (!use('A')) if (!use('B')) use('O');
  }

  return served + ' of ' + patients.length + ' patients served';
}
