var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cars2', function(req, res) {
  res.render('cars2')
})


module.exports = router;
