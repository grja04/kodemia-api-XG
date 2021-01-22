
const express = require('express')
const koders = require('./../usecases/koders')

const router = express.Router()

router.get('/', async (request, response)  => {
    const allKoders = await koders.getAll()

    response.json({
        success: true,
        data: allKoders
    })
})

router.get('/:id', async (request, response) => {
 const koderById = await koders.getById(request.params.id)

 response.json({
    success:true,
    data: koderById
    })
})

router.post('/', async(request, response) => {
    const { name, age } = request.body
    const koderCreated = await koders.create(name, age)
    
    response.json({
        success: true,
        data: koderCreated
    })
})
router.delete('/:id', async(request, response) => {
    
    const koderDeleted = await koders.findByIdAndDelete(request.params.id)
    
    response.json({
        success: true,
        data: koderDeleted
    })
})

router.patch('/', async(request, response) => {
    //recibe name y age by body
    const { name, age } = request.body
    const koderPatched = await koders.findByIdAndUpdate(request.params.id)
    
    response.json({
        success: true,
        data: koderPatched
    })
})

module.exports = router