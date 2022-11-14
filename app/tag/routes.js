const router = require('express').Router()
const categoryController = require('./controller')

router.post('/tags', categoryController.store)
router.get('/tags', categoryController.index)
router.put('/tags/:id', categoryController.update)
router.delete('/tags/:id', categoryController.destroy)

module.exports = router