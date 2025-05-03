var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  fetch("https://organic-enigma-6q6qqgwgj7rc4gxp-3000.app.github.dev/students/")
    .then((res) => {
      return res.json()
    })
    .then((students) => { 
      console.log('veio ele', students) 
      res.render('index', { students });
    })

});

module.exports = router;
