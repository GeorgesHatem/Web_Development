//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
const mongoCollections = require('./config/mongoCollections');
const users = mongoCollections.user_collection;

const createCheckUser = async (username, password) => {

    if(!username){

        throw {code: 400, message: 'Please enter a username'};
    }

    if(!password){

        throw {code: 400, message: 'Please enter a password'};

    }

    if(typeof(username) !== 'string'){

        throw {code: 400, message: 'Username must be a valid string'};

    }

    if(typeof(password) !== 'string'){

        throw {code: 400, message: 'Password must be a valid string'};

    }

    if(username.trim().length === 0){

        throw {code: 400, message: 'Username cannot be an empty string'};

    }

    if(password.trim().length === 0){

        throw {code: 400, message: 'Password cannot be an empty string'};

    }

    for(let i = 0; i < username.length; i++){

        if(username[i] === ' '){

            throw {code: 400, message: 'Username cannot have spaces'};

        }

    }

    for(let i = 0; i < password.length; i++){

        if(password[i] === ' '){

            throw {code: 400, message: 'Password cannot have spaces'};

        }
    }

    for(let i = 0; i < username.length; i++){

        if((username[i] < '0' || username[i] > '9') && (username[i] < 'a' || username[i] > 'z') && (username[i] < 'A' || username[i] > 'Z')){

            throw {code: 400, message: 'Username must be only Alphanumeric Characters'};

        }

    }

    if(username.trim().length < 4){

        throw {code: 400, message: 'Username must be at least 4 characters long'};

    }

    if(password.trim().length < 6){

        throw {code: 400, message: 'Password must be at least 6 characters long'};

    }
    let count_capitalized = 0;
    let count_numbers = 0;
    let count_special = 0;

    for(let i = 0; i < password.length; i++){

        if(password[i] >= 'A' && password[i] <= 'Z'){

            count_capitalized = count_capitalized + 1;

        }

        else if(password[i] >= '0' && password[i] <= '9'){

            count_numbers = count_numbers + 1;

        }

        else if((password[i] < 'a' || password[i] > 'z') && (password[i] < 'A' || password[i] > 'Z') && (password[i] < '0' || password[i] > '9')){

            count_special = count_special + 1;

        }

    }

    if((count_capitalized < 1) || (count_numbers < 1) || (count_special < 1)){

        throw {code: 400, message: 'Password must have at least 1 uppercase character, at least 1 number, and at least 1 special character'};

    }

    return 'no error';

};

const duplicateCheck = async (username) => {

    let usernameLowerCase = username.toLowerCase();
    let user = await users();

    let checkData = await user.findOne({username: usernameLowerCase});
    if(checkData){

        throw {code: 400, message: 'There is already a user with that username'};

    }

    return 'no duplicate';

};

module.exports = { createCheckUser, duplicateCheck };