function isPalindrome(word) {
  // Write your algorithm here
    const lowercaseString = word.toLowerCase();
    const reversedString = lowercaseString.split('').reverse().join('');
    return lowercaseString === reversedString;
  }

/* 
  Add your pseudocode here
1. Create a function isPalindrome that takes a string as its parameter.
2. Convert the string to lowercase (to handle case-insensitivity).
3. Initialize a variable "reversedString" and set it to an empty string.
4. Loop through each character of the lowercase string in reverse order.
5. Compare the lowercase string with the "reversedString".
6. If they are the same, return true (it's a palindrome).
7. Otherwise, return false (it's not a palindrome).

*/

/*
  Add written explanation of your solution here
The function isPalindrome takes a string parameter as input.
It converts the string to lowercase using the toLowerCase() method.
It splits the lowercase string into an array of characters using the split('') method.
It reverses the array of characters using the reverse() method.
It joins the reversed array of characters back into a string using the join('') method.
Finally, it checks if the reversed string is equal to the original string and returns the result.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
