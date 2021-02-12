const express = require('express')
const router = express.Router()
const axios = require('axios')
const db = require('../models')

//*****WORKING ROUTES************/
//renders single image from search and stores image link and title
router.post('/image', (req,res)=>{
    const {imgLink, imgTitle} = req.body
        let spaceObject = {
            link: imgLink,
            title: imgTitle }
            console.log({spaceObject})
        res.render('spacepages/singleimage', {spaceObject} )
})


module.exports = router