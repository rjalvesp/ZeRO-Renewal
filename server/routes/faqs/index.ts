import { FaqsController } from './controller';
var express = require('express')
var router = express.Router()

router.post('/datatable', FaqsController.datatables);
router.post('/', FaqsController.add);
router.get('/', FaqsController.index);
router.get('/:id', FaqsController.get);
router.put('/:id', FaqsController.edit);
router.delete('/:id', FaqsController.delete);
module.exports = router