/**

Problem 22: Names scores

Using names, an array defined in the background containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the array?

*/

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
