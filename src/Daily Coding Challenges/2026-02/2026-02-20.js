/**

2026 Winter Games Day 15: Freestyle Skiing

Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

The two words will be separated by a single space.
Valid first words:

"Misty"
"Ghost"
"Thunder"
"Solar"
"Sky"
"Phantom"
"Frozen"
"Polar"
Valid second words:

"Twister"
"Icequake"
"Avalanche"
"Vortex"
"Snowstorm"
"Frostbite"
"Blizzard"
"Shadow"

 */

function isValidTrick(trickName) {
  const [a, b] = trickName.split(' ');

  const first = ['Misty', 'Ghost', 'Thunder', 'Solar', 'Sky', 'Phantom', 'Frozen', 'Polar'];
  const second = [
    'Twister',
    'Icequake',
    'Avalanche',
    'Vortex',
    'Snowstorm',
    'Frostbite',
    'Blizzard',
    'Shadow',
  ];

  return first.includes(a) && second.includes(b);
}
