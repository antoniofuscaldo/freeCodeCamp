/**

Pet Age Calculator

Given a pet type and age in human years, return the equivalent age in pet years using the following conversion table:

Pet	Multiplier
"dog"	7
"cat"	6
"rabbit"	8
"hamster"	30
"guinea pig"	12
"goldfish"	6
"bird"	5

Tests:
Waiting:1. petYears("dog", 5) should return 35.
Waiting:2. petYears("cat", 9) should return 54.
Waiting:3. petYears("rabbit", 3) should return 24.
Waiting:4. petYears("hamster", 4) should return 120.
Waiting:5. petYears("guinea pig", 5) should return 60.
Waiting:6. petYears("goldfish", 2) should return 12.
Waiting:7. petYears("bird", 1) should return 5.

*/

export function petYears(pet, age) {
  const mult = {
    dog: 7,
    cat: 6,
    rabbit: 8,
    hamster: 30,
    'guinea pig': 12,
    goldfish: 6,
    bird: 5,
  };
  return age * mult[pet];
}
