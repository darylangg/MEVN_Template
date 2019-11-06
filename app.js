const express = require('express')
const app = express()
const port = 443
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true },()=>
// 	console.log('Connected to DB!'))

const logger = (req,res,next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
	next();
}
app.use(logger)
app.use(express.static('public'))
app.use(bodyParser.json())

// routes
app.use('/routes', require('./routes/route'))

app.listen(port, () => console.log(`Listening on port ${port}!`))
