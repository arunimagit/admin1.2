const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admincrud');


const Schema = mongoose.Schema;

var NewStudentSchema = new Schema({
    name : String,
    email : String,
    highestqualification : String,
    passoutyear : Number,
    skillset : String,
    course : String,
    imageUrl : String
});

var Studentdata = mongoose.model('student', NewStudentSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Studentdata;