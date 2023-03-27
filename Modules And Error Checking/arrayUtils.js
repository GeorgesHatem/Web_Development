/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let arrayStats = (array) => {

  let sum = 0;
  // let count = 1;
  let median = 0;
  let currelement = [];
  let average;

  if(!Array.isArray(array)) {
    
    throw "The array does not exist (the input entered is not an Array)";

  }

  if(array.length === 0){

    throw "The array is empty";

  }

  else if(array.length === 1){

    if(typeof(array[0]) === 'number'){

      throw "The array contains only 1 numerical value (more than 1 value is needed)";

    }

    else{

      throw "The array contains 1 non-numerical value (Please input more than 1 NUMERICAL value)";

    }

  }

  else if(array.length > 1){

    for(let i = 0; i < array.length; i++){

      if(typeof(array[i]) != 'number'){

        throw "The array contains a non-numerical value (make sure all values in the array are numerical)";

      }

    }

    array.sort((a, b) => a - b);

    for(let j = 0; j < array.length; j++){

      sum = sum + array[j];

    }

    average = (sum) / (array.length);

    if((array.length % 2) === 0){

      median = (array[(array.length / 2) - 1] + array[(array.length / 2)]) / (2);

    }

    else{

      median = array[((array.length + 1) / (2)) - 1];

    }

    // let currelement =[];
    let currelementcount = 1;
    let countnum = 1;
    let mode;

    for(let k = 1; k < array.length; k++){

      if(array[k] === array[k-1]){

        countnum = countnum + 1;
        if(countnum >= currelementcount){

          if((countnum === currelementcount) && (array[k] != array[k + 1])){

            currelement[currelement.length] = array[k];

          }

          else{

          currelementcount = countnum;
          currelement[0] = array[k];

          }

        }

      }

      else{

        countnum = 1;

      }

    }
    
    // mode = currelement;

    }

    let minimum = array[0];
    let maximum = array[array.length - 1];

    let range = maximum - minimum;

    let countnum1 = array.length;

    let total_sum = sum;

    let myObj = {mean: average, median: median, mode: currelement, range: range, minimum: minimum, maximum: maximum, count: countnum1, sum: total_sum};

    if(currelement.length === 0){

      myObj.mode = 0;

    }

    else if(currelement.length === 1){

      myObj.mode = currelement[0];

    }

    else{

      myObj.mode = currelement;

    }

    console.log(myObj);

  };

let makeObjects = (...arrays) => {

  for(let i = 0; i < arrays.length; i++){

    if(!Array.isArray(arrays[i])){

      throw "One or more of the inputs is/are not arrays (all input should be arrays)";

    }

    else if(arrays[i].length === 0){

      throw "One or more of the input arrays is/are empty";

    }

    else if(arrays[i].length !== 2){

      throw "One or more of the input arrays has less or more than 2 elements";

    }

  }

  let obj5 = Object.fromEntries(arrays);

  if(Object.keys(obj5).length === 0){

    throw "No input has been entered";

  }
  console.log(obj5);
  //this function takes in a variable number of arrays that's what the ...arrays signifies
};

let commonElements = (...arrays) => {

  let res = [];

  for(let i = 0; i < arrays.length; i++){

    if(!Array.isArray(arrays[i])){

      throw "One or more of the input entered is not an Array (All input must be arrays)";

    }

    else if(arrays[i].length === 0){

      throw "One or more of the input arrays are empty (All input arrays must have 1 value at least)";

    }


  }

  if(arrays.length === 1){

    throw "There are 1 array only (We need to have at least 2 arrays)";

  }

  if(arrays.length === 0){

    throw "The are no input (We need at least 2 input arrays)";

  }

  res = arrays[0].filter(item => arrays[1].includes(item));

  if(arrays.length >= 3){

    for(let j = 2; j < arrays.length; j++){

      res = res.filter(item => arrays[j].includes(item));

    }

  }

  console.log(res);

  //this function takes in a variable number of arrays that's what the ...arrays signifies
};

module.exports = { arrayStats, makeObjects, commonElements};
