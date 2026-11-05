/**

Class Average

Given an array of exam scores (numbers), return the average score in form of a letter grade according to the following chart:

Average Score	Letter Grade
97-100	"A+"
93-96	"A"
90-92	"A−"
87-89	"B+"
83-86	"B"
80-82	"B-"
77-79	"C+"
73–76	"C"
70-72	"C-"
67-69	"D+"
63-66	"D"
60–62	"D-"
below 60	"F"
Calculate the average by adding all scores in the array and dividing by the total number of scores.

*/

function getAverageGrade(scores) {
  const avg = scores.reduce((a, b) => a + b) / scores.length;
  if (avg >= 97) return 'A+';
  if (avg >= 93) return 'A';
  if (avg >= 90) return 'A-';
  if (avg >= 87) return 'B+';
  if (avg >= 83) return 'B';
  if (avg >= 80) return 'B-';
  if (avg >= 77) return 'C+';
  if (avg >= 73) return 'C';
  if (avg >= 70) return 'C-';
  if (avg >= 67) return 'D+';
  if (avg >= 63) return 'D';
  if (avg >= 60) return 'D-';
  return 'F';
}
