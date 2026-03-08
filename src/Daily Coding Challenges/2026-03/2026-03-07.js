/**

Element Size

Given a window size, the width of an element in viewport width "vw" units, and the height of an element in viewport height "vh" units, determine the size of the element in pixels.

The given window size and returned element size are strings in the format "width x height", "1200 x 800" for example.

"vw" units are the percent of window width. "50vw" for example, is 50% of the width of the window.

"vh" units are the percent of window height. "50vh" for example, is 50% of the height of the window.

*/

function getElementSize(w, vw, vh) {
  const [W, H] = w.split(' x ').map(Number);
  return (W * parseFloat(vw)) / 100 + ' x ' + (H * parseFloat(vh)) / 100;
}
