const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//SCHEMA CREATED

const oldSchoolSchema = new Schema ({
    name:      {type: String, require: true},
    imgFront:  {type: String, require: true},
    imgBack:   {type: String, require: true},
    team:      {type: String, require: true},
    year:      {type: String, require: true},
    sport:     {type: String, require: true},
    condition: {type: String, require: true},
    quantity:  {type: Number, require: true},
    value:     {type: Number, require: true},
    isRookie:  {type: Boolean, require: true},
}, {timestamps: true})

//CREATE MODEL FROM SCHEMA
const OldSchool = mongoose.model('OldSchool', oldSchoolSchema);

//EXPORT MODEL
module.exports = OldSchool