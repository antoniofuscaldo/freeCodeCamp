window.onload = go;
function go() {
  $('#new-quote').click(() => {
    genRandQuote();
  });

  $('#tweet-quote').click(() => {});

  genRandQuote();
}

function genRandQuote() {
  const quotes = [
      {
        id: 1,
        text: `"A rose by any other name would smell as sweet"`,
        source: `- William Shakespeare`,
      },
      {
        id: 2,
        text: `"All that glitters is not gold"`,
        source: `- William Shakespeare`,
      },
      {
        id: 3,
        text: `"All the world’s a stage, and all the men and women merely players"`,
        source: `- William Shakespeare`,
      },
      {
        id: 4,
        text: `"Ask not what your country can do for you; ask what you can do for your country"`,
        source: `- John Kennedy`,
      },
      {
        id: 5,
        text: `"Eighty percent of success is showing up"`,
        source: `- Woody Allen`,
      },
      {
        id: 6,
        text: `"Elementary, my dear Watson"`,
        source: `- Woody Allen`,
      },
      {
        id: 7,
        text: `"Genius is one percent inspiration and ninety-nine percent perspiration"`,
        source: `- Thomas Edison`,
      },
      {
        id: 8,
        text: `"If you are going through hell, keep going"`,
        source: `- Winston Churchill`,
      },
      {
        id: 9,
        text: `"If you want something said, ask a man; if you want something done, ask a woman"`,
        source: `- Margaret Thatcher`,
      },
      {
        id: 10,
        text: `"Life is like riding a bicycle. To keep your balance, you must keep moving"`,
        source: `- Albert Einstein`,
      },
    ],
    randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  $('#text').html(randQuote.text);
  $('#author').html(randQuote.source);
  $('#tweet-quote').attr(
    'href',
    stringToClickToTweetURL(`"${randQuote.text}" - ${randQuote.source}`)
  );
}

function stringToClickToTweetURL(str) {
  // Convert to Click to Tweet URL
  const stringToConvert = str.split(' ').join('%20').split('@').join('%40').split('!').join('%21'),
    resultString = `https://twitter.com/intent/tweet?text=${stringToConvert}`;

  return resultString;
}
