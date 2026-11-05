/**

Browser History

Given an array of browser commands, return an array with two values: the history as an array of URLs, and the index of the current page.

Valid commands are:

"URL" - Where URL is a web address ("freecodecamp.org" for example). Navigates to the given URL, adds it to the history at the next position, and discards any forward history.
"Back" - moves to the previous page in history, or stays on the current page if there isn't one.
"Forward" - moves to the next page in history, or stays on the current page if there isn't one.
For example, given ["freecodecamp.org", "freecodecamp.org/learn", "Back"], return [["freecodecamp.org", "freecodecamp.org/learn"], 0].

*/

function getBrowserHistory(commands) {
  const history = [];
  let current = -1;

  for (const cmd of commands) {
    if (cmd === 'Back') {
      if (current > 0) current--;
    } else if (cmd === 'Forward') {
      if (current < history.length - 1) current++;
    } else {
      history.length = current + 1;
      history.push(cmd);
      current = history.length - 1;
    }
  }

  return [history, current];
}
