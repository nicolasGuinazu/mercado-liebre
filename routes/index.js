var express = require('express');
var router = express.Router();
var indexController=require('../Controllers/indexController')


router.get('/', indexController.index);

module.exports = router;
