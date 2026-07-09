/**

Issue Triage 2

Given an issue title and an array of current labels, return an updated array of labels based on the following rules:

If the issue doesn't have any labels, add:

"bug" and "needs triage" if the title contains "error" or "bug"
"enhancement" and "discussing" if the title contains "feature" or "add"
Otherwise, if the given labels contain:

"needs triage" and the title contains "simple" or "easy", remove "needs triage" and add "good first issue"
"discussing" and the title contains "planned" or "next", remove "discussing" and add "on the roadmap"
Otherwise, if "needs triage" or "discussing" is present, remove it and add "help wanted"
If the title contains:

"security", add a "critical" label

Tests:
Waiting:1. triageIssue("app crashes with error", []) should return ["bug", "needs triage"].
Waiting:2. triageIssue("app crashes with error", ["bug", "needs triage"]) should return ["bug", "help wanted"].
Waiting:3. triageIssue("add dark mode", []) should return ["enhancement", "discussing"].
Waiting:4. triageIssue("add dark mode", ["enhancement", "discussing"]) should return ["enhancement", "help wanted"].
Waiting:5. triageIssue("xss security bug", []) should return ["bug", "needs triage", "critical"].
Waiting:6. triageIssue("security vulnerability in auth", []) should return ["critical"].
Waiting:7. triageIssue("easy a11y fix", ["bug", "needs triage"]) should return ["bug", "good first issue"].
Waiting:8. triageIssue("planned api migration", ["enhancement", "discussing"]) should return ["enhancement", "on the roadmap"].
Waiting:9. triageIssue("improve security", ["enhancement", "discussing"]) should return ["enhancement", "help wanted", "critical"].

*/

export function triageIssue(title, labels) {
  const t = title.toLowerCase();
  let out = [...labels];

  const has = (x) => out.includes(x);
  const add = (x) => {
    if (!has(x)) out.push(x);
  };
  const remove = (x) => {
    out = out.filter((l) => l !== x);
  };

  if (out.length === 0) {
    if (t.includes('error') || t.includes('bug')) {
      add('bug');
      add('needs triage');
    } else if (t.includes('feature') || t.includes('add')) {
      add('enhancement');
      add('discussing');
    }
  } else {
    if (has('needs triage') && (t.includes('simple') || t.includes('easy'))) {
      remove('needs triage');
      add('good first issue');
    } else if (
      has('discussing') &&
      (t.includes('planned') || t.includes('next'))
    ) {
      remove('discussing');
      add('on the roadmap');
    } else if (has('needs triage') || has('discussing')) {
      remove('needs triage');
      remove('discussing');
      add('help wanted');
    }
  }

  if (t.includes('security')) add('critical');

  return out;
}
