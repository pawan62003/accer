const mongoose = require('mongoose')

const FlatSchema = mongoose.Schema({
    bhk:{type:Number,required:true},
    location:{type:String,required:true},
    image:{type:String,required:true}
})

const FlatModel = mongoose.model('flat',FlatSchema)

module.exports = {
    FlatModel
}