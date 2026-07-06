/**

Periodic Spelling

Given a word, determine if it can be spelled using element symbols from the periodic table.

Ignore casing when spelling a word. "neon" can be spelled with the symbols "Ne", "O", and "N".
Here's a full list of the element symbols:

["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];
Return an array of the elements used to spell the word, in their original casing and in the order to spell the word. Or, an empty array if it can't be spelled.

Tests:
Waiting:1. getPeriodicSpelling("neon") should return ["Ne", "O", "N"].
Waiting:2. getPeriodicSpelling("rational") should return ["Ra", "Ti", "O", "N", "Al"].
Waiting:3. getPeriodicSpelling("yarn") should return ["Y", "Ar", "N"].
Waiting:4. getPeriodicSpelling("carbon") should return ["C", "Ar", "B", "O", "N"] or ["Ca", "Rb", "O", "N"].
Waiting:5. getPeriodicSpelling("noisy") should return ["N", "O", "I", "S", "Y"] or ["No", "I", "S", "Y"].
Waiting:6. getPeriodicSpelling("bicycles") should return ["B", "I", "C", "Y", "Cl", "Es"] or ["Bi", "C", "Y", "Cl", "Es"].
Waiting:7. getPeriodicSpelling("optics") should return ["O", "P", "Ti", "C", "S"], ["O", "P", "Ti", "Cs"], ["O", "Pt", "I", "C", "S"], or ["O", "Pt", "I", "Cs"].
Waiting:8. getPeriodicSpelling("value") should return [].

*/

export function getPeriodicSpelling(word) {
  const symbols = [
    'H',
    'He',
    'Li',
    'Be',
    'B',
    'C',
    'N',
    'O',
    'F',
    'Ne',
    'Na',
    'Mg',
    'Al',
    'Si',
    'P',
    'S',
    'Cl',
    'Ar',
    'K',
    'Ca',
    'Sc',
    'Ti',
    'V',
    'Cr',
    'Mn',
    'Fe',
    'Co',
    'Ni',
    'Cu',
    'Zn',
    'Ga',
    'Ge',
    'As',
    'Se',
    'Br',
    'Kr',
    'Rb',
    'Sr',
    'Y',
    'Zr',
    'Nb',
    'Mo',
    'Tc',
    'Ru',
    'Rh',
    'Pd',
    'Ag',
    'Cd',
    'In',
    'Sn',
    'Sb',
    'Te',
    'I',
    'Xe',
    'Cs',
    'Ba',
    'La',
    'Ce',
    'Pr',
    'Nd',
    'Pm',
    'Sm',
    'Eu',
    'Gd',
    'Tb',
    'Dy',
    'Ho',
    'Er',
    'Tm',
    'Yb',
    'Lu',
    'Hf',
    'Ta',
    'W',
    'Re',
    'Os',
    'Ir',
    'Pt',
    'Au',
    'Hg',
    'Tl',
    'Pb',
    'Bi',
    'Po',
    'At',
    'Rn',
    'Fr',
    'Ra',
    'Ac',
    'Th',
    'Pa',
    'U',
    'Np',
    'Pu',
    'Am',
    'Cm',
    'Bk',
    'Cf',
    'Es',
    'Fm',
    'Md',
    'No',
    'Lr',
    'Rf',
    'Db',
    'Sg',
    'Bh',
    'Hs',
    'Mt',
    'Ds',
    'Rg',
    'Cn',
    'Nh',
    'Fl',
    'Mc',
    'Lv',
    'Ts',
    'Og',
  ];
  const map = new Map(symbols.map((s) => [s.toLowerCase(), s]));
  const w = word.toLowerCase();
  const n = w.length;

  function dfs(i, res) {
    if (i === n) return res;
    if (i + 2 <= n) {
      const t = w.slice(i, i + 2);
      if (map.has(t)) {
        const r = dfs(i + 2, res.concat(map.get(t)));
        if (r) return r;
      }
    }
    const o = w[i];
    if (map.has(o)) {
      const r = dfs(i + 1, res.concat(map.get(o)));
      if (r) return r;
    }
    return null;
  }

  return dfs(0, []) || [];
}
