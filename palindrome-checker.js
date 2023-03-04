function palindrome(str) {
    let preparedString = str.match(/\w+/g).join("").toLowerCase();
    return preparedString;
}

console.log(palindrome("A man, a plan, a canal. Panama"));