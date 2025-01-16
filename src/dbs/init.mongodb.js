'use strict'

const mongoose = require('mongoose')
const {CheckConnecttion} = require('../helpers/check')
 
const connect = 'mongodb://localhost:27017/test'
mongoose.connect(connect).then(() => {
    console.log('Connected to MongoDB', CheckConnecttion())
}).catch((err) => {
    console.log(err)
})

module.exports = mongoose
