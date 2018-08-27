import { Authorization } from './../../classes/authorization';
import { FaqsCategoriesController } from "./controller";

var express = require('express')
var router = express.Router()

router.post('/datatable', Authorization.Guard, Authorization.AdminGuard, FaqsCategoriesController.datatables);
router.post('/', Authorization.Guard, Authorization.AdminGuard, FaqsCategoriesController.add);
router.get('/', FaqsCategoriesController.index);
router.get('/:id', Authorization.Guard, Authorization.AdminGuard, FaqsCategoriesController.get);
router.put('/:id', Authorization.Guard, Authorization.AdminGuard, FaqsCategoriesController.edit);
router.delete('/:id', Authorization.Guard, Authorization.AdminGuard, FaqsCategoriesController.delete);

module.exports = router