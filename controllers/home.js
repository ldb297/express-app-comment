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
        const [image, created1] = await db.images.findOrCreate({where: {url, name: title}})
        const [comment, created2] = await db.comment.findOrCreate({where: {content}})
        //so what do i do if there's more than one item being created here?
    }
    catch(e){
        console.log(`uh oh! you got a ${e.message}`)
    }
})

module.exports = router