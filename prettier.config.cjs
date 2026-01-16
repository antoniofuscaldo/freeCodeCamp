/** @type {import('prettier').Config} */
module.exports = {
  // Aggiunge sempre i punti e virgola alla fine delle istruzioni quando applicabile
  semi: true,

  // Preferisce gli apici singoli nelle stringhe (non influisce su JSON)
  singleQuote: true,

  // Larghezza massima di riga prima del wrapping
  printWidth: 100,

  // Aggiunge le virgole finali dove consentito da ES5 (oggetti, array, ecc.)
  trailingComma: 'es5',

  // Forza line ending LF su tutti i sistemi operativi
  endOfLine: 'lf',
};
