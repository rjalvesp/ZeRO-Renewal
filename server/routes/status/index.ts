var express = require('express')
var router = express.Router()
import { CharactersController } from './controller';
router.get('/online', CharactersController.online);
router.get('/info', CharactersController.info);
router.get('/timezone', CharactersController.timezone);

module.exports = router