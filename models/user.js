const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miniproject');

const userSchema = mongoose.Schema({
    username : 'String',
    name : 'String',
    age : 'Number',
    email : 'String',
    phone : 'Number',
    password : 'String',
    posts : [{type : mongoose.Schema.Types.ObjectId, ref : 'post'}]
})

module.exports = mongoose.model('User',userSchema);