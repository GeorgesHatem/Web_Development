//require express, express router and bcrypt as shown in lecture code

const express = require('express');
const router = express.Router();

const check_error = require('../helpers');
const data = require('../data');

const user = data.users;

router
  .route('/')
  .get(async (req, res) => {
    //code here for GET

    if(req.session.user){

      res.redirect('/protected');

    }

    else{

      try{

        res.render('userLogin', { title: 'Login Page'});

      } catch(e){

        res.status(404).json({error: e});

      }

    }
  });

router
  .route('/register')
  .get(async (req, res) => {
    //code here for GET

    if(req.session.user){

      res.redirect('/protected');

    }

    else{

      try{

        res.render('userRegister', {title: 'Signup Page'});

      } catch(e){

        res.status(404).json({error: e});

      }

    }
  })
  .post(async (req, res) => {
    //code here for POST

    let errors_array = [];
    let data = req.body;

    try{

      if(!data.username){

        errors_array.push(`400: Please insert a username`);

      }

      if(!data.password){

        errors_array.push(`400: Please insert a password`);

      }

      await check_error.createCheckUser(data.username, data.password);
      await check_error.duplicateCheck(data.username);

    } catch(e){

      errors_array.push(`${e.code}: ${e.message}`);

    }

    if(errors_array.length > 0){

      res.render('userRegister', {

        errors: errors_array,
        hasErrors: true,
        title: 'Signup Page'

      })

      return;

    }

    try{

      let user_creation = await user.createUser(data.username, data.password);
      if(user_creation.insertedUser){

        res.render('userLogin', {title: 'Login Page'});

      }

      else{

        res.status(500).json({error: 'Internal Server Error'});

      }

    } catch(e){


      errors_array.push(`${e.code}: ${e.message}`);
      if(errors_array.length > 0){

        res.render('userRegister', {

          errors: errors_array,
          hasErrors: true,
          title: 'Signup Page',

        });

        return;

      }

    }
  })
 
router
  .route('/login')
  .post(async (req, res) => {
    //code here for POST

    let errors_array = [];
    let data = req.body;

    try{

      if(!data.username){

        errors_array.push(`400: Please insert a username`);

      }

      if(!data.password){

        errors_array.push(`400: Please insert a password`);

      }

      await check_error.createCheckUser(data.username, data.password);

    } catch(e){

      errors_array.push(`${e.code}: ${e.message}`);

    }

    if(errors_array.length > 0){

      res.render('userLogin', {

        errors: errors_array,
        hasErrors: true,
        title: 'Login Page',

      });

      return;

    }

    try{

      let user_checker = await user.checkUser(data.username, data.password);
      if(user_checker.authenticatedUser){

        req.session.user = {username: data.username};
        res.redirect('/protected');

      } else{

        errors_array.push(`400: You did not provide a valid username and/or password`);
        if(errors_array.length > 0){

          res.render('userLogin', {

            errors: errors_array,
            hasErrors: true,
            title: 'Login Page',


          });
          
          return

        }

      }

    } catch(e){

      errors_array.push(`${e.code}: ${e.message}`);
      if(errors_array.length > 0){

        res.render('userLogin', {

          errors: errors_array,
          hasErrors: true,
          title: 'Login Page',

        });

        return;

      }

    }
});

router
  .route('/protected')
  .get(async (req, res) => {
    //code here for GET
    res.render('private', {username: req.session.user.username});

  })

router
  .route('/logout')
  .get(async (req, res) => {
    //code here for GET
    req.session.destroy();
    res.render('logout');
  })

router.route('/forbiddenAccess').get(async(req, res) => {

    res.status(403).render('forbiddenAccess');

  })

  module.exports = router;
