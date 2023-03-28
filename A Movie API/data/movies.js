const mongocollection = require('../config/mongoCollections');
const movies = mongocollection.movies;
let { ObjectId } = require('mongodb');
const moviees = require('../helpers');

const createMovie = async (
  title,
  plot,
  genres,
  rating,
  studio,
  director,
  castMembers,
  dateReleased,
  runtime
) => {

  moviees.createMovieChecker(title, plot, genres, rating, studio, director, castMembers, dateReleased, runtime);

  const moviecollection = await movies();

  let newmovies = {

    title: title,
    plot: plot,
    genres: genres,
    rating: rating,
    studio: studio,
    director: director,
    castMembers: castMembers,
    dateReleased: dateReleased,
    runtime: runtime,
    reviews: [],
    overallRating: 0

  }

  const insertInfo = await moviecollection.insertOne(newmovies);

  if(insertInfo.insertedCount === 0){

    throw "Was not able to add movie";

  }

  const newID = insertInfo.insertedId.toString();

  const movie = await getMovieById(newID);

  movie._id = movie._id.toString();

  return movie;

};

const getAllMovies = async () => {

  const moviecollection = await movies();

  const moviesss = await moviecollection.find({}).toArray();

  for(let i = 0; i < moviesss.length; i++){

    moviesss[i]._id = moviesss[i]._id.toString();

  }

  return moviesss;




};

const getMovieById = async (movieId) => {

  moviees.getMovieByIdChecker(movieId);

  const moviecollection = await movies();

  const moviee = await moviecollection.findOne({_id: ObjectId(movieId)});

  if(moviee === null){

    throw "No movie with that id";

  }

  moviee._id = moviee._id.toString();

  return moviee;

};

const removeMovie = async (movieId) => {

  moviees.getMovieByIdChecker(movieId);

  const moviecollection = await movies();

  const movien = await getMovieById(movieId);

  const moviename = movien.title;

  const deletionIn = await moviecollection.deleteOne({_id: ObjectId(movieId)});

  return `${moviename} has been successfully deleted!`;

};

const updateMovie = async (
  movieId,
  title,
  plot,
  genres,
  rating,
  studio,
  castMembers,
  dateReleased,
  runtime
) => {

  moviees.updateMovieChecker(movieId, title, plot, genres, rating, studio, director, castMembers, dateReleased, runtime);  

  const moviecollection = await movies();

  let rev = await getMovieById(movieId);

  // const movierr = await getMovieById(id);

  const updateMov = {

    title: title,
    plot: plot,
    genres: genres,
    rating: rating,
    studio: studio,
    director: director,
    castMembers: castMembers,
    dateReleased: dateReleased,
    runtime: runtime,
    reviews: rev.reviews,
    overallRating: rev.overallRating

  }

  const updatedInfo = await moviecollection.updateOne({_id: ObjectId(movieId)}, {$set: updateMov});

  if(updatedInfo.modifiedCount === 0){

    throw "Could not update movie successfully";

  }

  return await getMovieById(movieId);



};

const renameMovie = async (id, newName) => {
  //Not used for this lab
};

module.exports = { createMovie, getAllMovies, getMovieById, removeMovie, updateMovie };
