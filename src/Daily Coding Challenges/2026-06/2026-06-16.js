/**

British to American

Given a sentence, convert any British English spellings to their American English equivalents using the following lookup table and return the updated sentence:

British	American
"colour"	"color"
"flavour"	"flavor"
"honour"	"honor"
"neighbour"	"neighbor"
"labour"	"labor"
"humour"	"humor"
"centre"	"center"
"fibre"	"fiber"
"defence"	"defense"
"offence"	"offense"
"organise"	"organize"
"recognise"	"recognize"
"analyse"	"analyze"
Replacements should be case-insensitive. For example, "Colour" should become "Color".
The input may contain words that build on the exact spelling of a root in the table that also need to be changed. For example, "colouring" should become "coloring", and "disorganised" should become "disorganized".

*/

function britishToAmerican(sentence) {
  const map = {
    colour: 'color',
    flavour: 'flavor',
    honour: 'honor',
    neighbour: 'neighbor',
    labour: 'labor',
    humour: 'humor',
    centre: 'center',
    fibre: 'fiber',
    defence: 'defense',
    offence: 'offense',
    organise: 'organize',
    recognise: 'recognize',
    analyse: 'analyze',
  };

  for (const brit in map) {
    const amer = map[brit];
    const re = new RegExp(brit, 'gi');
    sentence = sentence.replace(re, (match) =>
      match[0] === match[0].toUpperCase()
        ? amer[0].toUpperCase() + amer.slice(1)
        : amer,
    );
  }

  return sentence;
}
