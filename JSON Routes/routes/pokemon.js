//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/code/routes

const express = require('express');
const router = express.Router();
const data = require('../data');
const pokeData = data.pokemon;
const helpee = require('../helpers');


router
  .route('/').get(async(req, res) => {

    try{

      let { data } = await pokeData.pokemon();
      res.json(data);

    } catch(e){

      res.status(500).send(e);

    }

  })
//Request Method

router
  .route('/:id').get(async(req, res) => {

    try{

      req.params.id = helpee.IdChecker(req.params.id);
      let data1 = await pokeData.pokemonById(req.params.id);
      
      res.json(data1);

    } catch(e){

      if(typeof(e) === 'string'){

        if(e === "Invalid URL Parameter"){

          res.status(400).send(e);

        }

        else{

          console.log(e);

        }

      }

      else{

        res.status(404).send('Pokemon Not Found!');

      }

    }


  })
//Request Method

module.exports = router;