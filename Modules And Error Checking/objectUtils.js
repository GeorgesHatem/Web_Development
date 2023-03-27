/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let deepEquality = (obj1, obj2) => {

      if(typeof(obj1) !== 'object'){

            throw "obj1 is not an object (please input it as an object)";

      }

      if(typeof(obj2) !== 'object'){

            throw "obj2 is not an object (please input it as an object)";

      }

      if(Array.isArray(obj1) || Array.isArray(obj2)){

            throw "obj1 or obj2 are not an object (please input it as an object)";

      }

      const sorted1 = Object.keys(obj1).sort().reduce((accumulator, key) => {accumulator[key] = obj1[key];
      return accumulator;
      
      }, {});

      const sorted2 = Object.keys(obj2).sort().reduce((accumulator, key) => {accumulator[key] = obj2[key];
            return accumulator;
            
      }, {});

      let val = (JSON.stringify(sorted1) === JSON.stringify(sorted2));

      console.log(val);

};


let commonKeysValues = (obj1, obj2) => {

      let val = true;

      if(typeof(obj1) !== 'object' || Array.isArray(obj1)){

            throw "object 1 is not an object";

      }

      else if(typeof(obj2) !== 'object' || Array.isArray(obj2)){

            throw "object 2 is not an object";

      }

      if(Object.keys(obj1).length === 0){

            console.log(obj1);

      }

      else if(Object.keys(obj2).length === 0){


            console.log(obj2);

      }

      else{

            for(const key1 in obj1){

                  for(const key2 in obj2){

                        if(key1 === key2){

                              if(obj1[key1] === obj2[key2]){

                                    console.log(`${key1}: ${obj1[key1]}`);
                                    val = false;

                              }

                        }

                  }

                  
            }

            if(val === true){

                  console.log("{}");

            }

      }


};

let calculateObject = (object, func) => {

      if(typeof(object) !== 'object' || Array.isArray(object)){

            throw "The first passed parameter is not an object";

      }

      if(typeof(func) !== 'function'){

            throw "The second input parameter is not a function";

      }

      let array1 = [];

      array1 = Object.values(object);

      for(let i = 0; i < array1.length; i++){

            if(typeof(array1[i]) != 'number'){

                  throw "One or more of the values in the object is/are not numbers (Please make sure all values are numbers)";

            }

      }

      for(let k = 0; k < array1.length; k++){

            array1[k] = func(array1[k]);
            array1[k] = Math.sqrt(array1[k]);
            array1[k] = array1[k].toFixed(2);

      }

      let obj3 = Object.assign({}, array1);

      console.log(obj3);
};


module.exports = {deepEquality, commonKeysValues, calculateObject};
