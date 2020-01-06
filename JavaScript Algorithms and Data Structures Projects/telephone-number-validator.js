function telephoneCheck(str) {
  # Regex found - https://www.regextester.com/98583
  let regex = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
  return regex.test(str);
}
console.log(telephoneCheck("555-555-5555"));
