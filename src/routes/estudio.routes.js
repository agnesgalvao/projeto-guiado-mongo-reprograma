const express = require('express')

const estudio_controller = require('../controllers/estudio.controller')


const router = express.Router() 


router.post('/', estudio_controller.postNewStudio)
router.get('/', estudio_controller.GetAllStudios)
router.patch('/:id', estudio_controller.updateEstudioById)
router.delete('/:id', estudio_controller.deleteStudioById)



module.exports = router