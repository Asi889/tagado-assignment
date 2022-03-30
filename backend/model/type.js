const mongoose = require('mongoose')
const Schema = mongoose.Schema

const typeSchema = new Schema({
  type: Number,
  terms: [String],
})

const Type = mongoose.model('type', typeSchema)
module.exports = Type


