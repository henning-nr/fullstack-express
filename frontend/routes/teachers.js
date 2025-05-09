var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  url = process.env.URL_API 

  // comunicando com o backend
  fetch(url+"teachers/")
    .then((res) => {
      return res.json()
    })
    .then((teachers) => { 
      console.log('veio ele', teachers) 
      res.render('layout', { page: 'pages/teacher/teacher-page', teachers});
    })
});

module.exports = router;
