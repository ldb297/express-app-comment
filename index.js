//no environment creation as this will not be deployed

//import packages
const express = require('express')
const ejs = require('ejs')
const ejsLayouts = require('express-ejs-layouts')
const axios = require('axios')
const app = express()
const methodOverride = require('method-override')

//set middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

//set routes
app.get('/', (req,res)=>{
   res.render('index')
})

app.post('/', async(req,res)=>{
   try {
      let search = req.body.name
      let result = await axios.get(`https://images-api.nasa.gov/search?q=${search}&media_type=image`)
      let spaceObject = await axios.get(result.config.url)
      console.log(spaceObject)
      res.render('spacepages/home', {spaceObject})
   } catch(e) {
      console.log(e.message)
   }
})

app.use('/home', require('./controllers/home'))

//set port

const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧${PORT}🎧`))