const express = require('express')

const controllerHero = require('../controllers/hero')

const router = express.Router()

router.post('/create', controllerHero.create)
router.get('/', controllerHero.getTask)
router.get('/:id',controllerHero.getTasksByIds)
router.patch('/update/:id', controllerHero.updateTask)
router.delete('/delete/:id',controllerHero.deleteTask)
module.exports = router