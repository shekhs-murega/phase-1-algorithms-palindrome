function isPalindrome(word) {
  // Remove any non-letter characters and convert to lowercase
  word = word.replace(/[^a-z]/g, "").toLowerCase();

  // Check if the reversed word is equal to the original word
  return word === word.split("").reverse().join("");
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  1. Remove any non-letter characters and convert the word to lowercase.
  2. Check if the reversed word is equal to the original word.
  3. Return true if they are equal, false otherwise.
*/

/*
  Add written explanation of your solution here
   We first remove any non-letter characters (using regex) from the input word and convert it to lowercase.
   Then, we split the word into an array of characters, reverse the array, and join it back into a string.
   Finally, we compare the reversed word to the original word. If they are equal, we return true (it's a palindrome), otherwise, we return false.
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
