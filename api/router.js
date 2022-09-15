const express = require('express')
const Model = require('./model')

const router = express.Router()

router.get('/:id', async(req,res) => {
    try{
        const getRecipe = await Model.getRecipe(req.params.id)
        res.json(getRecipe)
    } catch(err) {
        res.status(500).json({ err: err.message })
    }
})

module.exports = router