import { CharsController } from './controller';
import { Authorization } from './../../classes/authorization';
var express = require('express')
var router = express.Router()

router.post('/views/classes', CharsController.classes);
router.post('/views/classes/:class', CharsController.class);
module.exports = router