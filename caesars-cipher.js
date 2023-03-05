// Program takes as an input encrypted sentence(letters in sentence are shifted by 13 ex. N -> A, M -> B)
// and deciphers it.
// belowe are some sample tests.

function rot13(str) {
  const charArray = str.split("");
  const decipherArray = charArray.map((char) => {
    if (!/\w/.test(char)) return char;
    const charCode = char.charCodeAt(0);
    if (charCode - 13 > 64) return String.fromCharCode(charCode - 13);
    return String.fromCharCode(90 - (13 - (charCode - 64)));
  });

  return `encrypted string: ${str}
deciphered string ${decipherArray.join("")}`;
}

// console.log(rot13("SERR PBQR PNZC"));
// console.log(rot13("SERR CVMMN!"));
// console.log(rot13("SERR YBIR?"));
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
