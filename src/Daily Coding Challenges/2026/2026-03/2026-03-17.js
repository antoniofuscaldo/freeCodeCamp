/**

Anniversary Milestones

Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

Years Married	Milestone
1	"Paper"
5	"Wood"
10	"Tin"
25	"Silver"
40	"Ruby"
50	"Gold"
60	"Diamond"
70	"Platinum"
If they haven't reached the first milestone, return "Newlyweds".

*/

function getMilestone(years) {
  if (years < 1) return 'Newlyweds';

  const m = [
    [70, 'Platinum'],
    [60, 'Diamond'],
    [50, 'Gold'],
    [40, 'Ruby'],
    [25, 'Silver'],
    [10, 'Tin'],
    [5, 'Wood'],
    [1, 'Paper'],
  ];

  for (const [y, name] of m) if (years >= y) return name;
  return 'Newlyweds';
}
