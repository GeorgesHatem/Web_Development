/*
Using JavaScript in your browser only, you will listen for the form's submit event; when the form is submitted, you will:
-Get the value of the input text element.  
-You should be expecting a variable number of arrays typed into the input separated by commas:  For example: [3,0,1,2,4], [1,2,8,15], [6,3,10,25,29]
-All array elements should be whole numbers (negative and 0 are allowed), no decimals. 
-Each array should have at least one element that is a whole number (negative and 0 are allowed), no decimals. 
-You can ignore any extra commas for example, inputting: [3,0,1,2,4], [1,2,8,15], [6,3,10,25,29], 
-There should be at least one array inputted. 
-You will then return a single array that has all the values from the arrays inputted sorted from lowest to highest number.  For example:  If our input was: [3,0,1,2,4], [1,2,8,15], [6,3,10,25,29] You would return:  [0,1,1,2,2,3,3,4,6,8,10,15,25,29]
-Add a list item to the #results list of result of the sort you have just completed. You will alternate the class for each list item using the classes is-green and is-red (described below), starting with is-green first.
-If the user does not have a value for the input when they submit, you should not continue processing and instead should inform them of an error somehow.
*/

(function () {

const check = document.getElementById("myForm");

if(check){

    const arrayy = document.getElementById("arrayInput");
    const ul = document.getElementById("list");
    check.addEventListener("submit", event => {
        event.preventDefault();
        try{

            const arrayStringValue = arrayy.value;
            if(arrayStringValue.trim().length === 0){

                throw "You must have at least 1 Array as input";

            }

            for(let i = 0; i < arrayStringValue.length; i++){

                if((arrayStringValue[i] < '0' || arrayStringValue[i] > '9') && (arrayStringValue[i] !== '[') && (arrayStringValue[i] !== ']') && (arrayStringValue[i] !== ',') && (arrayStringValue[i] !== ' ') && (arrayStringValue[i] !== '-')){

                    throw "Letters cannot be provided or decimals";

                }

            }

            for(let i = 0; i < arrayStringValue.length; i++){

                if((i === arrayStringValue.length - 1) && (arrayStringValue[i] !== ']')){

                    if(arrayStringValue[i] !== ','){

                        throw "Spaces cannot be added at the end. The last character can only be a comma or ]";

                    }

                }

                if((arrayStringValue[i] === ']') && (arrayStringValue[i+1] !== ',' || arrayStringValue[i+2] !== ' ') && (i !== arrayStringValue.length - 2) && (i !== arrayStringValue.length - 1)){


                    throw "The expected input is one array or multiple arrays separated by comma and one space";


                }

                if((arrayStringValue[i] === ' ') && ((arrayStringValue[i-1] !== ',') || (arrayStringValue[i+1] !== '['))){


                    throw "The expected input should not have space at the beginning or at the end or between elements in array. Space must exist between 2 arrays though";


                }


            }
            const actualArrayString = arrayStringValue.split(" ");
            if(actualArrayString.length === 0){

                throw "You must have at least 1 Array";

            }

            let testStringConcat = [];
            let testStringConcatt = [];

            for(let i = 0; i < actualArrayString.length; i++){

                if(actualArrayString[i][actualArrayString[i].length - 1] === ','){

                    actualArrayString[i] = actualArrayString[i].slice(0, -1);

                }

            }

            for(let i = 0; i < actualArrayString.length; i++){

                testStringConcat = JSON.parse(actualArrayString[i]);

                if(testStringConcat.length === 0){

                    throw "Each Array should have at least 1 element";

                }

                if(i === 0){

                    testStringConcatt = testStringConcat;

                }
                
                else{

                    testStringConcatt = testStringConcatt.concat(testStringConcat);

                }

            }

            let finalArray = testStringConcatt.sort(function(a,b){return a - b});
            const li = document.createElement("li");
            li.appendChild(document.createTextNode('[' + finalArray + ']'));

            if(ul.className == 'greenClass'){

                li.setAttribute("class", "is-green");
                ul.className = 'redClass';

            } else{

                li.setAttribute("class", "is-red");
                ul.className = 'greenClass';

            }

            ul.appendChild(li);
            check.reset();
            arrayy.focus();

        } catch (e) {
            const message = typeof e === "string" ? e : e.message;
            alert(`${message}`);
        }

    });

}

})();


