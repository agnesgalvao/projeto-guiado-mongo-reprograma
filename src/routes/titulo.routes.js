const express = require('express')


const router = express.Router() 
const titulo_controller = require('../controllers/titulo.controller')


router.post('/', titulo_controller.postNewTitle )
router.get('/', titulo_controller.GetAllTitles )
router.get('/ghibli', titulo_controller.GetAllGhibliTitles)
router.get('/pixar', titulo_controller.GetAllPixarTitles)
router.get('/marvel', titulo_controller.GetAllMarvelTitles)
router.patch('/:id', titulo_controller.updateTitleById)
router.delete('/:id', titulo_controller.deleteTitleById)







module.exports = router