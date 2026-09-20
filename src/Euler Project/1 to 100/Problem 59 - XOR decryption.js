function XORDecryption(arr) {
  const a = 'a'.charCodeAt(0);

  function decrypt(k1, k2, k3) {
    const key = [k1, k2, k3];
    let out = '';
    for (let i = 0; i < arr.length; i++) {
      out += String.fromCharCode(arr[i] ^ key[i % 3]);
    }
    return out;
  }

  const must = [' the ', ' and ', ' of ', ' to ', ' in '];

  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      for (let k = 0; k < 26; k++) {
        const text = decrypt(a + i, a + j, a + k);

        let ok = true;
        for (const w of must) {
          if (!text.includes(w)) {
            ok = false;
            break;
          }
        }

        if (ok) {
          let sum = 0;
          for (let c = 0; c < text.length; c++) {
            sum += text.charCodeAt(c);
          }
          return sum;
        }
      }
    }
  }
}
