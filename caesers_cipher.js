const ROTATION = 13;
function rot13(str) {
  // declare empty string
  let decodedStr = "";
  // loop over str
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = str.charCodeAt(i);
    // if char is a letter, decode char
    if (/[A-M]/.test(char)) {
      const decodedChar = charCode + ROTATION;
      decodedStr += String.fromCharCode(decodedChar);
    } else if (/[N-Z]/.test(char)) {
      const decodedChar = charCode - ROTATION;
      decodedStr += String.fromCharCode(decodedChar);
    }
    // otherwise, add char
    else {
      decodedStr += char;
    }
  }
  return decodedStr;
}
console.log(rot13("SERR PBQR PNZC"));