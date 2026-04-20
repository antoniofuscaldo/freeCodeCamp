/* global React, ReactDOM */
const buttons = [
  {
    name: 'AC',
    id: 'clear',
  },
  {
    name: '/',
    id: 'divide',
  },
  {
    name: '*',
    id: 'multiply',
  },
  {
    name: '7',
    id: 'seven',
  },
  {
    name: '8',
    id: 'eight',
  },
  {
    name: '9',
    id: 'nine',
  },
  {
    name: '-',
    id: 'subtract',
  },
  {
    name: '4',
    id: 'four',
  },
  {
    name: '5',
    id: 'five',
  },
  {
    name: '6',
    id: 'six',
  },
  {
    name: '+',
    id: 'add',
  },
  {
    name: '1',
    id: 'one',
  },
  {
    name: '2',
    id: 'two',
  },
  {
    name: '3',
    id: 'three',
  },
  {
    name: '=',
    id: 'equals',
  },
  {
    name: '0',
    id: 'zero',
  },
  {
    name: '.',
    id: 'decimal',
  },
];
function App() {
  const [output, setOutput] = React.useState('0'),
    [lastInput, setLastInput] = React.useState(''),
    [secondLastInput, setSecondLastInput] = React.useState('');
  function handleClick(clickedButton) {
    let outputTemp = output,
      { length } = outputTemp;
    setSecondLastInput(output[length - 1]);
    if (clickedButton === '*' || clickedButton === '/' || clickedButton === '+') {
      if (lastInput === '+' || lastInput === '/' || lastInput === '*' || lastInput === '-') {
        outputTemp = outputTemp.slice(0, length - 1);
      }
    }
    if (clickedButton === '-') {
      if (lastInput === '+' || lastInput === '-') {
        outputTemp = outputTemp.slice(0, length - 1);
      }
    }
    if (secondLastInput === '*' || secondLastInput === '/') {
      if (clickedButton === '*' || clickedButton === '/' || clickedButton === '+') {
        outputTemp = outputTemp.slice(0, length - 2);
      }
    }

    if (outputTemp == '0') {
      outputTemp = parseInt(outputTemp);
    }
    switch (clickedButton) {
      case 'AC':
        setOutput(0);
        setLastInput('');
        break;

      case '1': {
        const concatOne = `${outputTemp === 0 ? '' : outputTemp}1`;
        setOutput(concatOne);
        setLastInput('1');
        break;
      }

      case '2': {
        const concatTwo = `${outputTemp === 0 ? '' : outputTemp}2`;
        setOutput(concatTwo);
        setLastInput('2');
        break;
      }

      case '3': {
        const concatThree = `${outputTemp === 0 ? '' : outputTemp}3`;
        setOutput(concatThree);
        setLastInput('3');
        break;
      }

      case '4': {
        const concatFour = `${outputTemp === 0 ? '' : outputTemp}4`;
        setOutput(concatFour);
        setLastInput('4');
        break;
      }

      case '5': {
        const concatFive = `${outputTemp === 0 ? '' : outputTemp}5`;
        setOutput(concatFive);
        setLastInput('5');
        break;
      }

      case '6': {
        const concatSix = `${outputTemp === 0 ? '' : outputTemp}6`;
        setOutput(concatSix);
        setLastInput('6');
        break;
      }

      case '7': {
        const concatSeven = `${outputTemp === 0 ? '' : outputTemp}7`;
        setOutput(concatSeven);
        setLastInput('7');
        break;
      }

      case '8': {
        const concatEight = `${outputTemp === 0 ? '' : outputTemp}8`;
        setOutput(concatEight);
        setLastInput('8');
        break;
      }

      case '9': {
        const concatNine = `${outputTemp === 0 ? '' : outputTemp}9`;
        setOutput(concatNine);
        setLastInput('9');
        break;
      }

      case '0': {
        const concatZero = `${parseInt(outputTemp) === 0 ? '' : outputTemp}0`;
        outputTemp === 0 ? setOutput('0') : setOutput(concatZero);
        setLastInput('0');
        break;
      }

      case '/': {
        const divide = `${outputTemp === 0 ? '' : outputTemp}/`;
        setOutput(divide);
        setLastInput('/');
        break;
      }

      case '+': {
        const add = `${outputTemp === 0 ? '' : outputTemp}+`;
        setOutput(add);
        setLastInput('+');
        break;
      }

      case '*': {
        const multiply = `${outputTemp === 0 ? '' : outputTemp}*`;
        setOutput(multiply);
        setLastInput('*');
        break;
      }

      case '-': {
        const subtract = `${outputTemp === 0 ? '' : outputTemp}-`;
        setOutput(subtract);
        setLastInput('-');
        break;
      }

      case '.': {
        let count = 0,
          countForSymbol = 0;
        for (let i = 0; i < output.length; i++) {
          if (output[i] === '.') {
            ++count;
          }
          if (output[i] === '+' || output[i] === '-' || output[i] === '*' || output[i] === '/') {
            ++countForSymbol;
          }
        }
        const dot = `${outputTemp === 0 ? '' : outputTemp}.`;
        count > countForSymbol ? null : setOutput(dot);
        setLastInput('.');
        break;
      }

      case '=': {
        const evaluated = eval(output);
        setOutput(evaluated);
        break;
      }

      default:
        break;
    }
  }
  return (
    <>
      <header>Build a JavaScript Calculator</header>
      <div id="MyCalculator">
        <div id="display">{output}</div>
        <div id="buttonsHolder">
          {buttons.map((button) => (
            <button
              id={button.id}
              onClick={() => {
                handleClick(button.name);
              }}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
