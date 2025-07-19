const palindromes = function (string) {

function reverseString(str) {

  const charArray = str.split('');
  charArray.reverse();
  const reversedStr = charArray.join('');

  return reversedStr;

}

function removeNonAlphabetic(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}


let reversedString = reverseString(string);
console.log(reversedString);

string = removeNonAlphabetic(string);
string = string.toLowerCase();

reversedString = removeNonAlphabetic(reversedString);
reversedString = reversedString.toLowerCase();

if (string == reversedString) {
    return true;
    } else {
        return false;
    }
};
palindromes('racecar!');

// Do not edit below this line
module.exports = palindromes;
