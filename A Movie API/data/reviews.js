const mongoCollection = require('../config/mongoCollections');
const reviews = mongoCollection.reviews;
const movies = mongoCollection.movies;
const mov = require('./movies');
const helpesss = require('../helpers');
let { ObjectId } = require('mongodb');
const moment = require('moment');


let sumAverageRating = 0;

const createReview = async (
  movieId,
  reviewTitle,
  reviewerName,
  review,
  rating
) => {

  helpesss.createMovieReviewChecker(movieId, reviewTitle, reviewerName, review, rating);

  const reviewsCollection = await reviews();

  const postedMovies = await mov.getMovieById(movieId);

  // console.log(postedMovies);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let currentDate = month + "/" + day + "/" + year;

  const newReviewInfo = {

    reviewTitle: reviewTitle,
    reviewDate: currentDate,
    reviewerName: reviewerName,
    review: review,
    rating: rating

  }

  const insertInfo = await reviewsCollection.insertOne(newReviewInfo);
  if(!insertInfo.acknowledged || !insertInfo.insertedId){

    throw "Could not add post";

  }

  const newReview = await getReview(insertInfo.insertedId.toString());

  newReview._id = newReview._id.toString();

  console.log(newReview);

  // postedMovies.reviews.push(newReview);

  postedMovies.reviews[postedMovies.reviews.length] = newReview;

  // console.log(postedMovies.reviews);

  if(postedMovies.reviews.length === 1){

    postedMovies.overallRating = rating;

  }

  else if(postedMovies.reviews.length > 1){


    for(let i = 0; i < postedMovies.reviews.length; i++){

      sumAverageRating = (sumAverageRating) + (postedMovies.reviews[i].rating)

    }

    let averageRating = (sumAverageRating) / (postedMovies.reviews.length);

    postedMovies.overallRating = averageRating;


  }

  const newData = {

    title: postedMovies.title,
    plot: postedMovies.plot,
    genres: postedMovies.genres,
    rating: postedMovies.rating,
    studio: postedMovies.studio,
    director: postedMovies.director,
    castMembers: postedMovies.castMembers,
    dateReleased: postedMovies.dateReleased,
    runtime: postedMovies.runtime,
    reviews: JSON.stringify(postedMovies.reviews),
    overallRating: postedMovies.overallRating


  }

  const moviecollection = await movies();

  const updatedInfo = await moviecollection.updateOne({_id: ObjectId(movieId)}, {$set: newData});

  if(updatedInfo.modifiedCount === 0){

    throw "Could not update Dog successfully";

  }

  return newReview;


};

const getAllReviews = async (movieId) => {

  // helpesss.getMovieByIdChecker(movieId);

  const movieIdLooking = await mov.getMovieById(movieId);

  return movieIdLooking.reviews;


};

const getReview = async (reviewId) => {

  helpesss.getReviewByIdChecker(reviewId);

  const reviewsCollection = await reviews();
  const reviewe = await reviewsCollection.findOne({_id: ObjectId(reviewId)});

  if(reviewe === null){

    throw "No review with that id";

  }

  return reviewe;


};

const removeReview = async (reviewId) => {

  helpesss.getReviewByIdChecker(reviewId);

  // let j = 0;

  const reviewsCollection = await reviews();
  const moviecollection = await movies();

  // let's see if it exists before proceeding with searching through movies
  let reviewIdToDelete = await getReview(reviewId);

  let allMoviess = await mov.getAllMovies();

  for(let i = 0; i < allMoviess.length; i++){

    for(let j = 0; j < allMoviess[i].reviews.length; i++){

      if(allMoviess[i].reviews[j]._id === reviewId){

        const movieObjectId = allMoviess[i]._id;

      }

    }

  }
  const deletionInfo = await reviewsCollection.deleteOne({_id: ObjectId(reviewId)});

  if(deletionInfo.deletedCount === 0){

    throw "Could not delete review";

  }

  return mov.getMovieById(movieObjectId);


};

module.exports = { createReview, getAllReviews, getReview, removeReview };
