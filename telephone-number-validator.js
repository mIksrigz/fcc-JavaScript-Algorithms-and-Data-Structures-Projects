// program checks if passed string is a valid US phone number
// if number have 11 digits instead of 10 only valid starting digit for US number is 1.
// for example 1(555)555-5555 and 1 (555) 555-5555 are valid numbers but 2 (555) 555-5555 is not.
// sample tests below program.

function telephoneCheck(str) {
  const regex = /^1?[ -]?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;
  return `${str} is ${
    regex.test(str) ? "valid" : "not valid"
  } US phone number.`;
}

// tests
// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("1 555-555-5555"));
// console.log(telephoneCheck("1 (555) 555-5555"));
// console.log(telephoneCheck("5555555555"));
// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("(555)555-5555"));
// console.log(telephoneCheck("1(555)555-5555"));
// console.log(telephoneCheck("555-5555"));
// console.log(telephoneCheck("5555555"));
// console.log(telephoneCheck("1 555)555-5555"));
// console.log(telephoneCheck("1 555 555 5555"));
// console.log(telephoneCheck("1 456 789 4444"));
// console.log(telephoneCheck("123**&!!asdf#"));
// console.log(telephoneCheck("55555555"));
// console.log(telephoneCheck("(6054756961)"));
// console.log(telephoneCheck("2 (757) 622-7382"));
// console.log(telephoneCheck("0 (757) 622-7382"));
// console.log(telephoneCheck("-1 (757) 622-7382"));
// console.log(telephoneCheck("2 757 622-7382"));
// console.log(telephoneCheck("10 (757) 622-7382"));
// console.log(telephoneCheck("27576227382"));
// console.log(telephoneCheck("(275)76227382"));
// console.log(telephoneCheck("2(757)6227382"));
// console.log(telephoneCheck("2(757)622-7382"));
// console.log(telephoneCheck("555)-555-5555"));
// console.log(telephoneCheck("(555-555-5555"));
// console.log(telephoneCheck("(555)5(55?)-5555"));
// console.log(telephoneCheck("55 55-55-555-5"));
// console.log(telephoneCheck("11 555-555-5555"));
