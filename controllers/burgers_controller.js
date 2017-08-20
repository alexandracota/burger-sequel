
//Node dependencies
var express = require('express');
var router = express.Router();
var db = require("../models");

//Routes
//-----------------------------------------------------------

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/burgers');
});

// Index Page (render all burgers to browser)
router.get('/burgers', function (req, res) {

  //Sequelize query to get all burgers from database
  db.Burger.findAll({}).then(function(data) {
    console.log(data);
    var hbsObject = { burger: data };
    return res.render('index', hbsObject);
  })
});

// Create a New Burger
router.post('/burger/create', function (req, res) {
  db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(data) {
      console.log(data);
    res.redirect("/");
  });
});

// Devour a Burger
router.put('/burger/update', function (req, res) {
  db.Burger.update(
    {
      devoured: true
    }, 
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function(data){
    console.log(data);
      res.redirect("/");
    });
  });


// Export routes for server.js to use.
module.exports = router;