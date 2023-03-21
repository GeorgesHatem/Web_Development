const lab1 = require('./lab1');

// Testing Question 1:

console.log(lab1.questionOne([1, 2, 3])); // Output should be [false, true, true]
console.log(lab1.questionOne([5, 3, 10])); // Output should be [true, true, false]
console.log(lab1.questionOne([2, 1, 2])); // Output should be [true, false, true]
console.log(lab1.questionOne([512, 1007, 17389])); // Output should be [false, false, true]
console.log(lab1.questionOne([0, 14159, 785])); // Output should be [false, true, false]
console.log(lab1.questionOne([11, 4])); // Output should be [true, false]
console.log(lab1.questionOne([-5, -4, 6])); // Output should be [false, false, false]
console.log(lab1.questionOne([1, 4, '9'])); // Output should be the array given does not contain only numbers
console.log(lab1.questionOne(['Georges', 'Tina', 5])); // Output should be the array given does not contain only numbers
console.log(lab1.questionOne([true, false, 7])); // Output should be the array given does not contain only numbers
console.log(lab1.questionOne([])); // Output should be The Array given is empty 
console.log(lab1.questionOne([6])); // Output should be [false] 


// Testing Question 2:

console.log(lab1.questionTwo(5, 3, 10));  // Returns and then outputs 147620 
console.log(lab1.questionTwo(2, 0, 2)); // Returns and then outputs 0 
console.log(lab1.questionTwo(512, 1007, -5)); //Returns and then outputs NaN
console.log(lab1.questionTwo(2, 10, 4)); //Returns and then outputs 2222
console.log(lab1.questionTwo(175, 3, 5)); //Returns and then outputs 21175
console.log(lab1.questionTwo('Georges', 'Tina', 2)); // Returns Not all given parameters are numbers
console.log(lab1.questionTwo(0, 2, 2)); // Returns and then outputs 0
console.log(lab1.questionTwo(3, 5, 'Georges')); // Returns Not all given parameters are numbers


// Testing Question 3:

console.log(lab1.questionThree("How now brown cow"));  // Returns and then outputs 10
console.log(lab1.questionThree("Welcome to CS-546")); // Returns and then outputs 7 
console.log(lab1.questionThree("JavaScript is fun!")); //Returns and then outputs 10
console.log(lab1.questionThree("My name is Georges @ @ @ #$%^!!!!!!****&&&&&&&()()()()_-")); // Returns and then outputs 9
console.log(lab1.questionThree("!!!!####****^^^^%%%%%####34567 674673 8 9 10")); // Returns and then outputs 0
console.log(lab1.questionThree(14)); // Returns The input parameter is not a string
console.log(lab1.questionThree()); // Returns The input parameter is not a string
console.log(lab1.questionThree(true)); // Returns The input parameter is not a string


// Testing Question 4:

console.log(lab1.questionFour("hello world", "o"));  // Returns and then outputs 2
console.log(lab1.questionFour("Helllllllo, class!", "ll")); // Returns and then outputs 3
console.log(lab1.questionFour("My name is Georges", "ge")); // Returns and then outputs 1
console.log(lab1.questionFour("My name is georges", "ge")); // Returns and outputs 2
console.log(lab1.questionFour("Wewewewewe", "we")); // Returns and outputs 4
console.log(lab1.questionFour("wewewewewe", "we")); // Returns and outputs 5
console.log(lab1.questionFour("Oh my oh my")); // Returns One or Both of the input parameters is/are not a string
console.log(lab1.questionFour(12, 45)); // Returns One or Both of the input parameters is/are not a string
console.log(lab1.questionFour(true, false)); // Returns One or Both of the input parameters is/are not a string