const subjects = require('../Models/Subjects')
//const roles = require('../Models/Roles')
const courses = require('../Models/Courses')

//subjects
exports.findSubjectOne = async(req,res) => {
   try{
    const id = req.params.id
    const subjectsin = await subjects.findOne({_id:id}).exec();
    //res.send('Hello someone scheduler\n')
    res.send(subjectsin)
   } catch(err)
   {
        console.log(err)
        res.status(500).send('Server ERROR')
   }
}

exports.listSubjects = async(req,res) => {
    try{
        //code
        const subjectsin = await subjects.find({}).exec();
        //res.send('Hello every scheduler \n')
        res.send(subjectsin)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server ERROR')
    }
}

exports.createSubject = async(req,res) => {
    try{
        console.log(req.body)
        const subjectsin = await subjects(req.body).save()

         res.send('Hi time to create')
    } catch(err)
    {
         console.log(err)
         res.status(500).send('Server ERROR')
    }
 }

 exports.updateSubjectOne = async(req,res) => {
    try{
        const id = req.params.id;
        const updated = await subjects.findOneAndUpdate({_id:id},req.body,{new:true}).exec()
        res.send(updated)
         //res.send('Now it\'s form updated')
    } catch(err)
    {
         console.log(err)
         res.status(500).send('Server ERROR')
    }
 }

 exports.removeSubjectOne = async(req,res) => {
    try{
        const id = req.params.id;
        const removed =await subjects.findOneAndDelete({_id:id}).exec()
        res.send(removed)
        //res.send('I want remove that')
    } catch(err)
    {
         console.log(err)
         res.status(500).send('Server ERROR')
    }
 }



 //course