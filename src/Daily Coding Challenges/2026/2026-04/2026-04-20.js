/**

Acronym Finder

Given a string representing an acronym, return the full name of the organization it belongs to from the list below:

"National Avocado Storage Authority"
"Cats Infiltration Agency"
"Fluffy Beanbag Inspectors"
"Department Of Jelly"
"Wild Honey Organization"
"Eating Pancakes Administration"
Each letter in the given acronym should match the first letter of each word in the organization it belongs to, in the same order.

*/

function findOrg(acronym) {
  const orgs = [
    'National Avocado Storage Authority',
    'Cats Infiltration Agency',
    'Fluffy Beanbag Inspectors',
    'Department Of Jelly',
    'Wild Honey Organization',
    'Eating Pancakes Administration',
  ];

  for (const o of orgs) {
    const a = o
      .split(' ')
      .map((w) => w[0])
      .join('');
    if (a === acronym) return o;
  }

  return 'No match';
}
