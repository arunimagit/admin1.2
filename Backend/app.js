const express = require('express');
const StudentData = require('./src/model/Studentdata');


const port = process.env.PORT || 3000;
// const User = require('./src/model/user');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

//app.use(express.urlencoded({ extended: true }));

//function verifyToken(req, res, next) {
    //if(!req.headers.authorization) {
      //return res.status(401).send('Unauthorized request')
    //}
    //let token = req.headers.authorization.split(' ')[1]
    //if(token === 'null') {
      //return res.status(401).send('Unauthorized request')    
   // }
    //let payload = jwt.verify(token, 'secretKey')
    //if(!payload) {
     // return res.status(401).send('Unauthorized request')    
    //}
    //req.userId = payload.subject
    //next()
  //}


      



app.get('/students',function(req,res){  
  StudentData.find()
              .then(function(students){
                  res.send(students);
              });
});

app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    StudentData.findOne({"_id":id})
    .then((student)=>{
      res.send(student);
    });
})





app.post('/insert',function(req,res){
   
    console.log(req.body);
   
    var student = {
        name : req.body.student.name,
        email : req.body.student.email,
        highestqualification : req.body.student.highestqualification,
        passoutyear : req.body.student.passoutyear,
        skillset : req.body.student.skillset,
        course : req.body.student.course,
        imageUrl : req.body.student.imageUrl,
   }       
   var student = new StudentData(student);
   student.save();
});




app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
 
      name = req.body.name,
      email = req.body.email,
      highestqualification = req.body.highestqualification,
      passoutyear = req.body.passoutyear,
      skillset = req.body.skillset,
      course = req.body.course,
      imageUrl = req.body.imageUrl
     StudentData.findByIdAndUpdate({"_id":id},
                                  {$set:{"name":name,
                                  "email":email,
                                  "highestqualification":highestqualification,
                                  "passoutyear":passoutyear,
                                  "skillset":skillset,
                                  "course":course,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })

  

    
   
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     StudentData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })

   
     
  app.listen(port, ()=>{
    console.log("Server is ready at "+port);
});

