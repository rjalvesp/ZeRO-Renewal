import { FaqsController } from './controller';
import { Authorization } from './../../classes/authorization';
var express = require('express')
var router = express.Router()

router.post('/datatable', Authorization.Guard, Authorization.AdminGuard, FaqsController.datatables);
router.post('/', Authorization.Guard, Authorization.AdminGuard, FaqsController.add);
router.get('/', FaqsController.index);
router.get('/:id', Authorization.Guard, Authorization.AdminGuard, FaqsController.get);
router.put('/:id', Authorization.Guard, Authorization.AdminGuard, FaqsController.edit);
router.delete('/:id', Authorization.Guard, Authorization.AdminGuard, FaqsController.delete);
module.exports = router