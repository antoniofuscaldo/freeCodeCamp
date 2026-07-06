/**

Song Mood Finder

Given a genre string and a BPM number for a song, determine the mood using the following table:

Mood	Genre	BPM Range
"focus"	"classical"	60–109
"focus"	"electronic"	60–89
"happy"	"pop"	60–180
"happy"	"classical"	110–180
"happy"	"rock"	60–129
"happy"	"electronic"	90–134
"hype"	"rock"	130–180
"hype"	"electronic"	135–180

*/

function getMood(genre, bpm) {
  const g = genre.toLowerCase();
  if (g === 'classical') {
    if (bpm >= 60 && bpm <= 109) return 'focus';
    if (bpm >= 110 && bpm <= 180) return 'happy';
  }
  if (g === 'electronic') {
    if (bpm >= 60 && bpm <= 89) return 'focus';
    if (bpm >= 90 && bpm <= 134) return 'happy';
    if (bpm >= 135 && bpm <= 180) return 'hype';
  }
  if (g === 'pop') {
    if (bpm >= 60 && bpm <= 180) return 'happy';
  }
  if (g === 'rock') {
    if (bpm >= 60 && bpm <= 129) return 'happy';
    if (bpm >= 130 && bpm <= 180) return 'hype';
  }
  return '';
}
