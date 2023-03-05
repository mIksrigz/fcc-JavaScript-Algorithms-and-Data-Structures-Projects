// Program takes as an input any integer from 0 to 3999 and returns arabic numeral and equivalent roman numeral.
// at the bottom of file there are some sample tests.
function convertToRoman(num) {
  const digitsArray = num.toString().split("");
  let orderOfMagnitude = Math.pow(10, digitsArray.length - 1);
  let romanNumral = "";
  for (let i = 0; i < digitsArray.length; i++) {
    let digit = parseInt(digitsArray[i]);
    orderOfMagnitude = Math.pow(10, digitsArray.length - 1 - i);
    if (getNumeral(digit * orderOfMagnitude) === "Numeral not Found") {
      romanNumral += notFoundNumeral(digit, orderOfMagnitude);
    } else {
      romanNumral += getNumeral(digit * orderOfMagnitude);
    }
  }
  return `Arabic numeral: ${num} ---> Roman numeral: ${romanNumral}`;
}

function notFoundNumeral(digit, power) {
  let numeralToAdd = "";
  if (digit > 5) {
    digit -= 5;
    numeralToAdd += getNumeral(5 * power);
    while (digit > 0) {
      numeralToAdd += getNumeral(power);
      digit--;
    }
  } else {
    while (digit > 0) {
      numeralToAdd += getNumeral(power);
      digit--;
    }
  }
  return numeralToAdd;
}

function getNumeral(arabicNumeral) {
  let output = "";
  switch (arabicNumeral) {
    case 0:
      output = "";
      break;
    case 1:
      output = "I";
      break;
    case 4:
      output = "IV";
      break;
    case 5:
      output = "V";
      break;
    case 9:
      output = "IX";
      break;
    case 10:
      output = "X";
      break;
    case 40:
      output = "XL";
      break;
    case 50:
      output = "L";
      break;
    case 90:
      output = "XC";
      break;
    case 100:
      output = "C";
      break;
    case 400:
      output = "CD";
      break;
    case 500:
      output = "D";
      break;
    case 900:
      output = "CM";
      break;
    case 1000:
      output = "M";
      break;
    default:
      output = "Numeral not Found";
      break;
  }
  return output;
}

//tests
// console.log(convertToRoman(2));
// console.log(convertToRoman(3));
// console.log(convertToRoman(4));
// console.log(convertToRoman(5));
// console.log(convertToRoman(9));
// console.log(convertToRoman(12));
// console.log(convertToRoman(16));
// console.log(convertToRoman(29));
// console.log(convertToRoman(44));
// console.log(convertToRoman(45));
// console.log(convertToRoman(68));
// console.log(convertToRoman(83));
// console.log(convertToRoman(97));
// console.log(convertToRoman(99));
// console.log(convertToRoman(400));
// console.log(convertToRoman(500));
// console.log(convertToRoman(501));
// console.log(convertToRoman(649));
// console.log(convertToRoman(798));
// console.log(convertToRoman(891));
// console.log(convertToRoman(1000));
// console.log(convertToRoman(1004));
// console.log(convertToRoman(1006));
// console.log(convertToRoman(1023));
// console.log(convertToRoman(2014));
// console.log(convertToRoman(3999));
