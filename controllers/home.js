const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')

//*****WORKING ROUTES************/
//shows stored images by user and comments

//renders single image from search and stores image link and title
router.post('/', (req,res)=>{
    const {url, title} = req.body
        const spaceObject = {url, title}
        res.render('spacepages/singleimage', {spaceObject} )
})

//takes form from singleImage show page and creates database 
router.post('/image', async(req,res)=>{
    try{
        const {name, age, content, url, title} = req.body
        const [user, created] = await db.user.findOrCreate({where: {name, age}})
        const [image, created1] = await db.image.findOrCreate({where: {url, name: title}})
        const [comment, created2] = await db.comment.findOrCreate({where: {content}})
        res.redirect('/home/images')
    }
    catch(e){
        console.log(`uh oh! you got a ${e.message}`)
    }
})

router.delete('/:id', async(req,res)=>{
    await db.image.destroy({where: {id: req.params.id}})
    console.log(`image destroyed`)
    res.redirect('/home/images')
})

router.get('/images', async(req,res)=>{
    const allImages = await db.image.findAll({})
    console.log(allImages)
    res.render('spacepages/allimage', {allImages})
})

router.get('/:id', async(req,res)=>{
    const id = req.params.id
    const thisImage = await db.image.findOne({where: {id}, include:[db.comment]})
    console.log(thisImage.get().comments[0])
    res.render('spacepages/foundimage', {thisImage})
})


module.exports = router