import { NewsController } from './controller';
var express = require('express')
var router = express.Router()


router.post('/datatable', NewsController.datatables);
router.post('/', NewsController.add);
router.get('/', NewsController.index);
router.get('/:id', NewsController.get);
router.put('/:id', NewsController.edit);
router.delete('/:id', NewsController.delete);
module.exports = router