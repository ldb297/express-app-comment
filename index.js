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
app.get('/', function(req, res) {
    const spaceAPI = 'https://images-api.nasa.gov/'
    axios.get(spaceAPI).then(result=>{
      const image = result.stuff.otherstuff
      res.render('index', { image: image })
   })
})

app.use('/home', require('./controllers/home'))

//set port

const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧${PORT}🎧`))