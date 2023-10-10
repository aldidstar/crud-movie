var express = require('express')
var router = express.Router()

const api = require('../controllers/api')

// API User

router.get('/Movies', api.getAll)
router.get('/Movies/:id', api.getDetail)
router.post('/Movies', api.create)
router.delete('/Movies/:id', api.delete)
router.patch('/Movies/:id', api.update)

module.exports = router
