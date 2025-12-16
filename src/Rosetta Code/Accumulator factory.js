/**

Accumulator factory

A problem posed by Paul Graham is that of creating a function that takes a single (numeric) argument and which returns another function that is an accumulator. The returned accumulator function in turn also takes a single numeric argument, and returns the sum of all the numeric values passed in so far to that accumulator (including the initial value passed when the accumulator was created).

Create a function that takes a number  n
  and generates accumulator functions that return the sum of every number ever passed to them.

Rules:

Do not use global variables.

Hint:

Closures save outer state.

*/

function accumulator(sum) {
  return function (n) {
    sum += n;
    return sum;
  };
}
