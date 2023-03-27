/* Name: Georges Hatem

Assignment: CS 546 Assignment Lab 3

Due Date: October 3, 2022, at 11:59 PM EST.

Description of people.js: In people.js, we are supposed to implement 4 functions as follows:

1) The first function is getPersonById(id). For this function, we are supposed to locate the following in 
Github with axios.get https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json
This json file has data about people, such as their id, name, street addressm etc. We are supposed to get all
the information related to a specific person by passing the id as an input parameter. Also, we are supposed
to handle error checking.

2) The second function is sameJobTitle(jobTitle). For this function, we are supposed to locate the following
in Github as well with axios.get https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json
From this json file, we are supposed to make an array containing the information of all people who have that
job title passed as thre input parameter to the function. Also, we are supposed to handle error checking.

3) The third function is getPostalCodes(City, State). For this function, we are supposed to locate the following
in Github as well with axios.get https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json
From this json file, we are supposed to make an array of all postal codes that have the entered city and state
and display thay array. The array can have similar postal codes multiple times as well. The array has to be
sorted from minimum to maximum. Also, we are supposed to handle error checking.

4) The fourth function is sameCityAndState(City, state). For this function, we are supposed to locate
the following in Github as well with axios,get https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json
From this json file, we are supposed to make an array consisting of all the people first name and last name
who have the same city and state as the one inputed in the parameter above, and then we are supposed to sort
the array per last name. Also, we are supposed to handle error checking, which was done.

5) I made a function called getApiData, and this function is used to get the data from the Github with the
axios.get https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json
This was made so that I do not have to write the same lines of code myltiple times. I only have to call the
functions getApiData in all the other needed functions.

*/


const axios = require('axios');

const getApiData = async() => {

    return(await axios.get("https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json"));

}

async function getPersonById(id) {

    let value = true;
    let boolval = true;

    if(!id){

        throw "The id parameter does not exist (Please input an id)";

    }

    if(typeof(id) !== 'string'){

        throw "The entered id is not a string (Make sure that the id you enter is a string)";

    }

    for(let i = 0; i < id.length; i++){

        if(id[i] !== ' '){

            value = false;

        }

    }

    if(value === true){

        throw "The entered id cannot only consist of spaces";

    }

    let { data } = await getApiData();

    data.forEach((val) => {

        if(val.id === id){

            boolval = false;
            console.log(val);

        }

    });

    if(boolval === true){

        throw "Person Not Found";

    }


};

const sameJobTitle = async (jobTitle) => {

    let valb = true;
    let stored_array = [];

    if(!jobTitle){

        throw "The job title does not exist (Make sure you input a job title)";

    }

    if(typeof(jobTitle) !== 'string'){

        throw "The job title entered is not a string (Make sure you input a string for the job title";

    }

    for(let j = 0; j < jobTitle.length; j++){

        if(jobTitle[j] !== ' '){

            valb = false;

        }

    }

    if(valb === true){

        throw "The entered job title consists only of empty spaces (Make sure you input an actual job title";

    }

    let { data } = await getApiData();
    let k = 0;

    data.forEach((valc) => {

        if(valc.job_title.toUpperCase() === jobTitle.toUpperCase()){

            stored_array[k] = valc;
            k = k + 1;

        }

    });

    if(stored_array.length === 0){

        throw "No one has the entered job title";

    }

    if(stored_array.length === 1){

        throw "Only 1 person has the entered job title (There should be at least 2 or more people)";

    }

    console.log(stored_array);

};

const getPostalCodes = async (city, state) => {

    let vald = true;
    let vale = true;
    let pos_code_array = [];

    if(!city){

        throw "The city parameter has not been inputed or no parameter has been input (Make sure to enter 2 string parameters)";

    }

    if(!state){

        throw "The state parameter has not been input (Make sure to input the state parameter)";

    }

    if(typeof(city) !== 'string'){

        throw "The city parameter is not a string (city must be a string parameter)";

    }

    if(typeof(state) !== 'string'){

        throw "The state parameter is not a string (state must be a string parameter)";

    }

    for(let i = 0; i < city.length; i++){

        if(city[i] !== ' '){

            vald = false;

        }

    }

    if(vald === true){

        throw "The city parameter entered consists only of empty speaces";

    }

    for(let j = 0; j < state.length; j++){

        if(state[j] !== ' '){

            vale = false;

        }

    }

    if(vale === true){

        throw "The state parameter entered consists only of empty spaces";

    }

    let { data } = await getApiData();
    let f = 0;

    data.forEach((vall) => {

        if((vall.city.toUpperCase() === city.toUpperCase()) && (vall.state.toUpperCase() === state.toUpperCase())){

            pos_code_array[f] = parseInt(vall.postal_code);
            f = f + 1;

        }

    });

    if(pos_code_array.length === 0){

        throw "There is no given postal code for the given city and state parameters";

    }

    pos_code_array.sort((a, b) => {

        return a - b;

    });

    console.log(pos_code_array);

};

const sameCityAndState = async (city, state) => {

    let boolvale = true;
    let boolvalw = true;
    let name_array = [];
    let new_name_array = [];

    if(!city){

        throw "The city parameter or no parameter has been inputed (Make sure to input a string city parameter)";

    }

    if(!state){

        throw "The state parameter has not been inputed (Make sure to input a string state parameter)";

    }

    if(typeof(city) !== 'string'){

        throw "The city inputed is not a string (Make sure to input a string for the city parameter)";

    }

    if(typeof(state) !== 'string'){

        throw "The state inputed is not a string (Make sure to input a string for the state parameter)";

    }

    for(let i = 0; i < city.length; i++){

        if(city[i] !== " "){

            boolvale = false;

        }

    }

    if(boolvale === true){

        throw "The city parameter cannot only consist of spaces";

    }

    for (let j = 0; j < state.length; j++){

        if(state[j] !== ' '){

            boolvalw = false;            

        }

    }

    if(boolvalw === true){

        throw "The state parameter cannot only consist of spaces";

    }

    let { data } = await getApiData();
    
    let l = 0;

    data.forEach((valo) => {

        if((valo.city.toUpperCase() === city.toUpperCase()) && (valo.state.toUpperCase() === state.toUpperCase())){

            name_array[l] = (valo.last_name) + " " + (valo.first_name);
            l = l + 1;

        }

    });

    if(name_array.length === 0){

        throw "There is no one in this database living in this city and state";

    }

    if(name_array.length === 1){

        throw "There is only 1 person living in the provided city and state";

    }

    name_array.sort();
    let p = 0;

    name_array.forEach((valg) => {

        valg = valg.split(" ").reverse().join(" ");

        new_name_array[p] = valg;
        p = p + 1;

    });

    console.log(new_name_array);


};

module.exports = { getPersonById, sameJobTitle, getPostalCodes, sameCityAndState };
