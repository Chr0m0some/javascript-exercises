/* 
Chop off the spaces, commas and anything else that's not a string and save a single string into a variable 
Iterate going up the string and see if the letters match going down the string
IF there is a falsy match:
    return false
ELSE: 
    Keep going until pointers go past each other and then return true
*/
const palindromes = function (string) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g; //checks for punctuation and finds all matches in the string
    const string_without_punctuation = string.replace(regex, '');
    let trimmed_string = string_without_punctuation.toLowerCase().trim().split('');
    let filtered_string = trimmed_string.filter(char => char !== ' '); 
    console.log(filtered_string);

    return(checkSides(filtered_string));
};

function checkSides(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - (i + 1)]) {
          console.log(array[i]);
          console.log(array[array.length - (i + 1)]);
          return false;
        }
      }
    return true;
}

/* 
Holy shit, this does everything mine does, but better.

The RegEx is a lot more comprehensible and simple. It matches any single character but the alphabetical characters and replaces them with white space. See more about RegEx: https://javascript.info/regular-expressions

I was having difficulty using reverse because it reverses an array in place. 

However, that doesn't become a problem if you're reversing an array and then turning it back into a string. 

The modified string that's being compared to it's unmodified version is fine because the unmodified version didn't get affected by the reverse() method since it was never an array. 

*/

/* 
const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};
*/

// Do not edit below this line
module.exports = palindromes;
