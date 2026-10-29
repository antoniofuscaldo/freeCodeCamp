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

Tests:
Waiting:1. navigate(["Visit About Us", "Back", "Forward"]) should return "About Us".
Waiting:2. navigate(["Forward"]) should return "Home".
Waiting:3. navigate(["Back"]) should return "Home".
Waiting:4. navigate(["Visit About Us", "Visit Gallery"]) should return "Gallery".
Waiting:5. navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) should return "Home".
Waiting:6. navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) should return "Contact".
Waiting:7. navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) should return "Visit Us".

*/

function navigate(commands) {
  const history = ['Home'];
  let index = 0;

  for (const command of commands) {
    if (command.startsWith('Visit ')) {
      history.splice(index + 1);
      history.push(command.slice(6));
      index++;
    } else if (command === 'Back' && index > 0) {
      index--;
    } else if (command === 'Forward' && index < history.length - 1) {
      index++;
    }
  }

  return history[index];
}
