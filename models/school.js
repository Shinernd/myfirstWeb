const mongoose = require('mongoose');

// [DEFINE SCHEMES]
const schoolSchema = new mongoose.Schema({
    name: String,
    campus: String
});

//const school = mongoose.model('school', schoolSchema);

// [FIND ALL]
schoolSchema.statics.findAll = function(){
    // [RETURN PROMISE]
    return this.find({});
}
/*
// [FIND ONE BY NAME]
schoolSchema.statics.findOneByName = function(name){
    return this.findOne({name});
}
*/
schoolSchema.statics.findByName = function(name){
    return this.find({name});
}
const school = mongoose.model('school', schoolSchema);

// [CREATE NEW SCHOOL DOCUMENT]
schoolSchema.statics.create = (payload)=>{
    // this === Model
    const newschool = new school(payload);
    // [RETURN PROMISE]
    return newschool.save();
}

module.exports = school;
