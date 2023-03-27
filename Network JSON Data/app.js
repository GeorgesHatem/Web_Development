/* Name: Georges Hatem

Assignment: CS 546 Lab 3 Assignment

Due Date: October 3, 2022, at 11:59 PM EST

Description of file app.js: This is the file used for testing my code in people.js and companies.js. As you can see, I performed multiple tests for each function 
to make sure everything is working as instructed.

*/

const people = require("./people");
const companies = require("./companies");

async function main(){

    try{

        await people.getPersonById("fa36544d-bf92-4ed6-aa84-7085c6cb0440")

    } catch(e){

        console.log(e);
    }

    try{

        await people.getPersonById(-1);

    } catch(e){

        console.log(e);

    }

    try{

        await people.getPersonById(1001);

    } catch(e){

        console.log(e);

    }

    try{

        await people.getPersonById();

    } catch(e){

        console.log(e);

    }

    try{

        await people.getPersonById("7989fa5e-5617-43f7-a931-46036f9dbcff");

    } catch(e){

        console.log(e);

    }

    try{

        await people.getPersonById("82413fa9-1f91-4ba7-8e50-3ece94654746");

    } catch(e){

        console.log(e);

    }

    try{

        await people.getPersonById("Fa36544d-bf92-4ed6-aa84-7085c6cb0440");

    } catch(e){

        console.log(e);

    }

    try{

        await people.sameJobTitle("Help Desk Operator");

    } catch(e){

        console.log(e);
    }

    try{

        await people.sameJobTitle("Computer systems analyst III");

    } catch(e){

        console.log(e);

    }

    try{

        await people.sameJobTitle();

    } catch(e){

        console.log(e);

    }

    try{

        await people.sameJobTitle("farmer");

    } catch(e){

        console.log(e);

    }

    try{

        await people.sameJobTitle(123);

    } catch(e){

        console.log(e);

    }

    try{

        await people.sameJobTitle(["Help Desk Operator"]);

    } catch(e){

        console.log(e);

    }

    try{

        await people.sameJobTitle(true);

    } catch(e){

        console.log(e);

    }

    try{

        await people.sameJobTitle("          ");

    } catch(e){

        console.log(e);

    }

    try{

        await people.getPostalCodes("Salt Lake City", "Utah");

    } catch(e){

        console.error(e);

    }

    try{

        await people.getPostalCodes("san diego", "california");

    } catch(e){

        console.error(e);

    }

    try{

        await people.getPostalCodes();

    } catch(e){

        console.error(e);

    }

    try{

        await people.getPostalCodes(13, 25);

    } catch(e){

        console.error(e);

    }

    try{

        await people.getPostalCodes("Bayside", "New York");

    } catch(e){

        console.error(e);

    }

    try{

        await people.sameCityAndState("Salt Lake City", "Utah");

    } catch(e){

        console.error(e);

    }

    try{

        await people.sameCityAndState("San Diego", "California");

    } catch(e){

        console.error(e);

    }

    try{

        await people.sameCityAndState();

    } catch(e){

        console.error(e);

    }

    try{

        await people.sameCityAndState("      ", "                           ");

    } catch(e){

        console.error(e);

    }

    try{

        await people.sameCityAndState(2, 29);

    } catch(e){

        console.error(e);

    }

    try{

        await people.sameCityAndState("Bayside", "New York");

    } catch(e){

        console.error(e);

    }

    try{

        await companies.listEmployees("Yost, Harris and Cormier");

    } catch(e){

        console.error(e);

    }

    try{

        await companies.listEmployees("Kemmer-Mohr");

    } catch(e){

        console.error(e);

    }

    try{

        await companies.listEmployees("Will-Harvey");

    } catch(e){

        console.error(e);

    }

    try{

        await companies.listEmployees('foobar');

    } catch(e){

        console.error(e);

    }

    try{

        await companies.listEmployees(123);

    } catch(e){

        console.error(e);

    }
    
    try{

        await companies.listEmployees("              ");


    } catch(e){

        console.error(e);

    }


    try{

        await companies.sameIndustry('Auto Parts:O.E.M.');

    } catch(e){

        console.error(e);

    }

    try{

        await companies.sameIndustry(43);

    } catch(e){

        console.error(e);

    }

    try{

        await companies.sameIndustry('           ');

    } catch(e){

        console.error(e);

    }

    try{

        await companies.sameIndustry('Foobar Industry');

    } catch(e){

        console.error(e);

    }

    try{

        await companies.sameIndustry();

    } catch(e){

        console.error(e);

    }

    try{

        await companies.getCompanyById("fb90892a-f7b9-4687-b497-d3b4606faddf");

    } catch(e){

        console.error(e);
    }

    try{

        await companies.getCompanyById(-1);

    } catch(e){


        console.error(e);

    }

    try{

        await companies.getCompanyById(1001);

    } catch(e){

        console.error(e);

    }

    try{

        await companies.getCompanyById();

    } catch(e){

        console.error(e);

    }

    try{

        await companies.getCompanyById('7989fa5e-5617-43f7-a931-46036f9dbcff');

    } catch(e){

        console.error(e);

    }

}

main();