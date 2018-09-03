import { ItemsController } from './controller';
var express = require('express')
var router = express.Router()

router.get('/cards/mvps', ItemsController.mvpCards);
module.exports = router