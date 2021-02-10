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
app.get('/', async(req,res)=>{
   try {
      let result = await axios.get('https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image')
      let spaceObject = await axios.get(result.config.url)
      res.render('spacepages/index', {spaceObject})
   } catch(e) {
      console.log(e.message)
   }
})

app.use('/home', require('./controllers/home'))

//set port

const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧${PORT}🎧`))