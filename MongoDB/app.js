const movies = require('./movies');
const connection = require('./mongoConnection');

/*

1. Create a Movie of your choice.
2. Log the newly created Movie. (Just that movie, not all movies)
3. Create another movie of your choice.
4. Query all movies, and log them all
5. Create the 3rd movie of your choice.
6. Log the newly created 3rd movie. (Just that movie, not all movies)
7. Rename the first movie
8. Log the first movie with the updated name. 
9. Remove the second movie you created.
10. Query all movies, and log them all
11. Try to create a movie with bad input parameters to make sure it throws errors.
12. Try to remove a movie that does not exist to make sure it throws errors.
13. Try to rename a movie that does not exist to make sure it throws errors.
14. Try to rename a movie passing in invalid data for the newName parameter to make sure it throws errors.
15. Try getting a movie by ID that does not exist to make sure it throws errors.

*/

async function main() {

    const db = await connection.dbConnection();
    await db.dropDatabase();
    let hackers = {};
    let Georges = {};
    let Duggan = {};

    try{

        hackers = await movies.createMovie("Hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(hackers);
        
    } catch(e){

        console.log(e);

    }

    try{

        Georges = await movies.createMovie("Georges", "Georges is taking CS546 and he really likes it.", ["Comedie", "Drama", "Romance"], "PG-13", "Stevens Institute of Technology", "Patrick Hill", ["Georges Hatem", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "10/10/2022", "1h 45min");
        console.log(await movies.getAllMovies());

    } catch(e){

        console.log(e);

    }

    try{

        Duggan = await movies.createMovie("Duggan Class", "Georges is taking CS522 and he is enjoying it.", ["Comedie", "Drama", "Romance"], "PG-13", "Stevens Institute of Technology", "Dominic Duggan", ["Georges Hatem", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "10/10/2022", "1h 15min");        
        console.log(await movies.getMovieById(Duggan._id));

    } catch(e){

        console.log(e);

    }

    try{

        hackers = await movies.renameMovie(hackers._id, "newHackers");
        console.log(await movies.getMovieById(hackers._id));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.removeMovie(Georges._id));
        console.log(await movies.getAllMovies());

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("     ", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");        
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", 55, ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("har!2", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("e", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists@", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists2", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "Unit", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley Hatem", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain So", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley2", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain3 Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-18", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "pg-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", {}, "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", [2, "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime2", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Dram", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "       "], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", {}, "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "            ", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie Hatem", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens3"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew3 Lillard", "Fisher Stevens"], "09/15/1995", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "01/01/1850", "1h 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1h 45mi");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        let married = await movies.createMovie("hackers", "Hackers are blamed for making a virus that will capsize five oil tankers.", ["Crime", "Drama", "Romance"], "PG-13", "United Artists", "Iain Softley", ["Jonny Miller", "Angelina Jolie", "Matthew Lillard", "Fisher Stevens"], "09/15/1995", "1hr 45min");
        console.log(married);

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.getMovieById("6343a6c15ae86c894bd7c7ce"));        

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.getMovieById("             "));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.getMovieById(""));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.getMovieById());

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.getMovieById(5));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.removeMovie("6343a6c15ae86c894bd7c7ce"));        

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.removeMovie("             "));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.removeMovie(""));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.removeMovie());

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.removeMovie(5));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.renameMovie("           ", "Hackers"));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.renameMovie("6343a6c15ae86c894bd7c7ce", "Hackers"));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.renameMovie("", "Hackers"));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.renameMovie(5, "Hackers"));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.renameMovie(hackers._id, "newHackers"));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.renameMovie(hackers._id, "         "));

    } catch(e){

        console.log(e);

    }

    try{

        console.log(await movies.renameMovie(hackers._id, ""));

    } catch(e){

        console.log(e);

    }

    await connection.closeConnection();
}

main();
