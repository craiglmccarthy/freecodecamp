function convertToRoman(num) {
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let romanized = "";

  for (let i = 0; i < decimal.length; i++) {
    // Loop through decimal array
    while (decimal[i] <= num) {
      // Build romanized output
      romanized += romanNumeral[i];
      // Decrement the num value
      num -= decimal[i];
    }
  }
  return romanized;
}

console.log(convertToRoman(36));
