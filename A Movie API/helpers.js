//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
const moment = require('moment');
let { ObjectId } = require('mongodb');

const createMovieChecker = (title, plot, genres, rating, studio, director, castMembers, dateReleased, runtime) => {

    if(!(title) || !(plot) || !(genres) || !(rating) || !(studio) || !(director) || !(castMembers) || !(dateReleased) || !(runtime)){

        throw "All fields need to have valid values";
    
      }
    
      else if(typeof(title) !== 'string' || typeof(plot) !== 'string' || typeof(rating) !== 'string' || typeof(studio) !== 'string' || typeof(director) !== 'string' || typeof(dateReleased) !== 'string' || typeof(runtime) !== 'string'){
    
        throw "tile, plot, rating, studio, director, dateReleased, and runtime should all be strings";
    
      }
    
      let compArray = [];
      let val = true;
    
      compArray = [title, plot, rating, studio, director, dateReleased, runtime];
    
      for(let i = 0; i < compArray.length; i++){
    
        let compValue = compArray[i];
    
        for(let j = 0; j < compValue.length; j++){
    
          if(compValue[j] !== " "){
    
            val = false;
    
          }
    
        }
    
        if(val === true){
    
          throw "One or more string values that you did input is a string full of spaces";
    
        }
    
      }
    
      for(let i = 0; i < title.length; i++){
    
        if((title[i] < '0' || title[i] > '9') && (title[i] < 'A' || title[i] > 'Z') && (title[i] < 'a' || title[i] > 'z') && (title[i] !== ' ')){
    
          throw "title can only contain characters 'a' through 'z' or characters 'A' through 'Z' or numbers or space";
    
        }
    
      }
    
      if(title.length < 2){
    
        throw "title should be at least 2 characters";
    
      }
    
      for(let i = 0; i < studio.length; i++){
    
        if((studio[i] < 'A' || studio[i] > 'Z') && (studio[i] < 'a' || studio[i] > 'z') && (studio[i] !== " ")){
    
          throw "studio can only consist of letters 'A' through 'Z' or letters 'a' through 'z' or space";
    
        }
    
      }
    
      if(studio.length < 5){
    
        throw "studio must be at least 5 characters long";
    
      }
    
      const directorArray = director.split(" ");
    
      if(directorArray.length !== 2){
    
        throw "director must have the following format (firstName lastName)";
    
      }
    
      if((directorArray[0].length < 3 || directorArray[1].length < 3)){
    
        throw "first name and last name must be at least 3 characters each";
    
      }
    
      let firstName = directorArray[0];
      let lastName = directorArray[1];
    
      for(let i = 0; i < firstName.length; i++){
    
        if((firstName[i] < 'A' || firstName[i] > 'Z') && (firstName[i] < 'a' || firstName[i] > 'z')){
    
          throw "first name should only consist of letters 'A' through 'Z' or letters 'a' through 'z'";
    
        }
    
      }
    
      for(let i = 0; i < lastName.length; i++){
    
        if((lastName[i] < 'A' || lastName[i] > 'Z') && (lastName[i] < 'a' || lastName[i] > 'z')){
    
          throw "last name should only consist of letters 'A' through 'Z' or letters 'a' through 'z'";
    
        }
    
      }
    
      if((rating !== "G" && rating !== "PG" && rating !== "PG-13" && rating !== "R" && rating !== "NC-17")){
    
        throw "Rating can only be one of these values 'G', 'PG', 'PG-13', 'R', 'NC-17' and is case-sensitive";
    
      }
    
      if(!(genres) || !(Array.isArray(genres))){
    
        throw "genres must be an array";
    
      }
    
      if(genres.length < 1){
    
        throw "Genres should consist of at least 1 element";
    
      }
    
      for(let i = 0; i < genres.length; i++){
    
        if(typeof(genres[i]) !== 'string'){
    
          throw "Each element in Genres should be a string";
    
        }
    
        if(genres[i].length < 5){
    
          throw "Each element in Genres should be at least five characters";
    
        }
    
        let genresexam = genres[i];
        let valll = true;
    
        for(let j = 0; j < genresexam.length; j++){
    
          if((genresexam[j] < 'A' || genresexam[j] > 'Z') && (genresexam[j] < 'a' || genresexam[j] > 'z') && (genresexam[j] !== " ")){
    
            throw "Genres can only contain character 'A' through 'Z' and characters 'a' through 'z'";
    
          }
    
          if(genresexam[j] !== " "){
    
            valll = false;
    
          }
    
        }
    
        if(valll === true){
    
          throw "Elements in Genres cannot be all spaces";
    
        }
    
      }
    
      if(!(castMembers) || !(Array.isArray(castMembers))){
    
        throw "castMembers must be an Array";
    
      }
    
      if(castMembers.length < 1){
    
        throw "castMembers must consist of at least 1 element";
    
      }
    
      for(let i = 0; i < castMembers.length; i++){
    
        if(typeof(castMembers[i]) !== 'string'){
    
          throw "Elements in castMembers should be string";
    
        }
    
        if(castMembers[i].length === 0){
    
          throw "Elements in castMembers cannot consist of empty strings";
    
        }
    
        if(castMembers[i].trim().length === 0){
    
          throw "Elements in castMembers cannot only consist of spaces";
    
        }
    
        const elemCastMembers = castMembers[i].split(" ");
        
        if(elemCastMembers.length !== 2){
    
          throw "The format for each element in castMembers should be (firstName space LastName)";
    
        }
    
        let firstName = elemCastMembers[0];
        let lastName = elemCastMembers[1];
    
        if(firstName.length < 3 || lastName.length < 3){
    
          throw "firstName and lastName must be at lesat 3 characters";
    
        }
    
        for(let j = 0; j < firstName.length; j++){
    
          if((firstName[j] < 'A' || firstName[j] > 'Z') && (firstName[j] < 'a' || firstName[j] > 'z')){
    
            throw "firstName should consist of letters 'A' through 'Z' or letters 'a' through 'z'";
    
          }
    
        }
    
        for(let j = 0; j < lastName.length; j++){
    
          if((lastName[j] < 'A' || lastName[j] > 'Z') && (lastName[j]) < 'a' || lastName[j] > 'z'){
    
            throw "lastName must consist of letters 'A' through 'Z' or letters 'a' through 'z'";
    
          }
    
        }
    
      }
    
      let dateReleasedArray = dateReleased.split("/");
      let bool1 = false;
      const minDate = new Date("1900-01-01");
      const todayDate = new Date();
    
      const maxDate = todayDate.setFullYear(todayDate.getFullYear() + 2);
    
      if((dateReleasedArray.length === 3)){
    
        if((dateReleasedArray[0].length === 2) && (dateReleasedArray[1].length === 2) && (dateReleasedArray[2].length === 4)){
    
          bool1 = true;
    
        }
    
      }
    
      if(bool1 === false){
    
        throw "date must be of format MM/DD/YYYY";
    
      }
    
      let bool = moment(dateReleased, 'MM/DD/YYYY', true).isValid;
    
      if(bool === false){
    
        throw "date is not valid";
    
      }
    
      let changeDate = dateReleasedArray[2] + "-" + dateReleasedArray[0] + "-" + dateReleasedArray[1];
    
      let compChangeDate = new Date(changeDate);
    
      if(compChangeDate < minDate || compChangeDate > maxDate){
    
        throw "The Released date is less than 1990-01-01 and more than today's date + 2 years";
    
      }
    
      let runtimeArray = runtime.split(" ");
      
      if(runtimeArray.length !== 2){
    
        throw "Runtime should have the following format '#h #min' where # is a positive whole number";
    
      }
    
      if(runtimeArray[0] < 2 || runtimeArray[1] < 4){
    
        throw "Runtime should have at least 2 characters for hours (#h) and at least 4 characters for minutes (#min)";
    
      }
    
      let hoursection = runtimeArray[0];
      let minutesection = runtimeArray[1];
    
      if(hoursection[hoursection.length - 1] !== 'h'){
    
        throw "the hour section of runtime should end with 'h'";
    
      }
    
      if(minutesection[minutesection.length - 3] !== 'm' && minutesection[minutesection.length - 2] !== 'i' && minutesection[minutesection.length - 1] !== 'n'){
    
        throw "The minute section of runtume should end with 'min'";
    
      }
    
      for(let i = 0; i < hoursection.length - 1; i++){
        
        if(hoursection[i] < '0' || hoursection[i] > '9'){
    
          throw "The time in hours is not a whole positive number";
    
        }
    
      }
    
      if(hoursection[0] === '0'){
    
        throw "The time for the movie should be greater or equal to 1 hour";
    
      }
    
      for(let i = 0; i < minutesection.length - 3; i++){
    
        if(minutesection[i] < '0' || minutesection[i] > '9'){
    
          throw "The time in minutes is not a whole positive number or 0";
    
        }
    
      }
    
      let hoursectionnum = hoursection.substring(0, hoursection.length - 1);
      let minutesectionnum = minutesection.substring(0, minutesection.length - 3);
    
      if((Number(hoursectionnum) % 1 !== 0) || (Number(minutesectionnum) % 1 !== 0)){
    
        throw "The time in hours or/and minutes sections cannot be a float";
    
      }
    
      if(Number(minutesection) >= 60){
    
        throw "Minute cannot be 60 or bigger";
    
      }

}

const getMovieByIdChecker = id => {

    if(!id){

        throw "movie id is not provided";
    
      }
    
      if(typeof(id) !== 'string'){
    
        throw "movie id provided is not a string";
    
      }
    
      if(id.length === 0){
    
        throw "The movie id provided as input cannot be an empty string";
    
      }
    
      if(id.trim().length === 0){
    
        throw "The movie id provided cannot only consist of spaces";
    
      }
    
      if(!ObjectId.isValid(id)){
    
        throw "movie id is not a valid Object ID";
    
      }

}

const newNameChecker = newName => {


  if(!newName){

    throw "newName is not provided";

  }

  if(typeof(newName) !== 'string'){

    throw "newName provided is not a string";

  }

  if(newName.length === 0){

    throw "newName provided cannot be an empty string";

  }

  if(newName.trim().length === 0){

    throw "newName provided as input cannot only consist of spaces";

  }

  for(let i = 0; i < newName.length; i++){

    if((newName[i] < '0' || newName[i] > '9') && (newName[i] < 'A' || newName[i] > 'Z') && (newName[i] < 'a' || newName[i] > 'z') && (newName[i] !== ' ')){

      throw "newName can only contain characters 'a' through 'z' or characters 'A' through 'Z' or numbers or space";

    }

  }

  if(newName.length < 2){

    throw "newName should be at least 2 characters";

  }

}

const getReviewByIdChecker = id => {

    if(!id){

        throw "review id is not provided";
    
      }
    
      if(typeof(id) !== 'string'){
    
        throw "review id provided is not a string";
    
      }
    
      if(id.length === 0){
    
        throw "The review id provided as input cannot be an empty string";
    
      }
    
      if(id.trim().length === 0){
    
        throw "The review id provided cannot only consist of spaces";
    
      }
    
      if(!ObjectId.isValid(id)){
    
        throw "review id is not a valid Object ID";
    
      }

}

const updateMovieChecker = (id, title, plot, genres, rating, studio, director, castMembers, dateReleased, runtime) => {

    if(!(id) || !(title) || !(plot) || !(genres) || !(rating) || !(studio) || !(director) || !(castMembers) || !(dateReleased) || !(runtime)){

        throw "All fields need to have valid values";

    }

    if(typeof(id) !== 'string' || typeof(title) !== 'string' || typeof(plot) !== 'string' || typeof(rating) !== 'string' || typeof(studio) !== 'string' || typeof(director) !== 'string' || typeof(dateReleased) !== 'string' || typeof(runtime) !== 'string'){

        throw "Fields: id, title, plot, rating, studio, director, dateReleased, runtime should all be string";


    }

    if(id.length === 0 || title.length === 0 || plot.length === 0 || rating.length === 0 || studio.length === 0 || director.length === 0 || dateReleased.length === 0 || runtime.length === 0){

        throw "Fields: id, title, plot, rating, studio, director, dateReleased, runtime cannot be an empty string";

    }

    if(id.trim().length === 0 || title.trim().length === 0 || plot.trim().length === 0 || rating.trim().length === 0 || studio.trim().length === 0 || director.trim().length === 0 || dateReleased.trim().length === 0 || runtime.trim().length === 0){

        throw "Fields: id, title, plot, rating, studio, director, dateReleased, runtime cannot consist of only spaces";

    }

    if(!ObjectId.isValid(id)){
    
        throw "ID is not a valid Object ID";
    
    }

    if(!Array.isArray(genres)){

        throw "genres must be an Array";

    }

    if(genres.length === 0){

        throw "genres must be an Array consisting of at least 1 string value inside of it";

    }

    for(let i = 0; i < genres.length; i++){

        if(typeof(genres[i]) !== 'string'){

            throw "All elements in genres must be string";

        }

        if(genres[i].length === 0){

            throw "Elements in genres cannot be empty strings";


        }

        if(genres[i].trim().length === 0){

            throw "Elements in genres cannot consist of just spaces";

        }

    }

    if(!Array.isArray(castMembers)){

        throw "castMembers must be an Array";

    }

    if(castMembers.length === 0){

        throw "castMembers must be an Array consisting of at least 1 string value inside of it";

    }

    for(let i = 0; i < castMembers.length; i++){

        if(typeof(castMembers[i]) !== 'string'){

            throw "All elements in castMembers must be string";

        }

        if(castMembers[i].length === 0){

            throw "Elements in castMembers cannot be empty strings";

        }

        if(castMembers[i].trim().length === 0){

            throw "Elements in castMembers cannot consist of just spaces";

        }

    }

    let dateReleasedArray = dateReleased.split("/");
    let bool1 = false;
    const minDate = new Date("1900-01-01");
    const todayDate = new Date();
    
    const maxDate = todayDate.setFullYear(todayDate.getFullYear() + 2);
    
    if((dateReleasedArray.length === 3)){
    
        if((dateReleasedArray[0].length === 2) && (dateReleasedArray[1].length === 2) && (dateReleasedArray[2].length === 4)){
    
          bool1 = true;
    
        }
    
    }
    
    if(bool1 === false){
    
        throw "date must be of format MM/DD/YYYY";
    
    }
    
    let bool = moment(dateReleased, 'MM/DD/YYYY', true).isValid;
    
    if(bool === false){
    
        throw "date is not valid";
    
    }
    
    let changeDate = dateReleasedArray[2] + "-" + dateReleasedArray[0] + "-" + dateReleasedArray[1];
    
    let compChangeDate = new Date(changeDate);
    
    if(compChangeDate < minDate || compChangeDate > maxDate){
    
        throw "The Released date is less than 1990-01-01 and more than today's date + 2 years";
    
    }
    
    let runtimeArray = runtime.split(" ");
      
    if(runtimeArray.length !== 2){
    
        throw "Runtime should have the following format '#h #min' where # is a positive whole number";
    
    }
    
    if(runtimeArray[0] < 2 || runtimeArray[1] < 4){
    
        throw "Runtime should have at least 2 characters for hours (#h) and at least 4 characters for minutes (#min)";
    
    }
    
    let hoursection = runtimeArray[0];
    let minutesection = runtimeArray[1];
    
    if(hoursection[hoursection.length - 1] !== 'h'){
    
        throw "the hour section of runtime should end with 'h'";
    
    }
    
    if(minutesection[minutesection.length - 3] !== 'm' && minutesection[minutesection.length - 2] !== 'i' && minutesection[minutesection.length - 1] !== 'n'){
    
        throw "The minute section of runtume should end with 'min'";
    
    }
    
    for(let i = 0; i < hoursection.length - 1; i++){
        
        if(hoursection[i] < '0' || hoursection[i] > '9'){
    
          throw "The time in hours is not a whole positive number";
    
        }
    
    }
    
    if(hoursection[0] === '0'){
    
        throw "The time for the movie should be greater or equal to 1 hour";
    
    }
    
    for(let i = 0; i < minutesection.length - 3; i++){
    
        if(minutesection[i] < '0' || minutesection[i] > '9'){
    
          throw "The time in minutes is not a whole positive number or 0";
    
        }
    
    }
    
    let hoursectionnum = hoursection.substring(0, hoursection.length - 1);
    let minutesectionnum = minutesection.substring(0, minutesection.length - 3);
    
    if((Number(hoursectionnum) % 1 !== 0) || (Number(minutesectionnum) % 1 !== 0)){
    
        throw "The time in hours or/and minutes sections cannot be a float";
    
    }
    
    if(Number(minutesection) >= 60){
    
        throw "Minute cannot be 60 or bigger";
    
    }

}

const createMovieReviewChecker = (movieId, reviewTitle, reviewerName, review, rating) => {

    if(!(movieId) || !(reviewTitle) || !(reviewerName) || !(review) || !(rating)){

        throw "All fields need to have valid values";
    
      }
     
      if(typeof(movieId) !== 'string' || typeof(reviewTitle) !== 'string' || typeof(reviewerName) !== 'string' || typeof(review) !== 'string'){
    
        throw "Fields: movieId, reviewTitle, reviewerName, and review need to be string";
    
    
      }

      if(movieId.length === 0 || reviewTitle.length === 0 || reviewerName.length === 0 || review.length === 0){
    
        throw "Fields: movieId, reviewTitle, reviewerName, or review cannot be empty strings";
    
      }
    
      if(movieId.trim().length === 0 || reviewTitle.trim().length === 0 || reviewerName.trim().length === 0 || review.trim().length === 0){
    
        throw "Fields: movieId, reviewTitle, reviewerName, or review cannot only consist of spaces";
    
      }
    
      if(!ObjectId.isValid(movieId)){

        throw "movieId entered is not a valid Object ID";

      }

      if(typeof(rating) !== 'number'){

        throw "rating should be an integer or decimal";

      }

      if(rating % 1 !== 0){

        rating = rating.toFixed(1);

      }

      if(((rating !== 1) && (rating < 1.5)) || ((rating !== 5) && (rating > 4.8))){

        throw "rating must be an integer number from 1 to 5 or a decimal number from 1.5 to 4.8";

      }


} 

const postUpdateMovieChecker = (title, plot, genres, rating, studio, director, castMembers, dateReleased, runtime) => {

  if(!(title) || !(plot) || !(genres) || !(rating) || !(studio) || !(director) || !(castMembers) || !(dateReleased) || !(runtime)){

      throw "All fields need to have valid values";

  }

  if(typeof(title) !== 'string' || typeof(plot) !== 'string' || typeof(rating) !== 'string' || typeof(studio) !== 'string' || typeof(director) !== 'string' || typeof(dateReleased) !== 'string' || typeof(runtime) !== 'string'){

      throw "Fields: id, title, plot, rating, studio, director, dateReleased, runtime should all be string";


  }

  if(title.length === 0 || plot.length === 0 || rating.length === 0 || studio.length === 0 || director.length === 0 || dateReleased.length === 0 || runtime.length === 0){

      throw "Fields: id, title, plot, rating, studio, director, dateReleased, runtime cannot be an empty string";

  }

  if(title.trim().length === 0 || plot.trim().length === 0 || rating.trim().length === 0 || studio.trim().length === 0 || director.trim().length === 0 || dateReleased.trim().length === 0 || runtime.trim().length === 0){

      throw "Fields: id, title, plot, rating, studio, director, dateReleased, runtime cannot consist of only spaces";

  }

  if(!Array.isArray(genres)){

      throw "genres must be an Array";

  }

  if(genres.length === 0){

      throw "genres must be an Array consisting of at least 1 string value inside of it";

  }

  for(let i = 0; i < genres.length; i++){

      if(typeof(genres[i]) !== 'string'){

          throw "All elements in genres must be string";

      }

      if(genres[i].length === 0){

          throw "Elements in genres cannot be empty strings";


      }

      if(genres[i].trim().length === 0){

          throw "Elements in genres cannot consist of just spaces";

      }

  }

  if(!Array.isArray(castMembers)){

      throw "castMembers must be an Array";

  }

  if(castMembers.length === 0){

      throw "castMembers must be an Array consisting of at least 1 string value inside of it";

  }

  for(let i = 0; i < castMembers.length; i++){

      if(typeof(castMembers[i]) !== 'string'){

          throw "All elements in castMembers must be string";

      }

      if(castMembers[i].length === 0){

          throw "Elements in castMembers cannot be empty strings";

      }

      if(castMembers[i].trim().length === 0){

          throw "Elements in castMembers cannot consist of just spaces";

      }

  }

  let dateReleasedArray = dateReleased.split("/");
  let bool1 = false;
  const minDate = new Date("1900-01-01");
  const todayDate = new Date();
  
  const maxDate = todayDate.setFullYear(todayDate.getFullYear() + 2);
  
  if((dateReleasedArray.length === 3)){
  
      if((dateReleasedArray[0].length === 2) && (dateReleasedArray[1].length === 2) && (dateReleasedArray[2].length === 4)){
  
        bool1 = true;
  
      }
  
  }
  
  if(bool1 === false){
  
      throw "date must be of format MM/DD/YYYY";
  
  }
  
  let bool = moment(dateReleased, 'MM/DD/YYYY', true).isValid;
  
  if(bool === false){
  
      throw "date is not valid";
  
  }
  
  let changeDate = dateReleasedArray[2] + "-" + dateReleasedArray[0] + "-" + dateReleasedArray[1];
  
  let compChangeDate = new Date(changeDate);
  
  if(compChangeDate < minDate || compChangeDate > maxDate){
  
      throw "The Released date is less than 1990-01-01 and more than today's date + 2 years";
  
  }
  
  let runtimeArray = runtime.split(" ");
    
  if(runtimeArray.length !== 2){
  
      throw "Runtime should have the following format '#h #min' where # is a positive whole number";
  
  }
  
  if(runtimeArray[0] < 2 || runtimeArray[1] < 4){
  
      throw "Runtime should have at least 2 characters for hours (#h) and at least 4 characters for minutes (#min)";
  
  }
  
  let hoursection = runtimeArray[0];
  let minutesection = runtimeArray[1];
  
  if(hoursection[hoursection.length - 1] !== 'h'){
  
      throw "the hour section of runtime should end with 'h'";
  
  }
  
  if(minutesection[minutesection.length - 3] !== 'm' && minutesection[minutesection.length - 2] !== 'i' && minutesection[minutesection.length - 1] !== 'n'){
  
      throw "The minute section of runtume should end with 'min'";
  
  }
  
  for(let i = 0; i < hoursection.length - 1; i++){
      
      if(hoursection[i] < '0' || hoursection[i] > '9'){
  
        throw "The time in hours is not a whole positive number";
  
      }
  
  }
  
  if(hoursection[0] === '0'){
  
      throw "The time for the movie should be greater or equal to 1 hour";
  
  }
  
  for(let i = 0; i < minutesection.length - 3; i++){
  
      if(minutesection[i] < '0' || minutesection[i] > '9'){
  
        throw "The time in minutes is not a whole positive number or 0";
  
      }
  
  }
  
  let hoursectionnum = hoursection.substring(0, hoursection.length - 1);
  let minutesectionnum = minutesection.substring(0, minutesection.length - 3);
  
  if((Number(hoursectionnum) % 1 !== 0) || (Number(minutesectionnum) % 1 !== 0)){
  
      throw "The time in hours or/and minutes sections cannot be a float";
  
  }
  
  if(Number(minutesection) >= 60){
  
      throw "Minute cannot be 60 or bigger";
  
  }

}

module.exports = { createMovieChecker, getMovieByIdChecker, newNameChecker, getReviewByIdChecker, updateMovieChecker, createMovieReviewChecker, postUpdateMovieChecker };