const mongoose = require('mongoose');

// [DEFINE SCHEMES]
const schoolSchema = new mongoose.Schema({
    name: String,
    campus: String
});

// [CREATE NEW SCHOOL DOCUMENT]
schoolSchema.statics.create = function(payload){
    // this === Model
    const school = new this(payload);
    // [RETURN PROMISE]
    return school.save();
}

// [FIND ALL]
schoolSchema.statics.findAll = function(){
    // [RETURN PROMISE]
    return this.find({});
}

// [FIND ONE BY NAME]
schoolSchema.statics.findOneByName = function(name){
    return this.findOne({name});
}

module.exports = mongoose.model('school', schoolSchema);