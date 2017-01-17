var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.render('index', { title: 'NODE Express' });
});
router.post('/', function(req,res,next){
  var user_id = req.body.id;
  var token = req.body.token;
  //res.send(user_id + " " + token);
  res.send("Data Recivied");
	console.log("POST: " + user_id + " " + token);
});
module.exports = router;
