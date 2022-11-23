const mongoose = require('mongoose')
const { dbHost, dbKey } = require('../app/config')

mongoose.connect(`mongodb://${dbHost}:${dbKey}@containers-us-west-124.railway.app:6714`)
const db = mongoose.connection

module.exports = db