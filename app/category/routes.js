const router = require('express').Router()
const categoryController = require('./controller')

router.post('/categories', categoryController.store)
router.get('/categories', categoryController.index)
router.put('/categories/:id', categoryController.update)


module.exports = router