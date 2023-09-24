const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    SubjectID:String,
    SubjectNameTH:String,
    SubjectNameEN:String,
    SectionType:String,
    SectionNumber:String,
    Day:String,
    StartTime:String,
    EndTime:String,
    Lecturer:[String],
    NumberOfStudent:Number,
    Year:String,
    Major:[String],
    Room:String,
    Credit:String
},{timestamps:true})

module.exports =  mongoose.model('subjects',subjectSchema)
