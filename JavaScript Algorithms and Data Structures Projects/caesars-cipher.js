function rot13(str) {
  function isAlpha(str) {
    return str.match(/[a-z]/i);
  }
  // Upper case and split string
  let strSplitted = str.toUpperCase().split("");

  // Array to build deciphered string
  let decipheredString = [];
  // Loop through string
  for (let i = 0; i < strSplitted.length; i++) {
    // If element is alpha, rotate ASCII code, push to decipheredString array,
    // else push element to decipheredString array unmodified
    if (isAlpha(strSplitted[i])) {
      // Get ASCII code for each element
      let charCode = strSplitted[i].charCodeAt();
      // Decode ASCII code
      let charCodeDecipher = (charCode % 26) + 65;
      decipheredString.push(String.fromCharCode(charCodeDecipher));
    } else {
      decipheredString.push(strSplitted[i]);
    }
  }
  return decipheredString.join("");
}

console.log(rot13("SERR PBQR PNZC"));
