const blogRouter = require('./controllers/blogs')
const express = require('express')
const cors = require('cors')
const config = require('./utils/config')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI)

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/blogs',blogRouter)

module.exports = app