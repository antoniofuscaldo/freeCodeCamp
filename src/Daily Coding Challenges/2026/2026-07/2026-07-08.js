/**

Issue Triage

Given a number of milliseconds since the last post on an issue, and the last message posted on the issue, determine what you should do with the issue according to these rules:

If the last message is less than 7 days ago, return "leave it"
If the last message is 7 or more days ago and its content contains "bump" (case-insensitive), return "close it"
Otherwise, return "bump it"

Tests:
Waiting:1. triageIssue(86400000, "Lets fix it") should return "leave it".
Waiting:2. triageIssue(1209600000, "still waiting") should return "bump it".
Waiting:3. triageIssue(864000000, "bump") should return "close it".
Waiting:4. triageIssue(604800000, "Do we still want this?") should return "bump it".
Waiting:5. triageIssue(604800000, "Bumping this") should return "close it".
Waiting:6. triageIssue(345600000, "I'll make a PR") should return "leave it".

*/

export function triageIssue(ms, message) {
  const seven = 604800000;
  if (ms < seven) return 'leave it';
  const m = message.toLowerCase();
  if (m.includes('bump')) return 'close it';
  return 'bump it';
}
