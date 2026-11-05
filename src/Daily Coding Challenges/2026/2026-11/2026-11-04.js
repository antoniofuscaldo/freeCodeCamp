/**

Image Search

On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.

Given an array of image names and a search term, return an array of image names containing the search term.

Ignore the case when matching the search terms.
Return the images in the same order they appear in the input array.

Tests:
Waiting:1. imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog") should return ["dog.png"].
Waiting:2. imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun") should return ["Sunset.jpg", "sunflower.jpeg"].
Waiting:3. imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG") should return ["Moon.png", "stars.png"].
Waiting:4. imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat") should return ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"].

*/

export function imageSearch(images, term) {
  const lowerTerm = term.toLowerCase();
  return images.filter((image) => image.toLowerCase().includes(lowerTerm));
}
