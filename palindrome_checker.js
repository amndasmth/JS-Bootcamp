function stringWithAlphas(str) {
    return str.replace(/[^a-z0-9]/gi, "");
  }
  function strLowerCase(str) {
    return str.toLowerCase();
  }
  const strReversed = (str) => {
    let result = "";
    for (let i = str.length-1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  function palindrome(str) {
    // remove non-alphanumeric chars
    const cleanedUpStr = stringWithAlphas(str);
    // turn everything into lowercase
    const lowercaseStr = strLowerCase(cleanedUpStr);
    // reverse the string
    const reversedStr = strReversed(lowercaseStr);
    // reveresed string equals to? 
    console.log(`Is "${lowercaseStr}" equals to "${reversedStr}"`)
    // return comparison 
    return lowercaseStr == reversedStr;
  }
  console.log(palindrome("eye"));
  // Is "eye" equals to "eye"
  // true