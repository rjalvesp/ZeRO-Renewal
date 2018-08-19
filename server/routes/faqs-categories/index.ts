import { FaqsCategoriesController } from "./controller";

var express = require('express')
var router = express.Router()

router.post('/datatable', FaqsCategoriesController.datatables);
router.post('/', FaqsCategoriesController.add);
router.get('/', FaqsCategoriesController.index);
router.get('/:id', FaqsCategoriesController.get);
router.put('/:id', FaqsCategoriesController.edit);
router.delete('/:id', FaqsCategoriesController.delete);

module.exports = router