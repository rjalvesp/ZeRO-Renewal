import { GuildsController } from './controller';
import { Authorization } from './../../classes/authorization';
var express = require('express')
var router = express.Router()

router.post('/datatable', GuildsController.datatables);
// router.post('/', Authorization.Guard, Authorization.AdminGuard, FaqsController.add);
// router.get('/', GuildsController.index);
router.get('/:id', GuildsController.get);
// router.put('/:id', Authorization.Guard, Authorization.AdminGuard, FaqsController.edit);
// router.delete('/:id', Authorization.Guard, Authorization.AdminGuard, FaqsController.delete);
module.exports = router