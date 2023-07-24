const router = require ( 'express').Router()
const Baker = require('../models/bakers')
const bakerSeedData = require('../models/bakerSeedData')

router.get('/data/seed' , async (req, res) => {
    await Baker.deleteMany()
    await Baker.insertMany(bakerSeedData)
    res.redirect('/breads')
})


router .get('/', async (req, res) => {
    const bakers = await Baker.find().populate('breads')
    res.json(bakers)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const baker = await Baker.findById(id).populate('breads')
    res.render('bakerShow', { baker })
})

router.delete('/:id', async (req, res)  => {
const {id} = req.params
await Baker.findByIdAndDelete(id)
res.redirect('/breads')
})
module.exports = router
