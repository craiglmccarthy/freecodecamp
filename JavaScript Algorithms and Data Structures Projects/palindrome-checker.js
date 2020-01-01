function palindrome(str) {
  // Regex to select all non-alphanumeric characters
  let regex = /[^a-z0-9+]+/gi;
  // Remove all non-alphanumeric characters and make lower case
  let strAlphaNumForward = str.replace(regex, "").toLowerCase();
  // Split, reverse, join strAlphaNumForward
  let strAlphaNumReverse = strAlphaNumForward
    .split("")
    .reverse()
    .join("");
  // Compare forward and reverse strings to determine whether the string is a palindrome
  if (
    JSON.stringify(strAlphaNumForward) == JSON.stringify(strAlphaNumReverse)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("not a palindrome"));
