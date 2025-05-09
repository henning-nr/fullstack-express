var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  url = process.env.URL_API 

  // comunicando com o backend
  fetch(url+"students/")
    .then((res) => {
      return res.json()
    })
    .then((students) => { 
      let teste = []
      console.log('veio ele', students) 
      res.render('layout', { page: 'pages/student/student-page', students});
    })
});

module.exports = router;
