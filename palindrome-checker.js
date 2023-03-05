//Program checks if a word/sentence is spelled the same way forwards and backwards,
//ignoring all non alpha numercic characters, white spaces and letters case.
//Program returns anwser if input strip of all characters mentioned above is a plindrome.
//there are some sample tests below.

function palindrome(str) {
  const preparedString = str
    .match(/[^\W_+]/g)
    .join("")
    .toLowerCase();
  let startPointer = 0;
  let endPointer = preparedString.length - 1;
  while (startPointer < endPointer) {
    if (
      preparedString.charAt(startPointer) !== preparedString.charAt(endPointer)
    )
      return `${preparedString} is not a plaindrome.`;
    startPointer++;
    endPointer--;
  }
  return `${preparedString} is a palindrome`;
}

//tests
// console.log(palindrome("eye"));
// console.log(palindrome("_eye"));
// console.log(palindrome("race car"));
// console.log(palindrome("not a palindrome"));
// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("never odd or even"));
// console.log(palindrome("nope"));
// console.log(palindrome("almostomla"));
// console.log(palindrome("My age is 0, 0 si ega ym."));
// console.log(palindrome("1 eye for of 1 eye."));
// console.log(palindrome("0_0 (: /- :) 0-0"));
// console.log(palindrome("five|_/|four"));
