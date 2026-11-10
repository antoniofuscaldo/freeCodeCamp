/**

Extension Extractor

Given a string representing a filename, return the extension of the file.

The extension is the part of the filename that comes after the last period (.).
If the filename does not contain a period or ends with a period, return "none".
The extension should be returned as-is, preserving case.

Tests:
Waiting:1. getExtension("document.txt") should return "txt".
Waiting:2. getExtension("README") should return "none".
Waiting:3. getExtension("image.PNG") should return "PNG".
Waiting:4. getExtension(".gitignore") should return "gitignore".
Waiting:5. getExtension("archive.tar.gz") should return "gz".
Waiting:6. getExtension("final.draft.") should return "none".

*/

function getExtension(filename) {
  const index = filename.lastIndexOf('.');
  if (index === -1 || index === filename.length - 1) return 'none';
  return filename.slice(index + 1);
}
