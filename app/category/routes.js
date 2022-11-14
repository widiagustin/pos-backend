const router = require('express').Router()
const categoryController = require('./controller')

router.post('/categories', categoryController.store)
router.get('/categories', categoryController.index)
router.put('/categories/:id', categoryController.update)
router.delete('/categories/:id', categoryController.destroy)

module.exports = router