function namesScores(arr) {
  arr.sort();
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i].replace(/"/g, '');
    let score = 0;
    for (let j = 0; j < name.length; j++) {
      score += name.charCodeAt(j) - 64;
    }
    total += score * (i + 1);
  }
  return total;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'],
  test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test1);
