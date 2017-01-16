var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NODE Express' });
});
router.post('/', function(req,res){
	console.log("This is POST");
});
module.exports = router;
