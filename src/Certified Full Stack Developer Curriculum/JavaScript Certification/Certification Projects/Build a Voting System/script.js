const poll = new Map();

function addOption(option) {
  const name = typeof option === 'string' ? option.trim() : '';
  if (!name) return 'Option cannot be empty.';
  if (poll.has(name)) return `Option "${name}" already exists.`;
  poll.set(name, new Set());
  return `Option "${name}" added to the poll.`;
}

function vote(option, voterId) {
  const name = typeof option === 'string' ? option.trim() : '';
  if (!name || !poll.has(name)) return `Option "${name}" does not exist.`;
  const voters = poll.get(name);
  if (voters.has(voterId)) return `Voter ${voterId} has already voted for "${name}".`;
  voters.add(voterId);
  return `Voter ${voterId} voted for "${name}".`;
}

function displayResults() {
  const lines = ['Poll Results:'];
  for (const [opt, voters] of poll.entries()) {
    lines.push(`${opt}: ${voters.size} votes`);
  }
  return lines.join('\n');
}

addOption('Turkey');
addOption('Malaysia');
addOption('Algeria');

vote('Algeria', 'traveler1');
vote('Turkey', 'traveler2');
vote('Turkey', 'traveler3');

globalThis.poll = poll;
globalThis.addOption = addOption;
globalThis.vote = vote;
globalThis.displayResults = displayResults;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { poll, addOption, vote, displayResults };
}
