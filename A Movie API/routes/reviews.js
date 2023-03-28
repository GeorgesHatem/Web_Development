//require express and express router as shown in lecture code
const express = require('express');
const router = express.Router();
const data = require('../data');
const reviewsData = data.reviews;
const helperr = require('../helpers');

router
  .route('/:movieId')
  .get(async (req, res) => {
    //code here for GET
    try{

      helperr.getMovieByIdChecker(req.params.movieId);

    } catch(e){

      return res.status(400).send(e);

    }

    try{

      const review = await reviewsData.getAllReviews(req.params.movieId);
      res.status(200).json(review);

    } catch(e){

      res.status(404).json({error: e});

    }


  })
  .post(async (req, res) => {
    //code here for POST

    const reviewPost = req.body;
    try{

      helperr.createMovieReviewChecker(req.params.movieId, reviewPost.reviewTitle, reviewPost.reviewerName, reviewPost.review, reviewPost.rating);

    } catch(e){

      return res.status(400).send(e);

    }

    try{

      const {reviewTitle, reviewerName, review, rating} = reviewPost;
      const newReview = await reviewsData.createReview(reviewTitle, reviewerName, review, rating);
      res.json(newReview);

    } catch(e){

      res.status(500).json({error: e});

    }
  });

router
  .route('/review/:reviewId')
  .get(async (req, res) => {
    //code here for GET

    try{

      helperr.getReviewByIdChecker(req.params.reviewid);      

    } catch(e){

      return res.status(400).json({error: e});

    }

    try{

      const review = await reviewsData.getReview(req.params.reviewId);
      res.json(review);

    } catch(e){

      res.status(404).json({error: e});

    }
  })
  .delete(async (req, res) => {
    //code here for DELETE
    try{
      
      helperr.getReviewByIdChecker(req.params.reviewId);
    
    } catch(e){

      return res.status(400).json({error: e});

    }

    try{

      const reviewidd = await reviewsData.getReview(req.params.reviewId);

    } catch(e){

      res.status(404).json({error: e});

    }

    try{

      const deleteReview = await reviewsData.removeReview(req.params.reviewId);
      res.json(deleteReview);

    } catch(e){

      res.status(500).json({error: e});

    }

  });

  module.exports = router;
