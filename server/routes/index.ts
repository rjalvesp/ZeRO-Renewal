// import { Authorization } from "../classes/utils/auth";

var express = require('express');
var router = express.Router();
router.use('/api/v1/authorization', require('./authorization'));
router.use('/api/v1/users', require('./users'));
router.use('/api/v1/faqs', require('./faqs'));
router.use('/api/v1/faqs-categories', require('./faqs-categories'));
router.use('/api/v1/news', require('./news'));
router.use('/api/v1/status', require('./status'));

module.exports = router;