var express = require('express')
var router = express.Router()
import { UsersController } from './controller';
import { Authorization } from '../../classes/authorization';
router.post('/', UsersController.add);
router.post('/forgot-password', UsersController.forgot);
router.post('/recover-password', UsersController.newPassword);
router.get('/me', Authorization.Guard, UsersController.me);
// router.get('/', Authorization.Guard, UsersController.index);
// router.post('/datatable', Authorization.Guard, UsersController.datatables);
// router.get('/:id', Authorization.Guard, UsersController.get);
// router.put('/:id', Authorization.Guard, UsersController.edit);
// router.delete('/:id', Authorization.Guard, UsersController.delete);

module.exports = router