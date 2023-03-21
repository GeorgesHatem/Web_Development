/* Name: Georges Hatem
CWID: 10479490

Assignment Due Date: The Assignment Due Date is on September 19, 2022, however, I asked Professor Hill
if he can extend my assignment submission to September 21, 2022, at 11:59 PM ET because I was on a business
travel, and he agreed.

Description: For this assignment, we are supposed to write 4 functions in JavaScript, and these functions
are as follows:

1) In the first function, we are supplied with an array from lab1.test.js, and we are supposed to check which
values are prime and which values are not prime in the array and return our results as a boolean array
with true meaning that the specific number at the specific index is a prime number and false meaning that the 
specific number at the specific index in the array is not a prime number.

2) In the second function, we are supposed to return the sum of the geometric series given the starting number,
the common ratio, and the number of terms.

3) In the third function, we are supposed to return the number of consonants contained in the string value
provided in lab1.test.js

4) In the fourth function, we are supposed to return how many times a substring occured in a given string
given the full string and the substring in lab1.test.js 

*/

function questionOne(arr) {

  let str = 'The Array given does not contain only numbers';
  let str2 = 'The Array given is empty';

  // if the length of the array is 0, then the array is empty
  if(arr.length === 0){

    return str2;

  }

  // if the array length is not 0, then proceed
  for(let i = 0; i < arr.length; i++){

    // Make sure that array value is a number
    if(typeof(arr[i]) === 'number'){

      // if the number in the array is less than or equal to 1, then the number is not a prime number
      if(arr[i] <= 1){

        arr[i] = false;

      }

      // if the number in the array is bigger than 1, then proceed
      else{

        for (let j = 2; j < arr[i]; j++){

          // if the number is divisible by any number other than itself and 1, then this is not a prime number
          if((arr[i] % j) === 0){

            arr[i] = false;

          }

        }

        // if the number is divisible only by 1 and itself, then it is a prime number
        if(typeof(arr[i]) === 'number'){

          arr[i] = true;

        }
        
      }

    }

    else{

      return str; // just in case user entered string, boolean or any other type of values

    }

  }

  return arr; // return the boolean array

}

function questionTwo(startingNumber, commonRatio, numberOfTerms) {
  
  let str3 = 'Not all given parameters are numbers';

  // Checking to see that starting number, common ratio, and number of items are numbers
  if(typeof(startingNumber) != 'number' || typeof(commonRatio) != 'number' || typeof(numberOfTerms) != 'number'){

    return str3;

  }

  // starting number can take any integer or decimal positive or negative values except for 0
  if(startingNumber === 0){

    return 0;

  }

  // common ratio can take any integer or decimal positive or negative values except for 0
  if(commonRatio === 0){

    return 0;

  }

  // number of terms must be an integer (cannot be a decimal) and must be bigger than 0
  if((numberOfTerms <= 0) || ((numberOfTerms % 1) != 0)){

    return NaN;

  }

  // Compute the sum by using the formula given in the instructions
  let sum_geom = (startingNumber)*(((1-(Math.pow(commonRatio, numberOfTerms))) / (1 - commonRatio)));

  return sum_geom; // return the geometric sum

}

function questionThree(str) {

  let sum = 0;
  let str4 = 'The input parameter is not a string';

  // Checking ti make sure that the provided input is a string
  if(typeof(str) === 'string'){

    for(let i = 0; i < str.length; i++){

      if((str[i] >= 'b' && str[i] <= 'd') || (str[i] >= 'f' && str[i] <= 'h') || (str[i] >= 'j' && str[i] <= 'n') || (str[i] >= 'p' && str[i] <= 't') || (str[i] >= 'v' && str[i] <= 'z')){

        sum = sum + 1; // increase sum by 1 if character is a consonant

      }

      else if((str[i] >= 'B' && str[i] <= 'D') || (str[i] >= 'F' && str[i] <= 'H') || (str[i] >= 'J' && str[i] <= 'N') || (str[i] >= 'P' && str[i] <= 'T') || (str[i] >= 'V' && str[i] <= 'Z')){

        sum = sum + 1; // increase sum by 1 if character is a consonant

      }

    }

  }

  else{

    return str4; // In case the inital value given is not a string
  }

  return sum; // return the number of consonants in the string given in lab1.test.js

}

function questionFour(fullString, substring) {

  let str5 = 'One or Both of the input parameters is/are not a string';

  // Making sure that fullString and substring are strings
  if((typeof(fullString) === 'string') && (typeof(substring) === 'string')){

    let count = fullString.split(substring).length - 1; // Computing how many times a substring occurs in a given string
    return count; // return count

  }

  else{

    return str5; // In case the values provided for fullString or/and substring is/are not a string

  }

}

module.exports = {
  firstName: 'Georges',
  lastName: 'Hatem',
  studentId: '10479490',
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
};
