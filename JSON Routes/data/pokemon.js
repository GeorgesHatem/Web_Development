//Your data modules to make the Axios calls and get the data
const axios = require('axios');
const helpes = require('../helpers');

const pokemon = async () => {

    return(await axios.get("https://pokeapi.co/api/v2/pokemon"));

 };

const pokemonById = async (id) => {

    let str = "https://pokeapi.co/api/v2/pokemon/" + id;

    let { data } = await axios.get(str);

    return data;

 };

module.exports = { pokemon, pokemonById };