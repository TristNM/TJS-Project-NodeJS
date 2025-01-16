'use strict'
const mongoose = require('mongoose')
const CheckConnecttion = () => {
    const CountConnect = mongoose.connections.length
    console.log(`There are ${CountConnect} connection`)
}

module.exports = {CheckConnecttion}