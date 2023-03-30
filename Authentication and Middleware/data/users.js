const bcrypt = require('bcrypt');
const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.user_collection;
const check_error = require('../helpers');

const pass_hash = async(password) => {

  const saltRounds = 16;
  const hashh = await bcrypt.hash(password, saltRounds);
  return hashh;

};

const createUser = async (username, password) => { 

  try{

    await check_error.createCheckUser(username, password);

  } catch(e){

    throw e;

  }

  try{

    await check_error.duplicateCheck(username);

  } catch(e){

    throw e;

  }

  let usernameLowerCase = username.trim().toLowerCase();
  let passwordtrimed = password.trim();
  let hashedPassword = await pass_hash(passwordtrimed);

  let userCollection = await users();

  let userObj = {

    username: usernameLowerCase,
    password: hashedPassword,

  };

  const insertData = await userCollection.insertOne(userObj);

  if(!insertData.acknowledged || !insertData.insertedId){

    throw {

      code: 400,
      message: 'Could not add user',

    }

  }

  return {insertedUser: true};

};

const checkUser = async (username, password) => { 

  try{

    await check_error.createCheckUser(username, password);

  } catch(e){

    throw e;

  }

  let userLowerCase = username.toLowerCase();
  let userCollec = await users();

  let dataFind = await userCollec.findOne({"username": userLowerCase});
  if(dataFind === null){

    throw {code: 400, message: 'Either the username or password is invalid'};

  }

  else{

    passwordCompare = await bcrypt.compare(password, dataFind.password);
    if(passwordCompare === true){

      return {authenticatedUser: true};

    }

    else{

      throw{code: 400, message: 'Either the username or password is invalid'};

    }

  }

};

module.exports = { createUser, checkUser };
