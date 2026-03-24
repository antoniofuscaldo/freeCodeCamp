/**

Passing Exam Count

Given an array of student exam scores and the score needed to pass it, return the number of students that passed the exam.

*/

function passingCount(scores, passingScore) {
  return scores.filter((s) => s >= passingScore).length;
}
