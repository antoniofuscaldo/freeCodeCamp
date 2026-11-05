/**

Wider Aspect Ratio

Given two strings for different image dimensions, return the aspect ratio of the image with a greater width-to-height ratio.

The given strings will be in the format "WxH", for example, "1920x1080".
The aspect ratio is the ratio of width to height, reduced to the lowest whole numbers. For example, "1920x1080" reduces to "16:9".
Return a string in format "W:H", for example, "16:9".

Tests:
Waiting:1. getWiderAspectRatio("1920x1080", "800x600") should return "16:9".
Waiting:2. getWiderAspectRatio("1080x1350", "2048x1536") should return "4:3".
Waiting:3. getWiderAspectRatio("640x480", "2440x1220") should return "2:1".
Waiting:4. getWiderAspectRatio("360x640", "1080x1920") should return "9:16".
Waiting:5. getWiderAspectRatio("3440x1440", "2048x858") should return "43:18".
Waiting:6. getWiderAspectRatio("12345x61234", "12534x51234") should return "2089:8539".

*/

export function getWiderAspectRatio(a, b) {
  const parse = (s) => {
    const [w, h] = s.split('x').map(Number);
    return [w, h, w / h];
  };

  const ra = parse(a);
  const rb = parse(b);
  const chosen = ra[2] >= rb[2] ? ra : rb;

  const g = (x, y) => (y === 0 ? x : g(y, x % y));
  const d = g(chosen[0], chosen[1]);

  return chosen[0] / d + ':' + chosen[1] / d;
}
