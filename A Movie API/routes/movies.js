//require express and express router as shown in lecture code
const express = require('express');
const router = express.Router();
const data = require('../data');
const moviesData = data.movies;
const helperr = require('../helpers');

router
  .route('/')
  .get(async (req, res) => {
    //code here for GET
    try{

      const reviewsList = await moviesData.getAllMovies();
      const Arrayy = [];
      for(let i = 0; i < reviewsList.length; i++){

        Arrayy[i]._id = reviewsList[i]._id;
        Arrayy[i].title = reviewsList[i].title;

      }

      res.json(Arrayy);

    } catch(e){

      res.status(400).json({error: "Cannot get all movies"});

    }

  })
  .post(async (req, res) => {
    //code here for POST
    const blogPostData = req.body;

    try{

      helperr.postUpdateMovieChecker(blogPostData.title, blogPostData.plot, blogPostData.genres, blogPostData.rating, blogPostData.studio, blogPostData.director, blogPostData.castMembers, blogPostData.dateReleased, blogPostData.runtime);

    } catch(e){

      return res.status(400).send(e);

    }

    try{

      const {title, plot, genres, rating, studio, director, castMembers, dateReleased, runtime } = blogPostData;
      const newMovie = await moviesData.createMovie(title, plot, genres, rating, studio, director, castMembers, dateReleased, runtime);
      res.json(newMovie);

    } catch(e){

      res.status(500).json({error: "Cannot post this movie"});

    }
  });

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

      const movieee = await moviesData.getMovieById(req.params.movieId);
      res.status(200).json(movieee);

    } catch(e){

      res.status(404).send(e);

    }

  })
  .delete(async (req, res) => {
    //code here for DELETE
    try{

      helperr.getMovieByIdChecker(movieId);

    } catch(e){

      return res.status(400).send(e);

    }

    try{

      await moviesData.getMovieById(req.params.movieId);

    } catch(e){

      return res.status(404).send(e);

    }

    try{

      await moviesData.removeMovie(req.params.movieId);
      res.status(200).json({"movieId": req.params.movieId, "deleted": true});
    } catch(e){

      res.status(500).json({error: e});
    }
  })
  .put(async (req, res) => {
    //code here for PUT
    const updatedData = req.body;

    try{

      helperr.updateMovieChecker(req.params.movieId, updatedData.title, updatedData.plot, updatedData.genres, updatedData.rating, updatedData.studio, updatedData.director, updatedData.castMembers, updatedData.dateReleased, updatedData.runtime);

    } catch(e){

      return res.status(400).send(e);

    }

    try{

      await moviesData.getMovieById(req.params.movieId);

    } catch(e){

      return res.status(404).json({error: "Movie not found"});

    }

    try{

      const updatedMovie = await moviesData.updateMovie(req.params.movieId, updatedData.title, updatedData.plot, updatedData.genres, updatedData.rating, updatedData.studio, updatedData.castMembers, updatedData.dateReleased, updatedData.runtime);
      res.status(200).json(updatedMovie);

    } catch(e){

      res.status(500).json({error: e});

    }
  });

  module.exports = router;
