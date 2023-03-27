/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let palindromes = (string) => {

      let vall = true;

      if(typeof(string) !== 'string'){

            throw "This is not a string (Please input a string)";

      }

      if(string.length === 1 || string.length === 0){

            throw "String has to be at least 2 characters long";

      }

      for(let i = 0; i < string.length; i++){

            if(string[i] !== ' '){

                  vall = false;

            }

      }

      if(vall === true){

            throw "The string cannot be consisted of blank spaces";

      }

      let lowerstring = string.toLowerCase();

      for(let p = 0; p < lowerstring.length; p++){

            if((lowerstring[p] < 'a' || lowerstring[p] > 'z') && (lowerstring[p] !== ' ')){

                  lowerstring = lowerstring.replace(lowerstring[p], '');

            }

      }

      let arrayvalues = lowerstring.split(' ');
      let val = true;
      let palarray = [];
      let countsu = 0;

      for(let k = 0; k < arrayvalues.length; k++){

            if(arrayvalues[k].length % 2 === 0){

                  for(let o = 0; o < (arrayvalues[k].length / 2); o++){

                        if(arrayvalues[k][o] !== arrayvalues[k][arrayvalues[k].length - 1 - o]){

                              val = false;

                        }

                  }

            }

            else if(arrayvalues[k].length % 2 !== 0){

                  for(let d = 0; d < ((arrayvalues[k].length - 1) / (2)); d++){

                        if(arrayvalues[k][d] !== arrayvalues[k][arrayvalues[k].length - 1 - d]){

                              val = false;

                        }

                  }
            } 

            if(val === true){

                  palarray[countsu] = arrayvalues[k];
                  countsu = countsu + 1;

            }

            val = true;
      }

      console.log(palarray);
};

let replaceChar = (string) => {

      let val = true;

      if(typeof(string) !== 'string'){

            throw "Please make sure your input is of string type only";

      }

      else if(string.length <= 1){

            throw "string must have at least 2 characters";

      }

      for(let k = 0; k < string.length; k++){

            if(string[k] !== ' '){

                  val = false;

            }

      }

      if(val === true){

            throw "string cannot only consists of spaces";

      }

      let newString;

      for(let i = 1; i < string.length; i = i + 2){

            if(i === 1){

                  newString = string[0] + '*';

            }

            else{

                  if(newString[i-2] === '*'){

                        newString = newString + string[i-1] + '$';

                  }

                  else if(newString[i-2] === '$'){

                        newString = newString + string[i-1] + '*';

                  }

            }

            if(i === string.length - 2){

                  newString = newString + string[string.length - 1];

            }

      }

      console.log(newString);

      /*

      // string[1] = '*';
      string = string.replace(string[1], '*');
      // string = string.replace(string[3], "$");

      for(let i = 2; i < string.length; i++){

            if((i % 2) !== 0){

                  // console.log(string[i]);

                  if(string[i-2] === '*'){

                        // console.log(i);

                        // string[i] = '$';

                        string = string.replace(string[i], '$');

                  }

                  else if(string[i-2] === '$'){

                        // string[i] = '*';

                        string = string.replace(string[i], '*');

                  }

            }

      }

      console.log(string);
*/
};

let charSwap = (string1, string2) => {

      if(typeof(string1) !== 'string'){

            throw "The first input parameter is not a string";

      }

      if(typeof(string2) !== 'string'){

            throw "The second input parameter is not a string";

      }

      if((string1.length < 4) || (string2.length < 4)){

            throw "One or both of the input strings are less than 4 characters (Both strings should be at least 4 characters long)";

      }

      let string3 = string1.substring(0, 4);
      let string4 = string2.substring(0, 4);

      string1 = string1.replace(string3, string4);
      string2 = string2.replace(string4, string3);

      let string5 = string1.concat(" ");
      let string6 = string5.concat(string2);

      console.log(string6);


};

module.exports = {palindromes, replaceChar, charSwap};
