/**

Complementary DNA

Given a string representing a DNA sequence, return its complementary strand using the following rules:

DNA consists of the letters "A", "C", "G", and "T".
The letters "A" and "T" complement each other.
The letters "C" and "G" complement each other.
For example, given "ACGT", return "TGCA".

Tests:
Waiting:1. complementaryDNA("ACGT") should return "TGCA".
Waiting:2. complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG".
Waiting:3. complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC".
Waiting:4. complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC".

*/

export function complementaryDNA(strand) {
  const complements = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  return strand
    .split('')
    .map((base) => complements[base])
    .join('');
}
