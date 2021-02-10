const express = require('express')
const router = express.Router()
const db = require('../models')

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

module.exports = router