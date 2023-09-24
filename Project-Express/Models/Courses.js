const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    SubjectID:String,
    SubjectNameTH:String,
    SubjectNameEN:String,
    Lecturer:[String],
    CourseYear:String
},{timestamps:true})

module.exports = mongoose.model('courses',courseSchema)
