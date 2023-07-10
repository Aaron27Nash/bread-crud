const router  = require("express").Router()
const Bread = require('../models/bread')
//get all bread
router.get('/', (req, res)=> {
    res.render('index', {breads: Bread})
})
//get breadby index
router.get('/:index', (req, res) => {
    const { index } = req.params
    res.render( 'show',{bread: Bread[index]} )
})

module.exports = router