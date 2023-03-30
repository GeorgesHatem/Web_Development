//Here you will require route files and export them as used in previous labs.

const sortArray = require('./sortArray');

const constructorMethod = (app) => {

    app.use('/', sortArray);

    app.use('*', (req, res) => {

        res.redirect('/');

    });

};

module.exports = constructorMethod;
