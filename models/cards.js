const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//SCHEMA CREATED

const cardSchema = new Schema ({
    name:      {type: String, require: true},
    team:      {type: String, require: true},
    year:      {type: String, require: true},
    sport:     {type: String, require: true},
    condition: {type: String, require: true},
    quantity:  {type: String, require: true},
    value:     {type: Number, require: true},
    isRookie:  {type: Boolean, require: true},
}, {timestamps: true})

//CREATE MODEL FROM SCHEMA
const Card = mongoose.model('Card', cardSchema);

//EXPORT CARD   MODEL
module.exports = Card