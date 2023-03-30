// Setup server, session and middleware here.

const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');
const session = require('express-session');
const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(session({
    name: 'AuthCookie',
    secret: 'some secret string!',
    resave: false,
    saveUninitialized: true
  })
  
);

app.use('/protected', (req, res, next) => {

    if(!req.session.user){

        return res.redirect('/forbiddenAccess');

    } else{

        next();

    }

});

app.use((req, res, next) => {

    let current_timestamp = new Date().toUTCString();
    let request_method = req.method;
    let request_route = req.originalUrl;
    let user_status = req.session.user? "Authenticated User" : "Non-Authenticated User";

    console.log('[' + current_timestamp + ']' + ': ' + request_method + request_route + ' (' + user_status + ')');
    next();

})



configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});

