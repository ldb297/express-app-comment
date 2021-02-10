//no environment creation as this will not be deployed

//import packages
const express = require('express')
const ejs = require('ejs')
const ejsLayouts = require('express-ejs-layouts')
const axios = require('axios')
const app = express()

//set middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//set routes
app.get('/', (req,res)=>{
    res.render('index')
})

app.use('/home', require('./controllers/home'))

//set port

const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧${PORT}🎧`))