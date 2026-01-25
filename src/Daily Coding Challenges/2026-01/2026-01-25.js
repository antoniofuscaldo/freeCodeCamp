/**

Scaled Image

Given a string representing the width and height of an image, and a number to scale the image, return the scaled width and height.

The input string is in the format "WxH". For example, "800x600".
The scale is a number to multiply the width and height by.
Return the scaled dimensions in the same "WxH" format.

*/

function scaleImage(size, scale) {
  const [w, h] = size.split('x').map(Number);
  return w * scale + 'x' + h * scale;
}
