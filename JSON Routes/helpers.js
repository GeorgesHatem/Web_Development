//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
const pokemonRout = require('./routes');
const express = require('express');

IdChecker = (id) =>{

    let val;
    let vale;

    if(!id){

        throw "Please input an id after pokemon if you want to take a look at URL ending with pokemon/id";


    }

    if(typeof(id) !== 'string'){

        throw "The type of id entered must be a whole positive number (it cannot be an array, object, etc)"

       
    }

    if(id.trim().length === 0){


        throw "id cannot be empty or consist only of spaces";
        
    
    }

    if(id[id.length - 1] === '/'){

        val = true;

    }

    else{

        val = false;

    }

    for(let i =0; i < id.length; i++){

        if((id[i] >= 0 && id[i] <= 9 && val === true)){

            vale = true;

            if(i === id.length - 2){

                break;

            }

        }

        else if(id[i] >= 0 && id[i] <= 9 && val === false){

            vale = true;

        }

        else{

            vale = false;

        }

        if(vale === false){

            throw "Invalid URL Parameter";

        }

    }

    return id;
    

}

module.exports = { IdChecker };