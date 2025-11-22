/**

Navigator

On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:

You always start on the "Home" page, which will not be included in the commands array.
Valid commands are:
"Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" takes you to the "About" page. When you visit a new page, make sure to discard any forward history you have.
"Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
"Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.
For example, given ["Visit About Us", "Back", "Forward"], return "About Us".

*/

function navigate(commands) {
  let history = ['Home'],
    current = 0;

  for (const cmd of commands) {
    if (cmd.startsWith('Visit ')) {
      history = history.slice(0, current + 1);
      history.push(cmd.slice(6));
      current++;
    } else if (cmd === 'Back') {
      if (current > 0) current--;
    } else if (cmd === 'Forward') {
      if (current < history.length - 1) current++;
    }
  }

  return history[current];
}
