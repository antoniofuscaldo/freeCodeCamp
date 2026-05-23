/**

Open Issues

Given an array of issue numbers and another array of pull request (PR) numbers, return an array of issues that remain open after all PRs have been merged.

A PR closes an issue if their digits are a rotation of each other. For example, issue 123 would be closed by PR 231 or 312.
A PR does not close an issue with the exact same number. For example, PR 123 does not close issue 123. So an issue with all the same number can't get closed.
Either number may have leading zeros stripped. For example, PR 201 would close issue 12 (012, a rotation of 201). Similarily, issue 201 would be closed by PR 12.
Return the remaining open issues in the order they were given.

*/

function getOpenIssues(issues, prs) {
  const normalize = (n) => String(+n);

  const isRotation = (a, b) => {
    a = String(a);
    b = String(b);

    if (normalize(a) === normalize(b) && a.length === b.length) return false;

    const len = Math.max(a.length, b.length);

    a = a.padStart(len, '0');
    b = b.padStart(len, '0');

    return (a + a).includes(b);
  };

  return issues.filter((issue) => !prs.some((pr) => isRotation(issue, pr)));
}
