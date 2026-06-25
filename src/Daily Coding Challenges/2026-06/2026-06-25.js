/**

Frontmatter Parser

Given a string representing a frontmatter block, parse it and return an object (JavaScript) or dictionary (Python) with the keys and values.

Frontmatter is wrapped in --- delimiters and contains key: value pairs within them, one per line. For example:

---
title: My Post
draft: false
views: 100
---
Should return:

{
  title: "My Post",
  draft: false,
  views: 100
}
Numbers, Booleans, and Strings should all be returned as their respective type.
The given string will have new lines separated with the newline character ("\n"). The above example would be given as: "---\ntitle: My Post\ndraft: false\nviews: 100\n---".

*/

function parseFrontmatter(str) {
  const o = {};
  const lines = str.split('\n').slice(1, -1);
  for (const l of lines) {
    const i = l.indexOf(':');
    const k = l.slice(0, i).trim();
    let v = l.slice(i + 1).trim();
    if (v === 'true') v = true;
    else if (v === 'false') v = false;
    else if (!isNaN(v) && v.trim() !== '') v = +v;
    o[k] = v;
  }
  return o;
}
