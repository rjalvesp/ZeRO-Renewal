var express = require('express')
var router = express.Router()
import { AuthorizationController } from './controller';
router.post('/login', AuthorizationController.login);
router.post('/logout', AuthorizationController.logout);
router.post('/refresh', AuthorizationController.refresh);

module.exports = router;