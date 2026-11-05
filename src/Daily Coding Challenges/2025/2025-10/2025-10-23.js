/**

Favorite Songs

Remember iPods? The first model came out 24 years ago today, on Oct. 23, 2001.

Given an array of song objects representing your iPod playlist, return an array with the titles of the two most played songs, with the most played song first.

Each object will have a "title" property (string), and a "plays" property (integer).

*/

function favoriteSongs(playlist) {
  return playlist
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 2)
    .map((song) => song.title);
}
