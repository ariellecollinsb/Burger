// Inside the burgers_controller.js file, import the following:

// Express
// burger.js


// Create the router for the app, and export the router at the end of your file.


var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger.js", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    burger_name: req.body.burger_name
  },
   condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("api/burgers/:id", function(req, res){
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result){
    if (result.affectedRows === 0){
      return res.status(404).end();
    }
    else {
      res.status(200).end();
    }
  })
})

module.exports = router;