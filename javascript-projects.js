/* 
Project #1: PALINDROME CHECKER
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2

*/

function palindrome(str) {
    let new_string = "";
    str = str.replace(/[^a-z0-9]/gi, '');
    str = str.toLowerCase();
    console.log(str);
    for (var i = str.length-1; i>-1; i--){
      if(str[i] != " ") { new_string += str[i]; } 
    }
  
    if(new_string == str){ return true; }
    return false;
  }
  
  palindrome("A man, a plan, a canal. Panama")

  /*
  Project #2: ROMAN NUMERAL CONVERTER
  Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	            1000
CM	            900
D	            500
CD	            400
C	            100
XC	            90
L	            50
XL	            40
X	            10
IX	            9
V	            5
IV	            4
I	            1

All roman numerals answers should be provided in upper-case.
  */

  function convertToRoman(num) {
    let result = "";
    while (num != 0){
      if(num > 999){ result += "M"; num -= 1000; }
      else if (num > 899){ result += "CM"; num -= 900; }
      else if (num > 499){ result += "D"; num -= 500; }
      else if (num > 399){ result += "CD"; num -= 400; }
      else if (num > 99){ result += "C"; num -= 100; }
      else if (num > 89){ result += "XC"; num -= 90; }
      else if (num > 49){ result += "L"; num -= 50; }
      else if (num > 39){ result += "XL"; num -= 40; }
      else if (num > 9){ result += "X"; num -= 10; }
      else if (num > 8){ result += "IX"; num -= 9; }
      else if (num > 4){ result += "V"; num -= 5; }
      else if (num > 3){ result += "IV"; num -= 4; }
      else { result += "I"; num--; }
    }
    return result;
  }
  
  convertToRoman(2);

  /*
  Project #3: CAESARS CIPHER
  One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
  */

  function rot13(str) {
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = ""
    for(var i = 0; i<str.length; i++){
      if(str[i].match(/[a-z]/i)){
        var index = 0;
        if(alpha.indexOf(str[i]) - 13 < 0){ index = alpha.indexOf(str[i]) - 13 + 26; }
        else { index = alpha.indexOf(str[i]) - 13;}
        result += alpha[index];
      }
      else {
        result += str[i];
      }
    }
    console.log(result);
    return result;
  }
  
  rot13("SERR PBQR PNZC");