// In programming (and specifically in JavaScript), NaN stands for "Not-a-Number".

// Even though it is officially categorized under the data type number, NaN is used to represent a value that is not a valid number, or the result of an invalid or impossible mathematical operation.

// Common Ways NaN Happens
// Whenever you try to perform math or conversions that don't make logical sense, JavaScript doesn't crash—instead, it quietly returns NaN:

// Impossible Math:

// JavaScript
 0 / 0; // Returns NaN
 Math.sqrt(-1); // Returns NaN (you can't take the square root of a negative number in standard math)
// Failed Type Conversions:

// JavaScript
 Number("hello"); // Returns NaN (can't turn the word "hello" into a number)
 parseInt("abc"); // Returns NaN
//  Mixing Strings and Numbers (in certain contexts):

// JavaScript
 "apple" - 3; // Returns NaN (you can't subtract a number from a word)
// (Note: The + operator behaves differently because it tries to combine strings, so "apple" + 3 results in "apple3" instead of NaN).

// The Big JavaScript Quirk: NaN !== NaN
// The weirdest thing about NaN in JavaScript is that it is not even equal to itself.

// JavaScript
 console.log(NaN === NaN); // ❌ Prints `false`!
// Because of this quirk, you cannot use standard equality operators (=== or ==) to check if a variable is NaN. Instead, JavaScript provides a special built-in method:

// JavaScript
 let result = Number("hello");

// // How NOT to check it:
 console.log(result === NaN); // false (doesn't work)

// // How TO check it correctly:
console.log(Number.isNaN(result)); // ✅ true