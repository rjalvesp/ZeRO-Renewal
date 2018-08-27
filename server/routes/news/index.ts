import { Authorization } from './../../classes/authorization';
import { NewsController } from './controller';
var express = require('express')
var router = express.Router()


router.post('/datatable', Authorization.Guard, Authorization.AdminGuard, NewsController.datatables);
router.post('/', Authorization.Guard, Authorization.AdminGuard, NewsController.add);
router.get('/', NewsController.index);
router.get('/:id', Authorization.Guard, Authorization.AdminGuard, NewsController.get);
router.put('/:id', Authorization.Guard, Authorization.AdminGuard, NewsController.edit);
router.delete('/:id', Authorization.Guard, Authorization.AdminGuard, NewsController.delete);
module.exports = router