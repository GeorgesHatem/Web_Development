/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/

const arrayUtils = require('./arrayUtils');
try{

    arrayUtils.arrayStats([9,15,25.5, -5, 5, 7, 10, 5, 11, 30, 4,1,-20]);
    arrayUtils.arrayStats([7, 9, 11, 15, 19, 20, 35, 0]); // Returns: { mean: 14.5, median: 13, mode: 0, range: 35, minimum: 0, maximum: 35, count: 8, sum: 116 }
    arrayUtils.arrayStats([11, 54, 79, 5, -25, 54, 19, 11, 56, 100]); // Returns: { mean: 36.4, median: 36.5, mode: [11,54], range: 125, minimum: -25, maximum: 100, count: 10, sum: 364 }

} catch(e){

    console.error(e);
}

try{

    arrayUtils.arrayStats([]) // throws an error 

} catch(e){

    console.error(e);

}

try{

    arrayUtils.arrayStats("banana"); // throws an error

} catch (e){

    console.error(e);
}

try{

    arrayUtils.arrayStats(["guitar", 1, 3, "apple"]); // throws an error

} catch(e){

    console.error(e);
}

try{

    arrayUtils.arrayStats(); // throws an error

} catch(e){

    console.error(e);
}

try{

    arrayUtils.makeObjects([4, 1], [1, 2]);

} catch (e){

    console.error(e);

}

try{

    arrayUtils.makeObjects(["foo", "bar"], [5, "John"]);

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects (["foo", "bar"], ["name", "Patrick Hill"], ["foo", "not bar"]);

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects([true, undefined], [null, null]);

} catch(e){

    console.error(e);

}

try{
    
    arrayUtils.makeObjects([undefined, true], ["date", "9/11/2022"]);
    
} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects([1, 2], [4, 1]);

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects([5, "John"], ["foo", "bar"]);

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects("banana", [4, 1, 2]); // throws error

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects([4, 1, 2], "banana");

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects([4, 1, 2], [1,2]);

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects([]) // throws an error

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects("banana"); // throws an error

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects(1,2,3); // throws an error

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects(["guitar", 1, 3, "apple"]); // throws an error

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects(); // throws an error

} catch(e){

    console.error(e);

}

try{

    arrayUtils.makeObjects([1],[1,2]); // throws an error

} catch(e){

    console.error(e);

}

const arr1 = [5, 7]; 
const arr2 = [20, 5]; 
const arr3 = [true, 5, 'Patrick']; 
const arr4 = ["CS-546", 'Patrick']; 
const arr5 = [67.7, 'Patrick', true]; 
const arr6 = [true, 5, 'Patrick']; 
const arr7 = [undefined, 5, 'Patrick']; 
const arr8 = [null, undefined, true];
const arr9 = ["2D case", ["foo", "bar"], "bye bye"]
const arr10= [["foo", "bar"], true, "String", 10]

try{
    
    arrayUtils.commonElements(arr1, arr2); // Returns [5]

} catch(e){

    console.error(e);

}

try{

    arrayUtils.commonElements(arr3,arr4,arr5); // returns ['Patrick']

} catch(e){

    console.error(e);

}

try{

    arrayUtils.commonElements(arr5,arr6); // returns ['Patrick', true]

} catch(e){

    console.error(e);

}

try{

    arrayUtils.commonElements(arr9,arr6); // returns []

} catch(e){

    console.error(e);

}

try{

    arrayUtils.commonElements(arr7,arr8); // returns [undefined]

} catch(e){

    console.error(e);

}

try{

    arrayUtils.commonElements(arr3, arr4, arr5, arr7); // returns ['Patrick']

} catch(e){

    console.error(e);
    
}

try{

    arrayUtils.commonElements(arr9, arr10); // returns [["foo", "bar"]]

} catch(e){

    console.error(e);

}

try{

    arrayUtils.commonElements(); // throws error

} catch(e){

    console.error(e);

}

try{

    arrayUtils.commonElements("test"); // throws error

} catch(e){

    console.error(e);

}

try{

    arrayUtils.commonElements([1,2,"nope"]); // throws error

} catch(e){

    console.error(e);

}

const stringUtils = require('./stringUtils');

try{

    stringUtils.palindromes("Hi mom, At noon! Im going to take my kayak to the lake");

} catch(e){

    console.error(e);
}

try{

    stringUtils.palindromes('Wow! Did you see that racecar go?'); // Returns: ["Wow", "Did", "racecar"]

} catch(e){

    console.error(e);

}

try{

    stringUtils.palindromes('Hello World'); // Returns: []

} catch(e){

    console.error(e);

}

try{

    stringUtils.palindromes(); // throws error

} catch(e){

    console.error(e);

}

try{

    stringUtils.palindromes("    "); //  throws error

} catch(e){

    console.error(e);

}

try{

    stringUtils.palindromes(1);  //throws error

} catch(e){

    console.error(e);

}

try{

    stringUtils.palindromes(["hello there"]) //throws error

} catch(e){

    console.error(e);

}


try{

    stringUtils.replaceChar("Daddy"); // Returns: "D*d$y"
    stringUtils.replaceChar("Mommy"); // Returns: "M*m$y" 
    stringUtils.replaceChar("Hello, How are you? I hope you are well"); // Returns: "H*l$o* $o* $r* $o*?$I*h$p* $o* $r* $e*l"

} catch(e){

    console.error(e);

}

try{

    stringUtils.replaceChar(""); // Throws Error

} catch(e){

    console.error(e);

}

try{

    stringUtils.replaceChar(123); // Throws Error

} catch(e){

    console.error(e);

}

try{

    stringUtils.replaceChar("               ");

} catch(e){

    console.error(e);

}

try{

    stringUtils.charSwap("Patrick", "Hill"); //Returns "Hillick Patr"

} catch(e){

    console.error(e);

}

try{

    stringUtils.charSwap("hello", "world"); //Returns "worlo helld"

} catch(e){

    console.error(e);

}

try{

    stringUtils.charSwap("Patrick", ""); //Throws error

} catch(e){

    console.error(e);

}

try{

    stringUtils.charSwap(); // Throws Error

} catch(e){

    console.error(e);

}

try{

    stringUtils.charSwap("John") // Throws error

} catch(e){

    console.error(e);

}

try{
    
    stringUtils.charSwap ("h", "Hello") // Throws Error

} catch(e){

    console.error(e);

}

try{

    stringUtils.charSwap ("h","e") // Throws Error

} catch(e){

    console.error(e);

}

const objectUtils = require('./objectUtils');
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}

try{

    console.log(objectUtils.deepEquality(first, second)); // false

} catch(e){

    console.error(e);

}

try{

    console.log(objectUtils.deepEquality(forth, fifth)); // true

} catch(e){

    console.error(e);

}

try{

    console.log(objectUtils.deepEquality(forth, third)); // false

} catch(e){

    console.error(e);

}

try{

    console.log(objectUtils.deepEquality({}, {})); // true

} catch(e){

    console.error(e);

}

try{

    console.log(objectUtils.deepEquality([1,2,3], [1,2,3])); // throws error 

} catch(e){

    console.error(e);

}

try{

    console.log(objectUtils.deepEquality("foo", "bar")); // throws error

} catch(e){

    console.error(e);

}

const fi = {name: "Patrick", age: 46};
const se = {school: "Stevens", name: "Patrick"};
const th = {c: true, d: false};
const fo = {c: true, d: false};

try{

    console.log(objectUtils.commonKeysValues(fi, se)); // returns  {name: {first: "Patrick", last: "Hill"}, first: "Patrick", last: "Hill"} 
    console.log(objectUtils.commonKeysValues(th, fo));
    console.log(objectUtils.commonKeysValues({}, {})); // {}
    console.log(objectUtils.commonKeysValues({a: 1}, {b: 2}))

} catch(e){

    console.error(e);

}

try{

    console.log(objectUtils.commonKeysValues([1,2,3], [1,2,3])); 

} catch(e){

    console.error(e);

}

try{

    console.log(objectUtils.commonKeysValues("foo", "bar")); // throws error

} catch(e){

    console.error(e);

}

objectUtils.calculateObject({ a: 3, b: 7, c: 5 }, n => n * 2);
/* Returns:
{
  a: 2.45,
  b: 3.74,
  c: 3.16
}
*/