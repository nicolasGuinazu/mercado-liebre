var express = require('express');
var router = express.Router();
var indexController=require('../Controllers/indexController')


router.get('/', indexController.index);
router.get('/register', indexController.register);
router.get('/login', indexController.login);
module.exports = router;
