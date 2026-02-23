/**

Blood Type Compatibility

Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

Each blood type consists of:

A letter: "A", "B", "AB", or "O"
And an Rh factor: "+" or "-"
Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.

Letter Rules:

"O" can donate to other letter type.
"A" can donate to "A" and "AB".
"B" can donate to "B" and "AB".
"AB" can donate only to "AB".
Rh Rules:

Negative ("-") can donate to both "-" and "+".
Positive ("+") can donate only to "+".
Both letter and Rh rule must pass for a donor to be able to donate to the recipient.

*/

function canDonate(donor, recipient) {
  const parse = (t) => {
    if (t.startsWith('AB')) return ['AB', t[2]];
    if (t.startsWith('A')) return ['A', t[1]];
    if (t.startsWith('B')) return ['B', t[1]];
    return ['O', t[1]];
  };

  const [dL, dR] = parse(donor);
  const [rL, rR] = parse(recipient);

  const letterOK =
    dL === 'O' ||
    (dL === 'A' && (rL === 'A' || rL === 'AB')) ||
    (dL === 'B' && (rL === 'B' || rL === 'AB')) ||
    (dL === 'AB' && rL === 'AB');

  const rhOK = dR === '-' || (dR === '+' && rR === '+');

  return letterOK && rhOK;
}
