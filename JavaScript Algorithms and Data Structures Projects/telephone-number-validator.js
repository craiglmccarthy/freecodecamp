<<<<<<< HEAD
function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");
=======
function telephoneCheck(str) {
  # Regex found - https://www.regextester.com/98583
  let regex = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
  return regex.test(str);
}
console.log(telephoneCheck("555-555-5555"));
>>>>>>> 5ef9eb8907258e01790fdfbdfe28d5272ea7bcfc
