/**

Spellcaster

Given a string of spell codes you are casting, calculate the total score.

Each character in the string represents a spell:

Code	Spell	Category	Base Score
"f"	Fire	Destruction	3
"l"	Lightning	Destruction	3
"i"	Ice	Control	2
"w"	Wind	Control	2
"h"	Heal	Restoration	1
"s"	Shield	Restoration	1
A combo multiplier is applied based on how many spells in a row have been cast from different categories:

The first spell always scores at base value.
Each consecutive spell from a different category than the previous increases the multiplier by 1.
Casting a spell from the same category as the previous resets the multiplier back to 1.
The score for each spell is its base score multiplied by the current multiplier.
Return the total score from the sequence of spells.

*/

function cast(spells) {
  if (!spells) return 0;

  const spellMap = {
    f: { base: 3, category: 'destruction' },
    l: { base: 3, category: 'destruction' },
    i: { base: 2, category: 'control' },
    w: { base: 2, category: 'control' },
    h: { base: 1, category: 'restoration' },
    s: { base: 1, category: 'restoration' },
  };

  let total = 0;
  let multiplier = 1;
  let prevCategory = null;

  for (let i = 0; i < spells.length; i++) {
    const ch = spells[i];
    const spell = spellMap[ch];
    if (!spell) continue; // ignore invalid characters, if any

    if (i === 0) {
      multiplier = 1;
    } else {
      if (spell.category !== prevCategory) {
        multiplier += 1;
      } else {
        multiplier = 1;
      }
    }

    total += spell.base * multiplier;
    prevCategory = spell.category;
  }

  return total;
}
