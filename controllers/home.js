const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')

//*****WORKING ROUTES************/
router.get('/', async(req,res)=>{
    try {
       let result = await axios.get('https://images-api.nasa.gov/search?q=runaway&media_type=image')
       let spaceObject = await axios.get(result.config.url)
       res.render('spacepages/home', {spaceObject})
    } catch(e) {
       console.log(e.message)
    }
 })

router.get('/image', (req,res)=>{
    console.log(req.body.imgLink)
    console.log(req.body.imgTitle)
        let spaceObject = {
            link: req.body.imgLink,
            title: req.body.imgTitle }
        res.render('spacepages/singleimage', {spaceObject} )
})

///**************INOP ROUTES***********/
// router.get('/', (req,res)=>{ //this route should display all images
//     db.images.findAll()
//     .then(images=>{
//         res.render('spacepages/home', {images: images})
//     })
//     .catch(err =>{
//         console.log(`*************`)
//         console.log(`error: ${err}`)
//         console.log(`*************`)
//     })
// })
/*
router.get('/', async(req,res)=>{
    try {
        const image = await db.images.findAll()
        res.render('spacepages/home', {image})
    } catch(e) {
        console.log(`*************`)
        console.log(`error: ${e.message}`)
        console.log(`*************`)
    }
})

// router.get('/:id', (req,res)=>{ //displays specific image w/ comments
//     db.images.findOne({
//         where: {id: req.params.id},
//         include: [db.comment]
//     }).then(image=>{
//         res.render('spacepages/show', {images: images})
//     }).catch(err=>{
//         console.log(`*************`)
//         console.log(err)
//         console.log(`*************`)
//     })
// })

router.get('/:id', async(req,res)=>{
    try {
        const image = await db.images.findOne({where: {id: req.params.id}, include: [db.comment]})
        res.render('spacepages/show', {images})
    } catch(e) {
        console.log(`*************`)
        console.log(`error: ${e.message}`)
        console.log(`*************`)
    }
})

router.get('/new', (req,res)=>{ //displays form to create new image
    res.render('spacepages/new')
})

// router.post('/', (res,res)=>{ //this route should create new image
//     db.images.create({
//         name: req.body.name,
//         url: req.body.url
//     })
//     .then(images =>{
//         res.redirect('/spacepages')
//     })
//     .catch(err=>{
//         console.log(`*************`)
//         console.log(`error: ${err}`)
//         console.log(`*************`)
//     })
// })

router.post('/', async(req,res)=>{
    try {
        const images = db.images.create({ name: req.body.name, url: req.body.url})
        res.redirect('/spacepages')
    } catch(e) {
        console.log(`*************`)
        console.log(`error: ${e.message}`)
        console.log(`*************`)
    }
})
*/

module.exports = router