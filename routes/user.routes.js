var express=require('express');
var controller=require('../controller/users.controller');
var router=express.Router();
var validate=require('../validate/user.validate');

router.get('/',controller.index);

router.get('/search',controller.search);

router.get('/create',controller.create);

router.get('/:id',controller.get);

router.post('/create',validate.postCreate,controller.postCreate);

module.exports=router;