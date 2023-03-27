/* Name: Georges Hatem

Assignment: CS 546 Lab Assignment 3

Due Date: October 2, 2022, at 11:59 pm EST

companies.js description: In this file (companies.js), we are supposed to implement 3 functions as follows:

1) The first function we are supposed to implement is listEmployees(companyName). For this function, we are
supposed to use axios.get to get the data from the companies.json file and to get the data from the 
people.json file. After that, we need to display the object for the specific company name, and we need to add
an employees key with its values corresponding to all the people who work at this entered company. Also,
we are supposed to handle error checking.

2) The second function we are supposed to implement is sameIndustry(industry). For this function, we are 
supposed to use axios.get to get the data from the companies.json file. After that, we need to display 
an array of all the companies from companies.json that are in the same industry as the industry entered
as input. Also, we are supposed to handle error checking.

3) The third function we are supposed to implement is getCompanyById(id). For this function, we are supposed
to use axios.get to get the data from the companies.json file. After that, we need to display the object 
containing all the information for the specific company based on the id given as input parameter.

4) I also added an async function called getCompData to get the companies.json data from Github using 
axios.get. This was made so that I do not have to write the same lines of code myltiple times. I only have to call the
functions getCompData in all the other needed functions.

5) I also added an async function called getPeopleData to get the people.json data from Github using 
axios.get. This was made so that I do not have to write the same lines of code myltiple times. I only have to call the
functions getPeopleData in all the other needed functions.

*/

const axios = require('axios');

const getCompData = async() => {

    return(await axios.get("https://gist.githubusercontent.com/graffixnyc/90b56a2abf10cfd88b2310b4a0ae3381/raw/f43962e103672e15f8ec2d5e19106e9d134e33c6/companies.json"));
}

const getPeopleData = async() => {

    return(await axios.get("https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json"));

}


const listEmployees = async (companyName) => {
    
    let val = true;

    if(!companyName){

        throw "The company name does not exist (Please input the company name as a string)";

    }

    if(typeof(companyName) !== 'string'){

        throw "The input parameter for company name is not a string (Make sure that you input the company name as a string)";

    }

    for(let i = 0; i < companyName.length; i++){

        if(companyName[i] !== ' '){

            val = false;

        }

    }

    if(val === true){

        throw "The company name input parameter cannot be consisted only of empty spaces";

    }

    let  { data }  = await getCompData();

    let compObj = {};
    
    let tval = true;

    data.forEach((vall) => {

        if(vall.name.toUpperCase() === companyName.toUpperCase()){

            compObj = vall;
            tval = false;

        }

    });

    if(tval === true){

        throw "The supplied input company cannot be found in company.json (Please enter a different company name)";

    }

    let full_name_array = [];
    let l = 0;

    let data1 = await getPeopleData();

    data1.data.forEach((valll) => {

        if(valll.company_id === compObj.id){

            full_name_array[l] = (valll.last_name) + " " + (valll.first_name);
            l = l + 1;

        }


    });

    full_name_array.sort();
    o = 0;
    let new_full_array = [];

    full_name_array.forEach((valk) => {

        valk = valk.split(" ").reverse().join(" ");

        new_full_array[o] = valk;
        o = o + 1;

    });

    compObj.employees = new_full_array;

    console.log(compObj);


};

const sameIndustry = async (industry) => {

    let valv = true;

    if(!industry){

        throw "The industry parameter does not exist (Please input a string parameter for industry)";

    }

    if(typeof(industry) !== 'string'){

        throw "The industry parameter is not a string (Make sure that you input the industry parameter as a string";

    }

    for(let i = 0; i < industry.length; i++){

        if(industry[i] !== ' '){

            valv = false;

        }

    }

    if(valv === true){

        throw "The industry parameter cannot only consist of empty spaces";

    }

    let { data } = await getCompData();

    let industryArray = [];
    let k = 0;

    data.forEach((vali) => {

        if(vali.industry.toUpperCase() === industry.toUpperCase()){

            industryArray[k] = vali;
            k = k + 1;

        }

    });

    if(industryArray.length === 0){

        throw "The industry parameter cannot be found in companies.json";

    }

    console.log(industryArray);


};

const getCompanyById = async (id) => {

    let valm = true;

    if(!id){

        throw "The id parameter does not exist (Please input a string id parameter";

    }

    if(typeof(id) !== 'string'){

        throw "The id parameter is not a string (Make sure you input a string for the id parameter)";

    }

    for(let i = 0; i < id.length; i++){

        if(id[i] !== ' '){

            valm = false;

        }

    }

    if(valm === true){

        throw "The id parameter cannot only consist of empty spaces";

    }

    let { data } = await getCompData();
    let idArray = [];
    
    data.forEach((val) => {

        if(val.id === id){

            idArray[0] = val;
            console.log(val);

        }

    });

    if(idArray.length === 0){

        throw "Company Not Found";

    }

};


module.exports = { listEmployees, sameIndustry, getCompanyById };
