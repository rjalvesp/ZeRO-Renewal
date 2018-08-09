// import { Authorization } from "../classes/utils/auth";

var express = require('express');
var router = express.Router();
/* GET home page. */
// router.use('/api/v1/*', Authorization.Guard);
router.use('/api/v1/authorization', require('./authorization'));
// router.use('/api/v1/users', require('./users'));
// router.use('/api/v1/teams', Authorization.Guard, require('./teams'));
// router.use('/api/v1/matches', Authorization.Guard, require('./matches'));
// router.use('/api/v1/predictions', Authorization.Guard, require('./predictions'));
// router.use('/api/v1/my-predictions', require('./my-predictions'));
router.use('/api/v1/status', require('./status'));

module.exports = router;