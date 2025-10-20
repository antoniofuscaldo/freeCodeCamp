/**

Battle of Words

Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

The given sentences will always contain the same number of words.
Words are separated by a single space and will only contain letters.
The value of each word is the sum of its letters.
Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
A word wins if its value is greater than the opposing word's value.
The team with more winning words is the winner.
Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.

*/

function battle(ourTeam, opponent) {
  function wordValue(word) {
    let sum = 0;
    for (let char of word) {
      let code = char.toLowerCase().charCodeAt(0) - 96;
      if (char >= "A" && char <= "Z") {
        sum += code * 2;
      } else {
        sum += code;
      }
    }
    return sum;
  }

  const ourWords = ourTeam.split(" ");
  const oppWords = opponent.split(" ");

  let ourWins = 0;
  let oppWins = 0;

  for (let i = 0; i < ourWords.length; i++) {
    const ourVal = wordValue(ourWords[i]);
    const oppVal = wordValue(oppWords[i]);

    if (ourVal > oppVal) {
      ourWins++;
    } else if (oppVal > ourVal) {
      oppWins++;
    }
  }

  if (ourWins > oppWins) return "We win";
  if (ourWins < oppWins) return "We lose";
  return "Draw";
}
