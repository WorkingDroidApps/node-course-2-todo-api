const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    var todo = new Todo({
        text : req.body.text
    });
    todo.save().then((doc) =>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
        console.log('Unable to save Todo', e);
    });
});

// app.get('/', (req,res)=>{
//     res.send('Hello.....');
// });


app.get('/todos', (req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res)=>{
   var id = req.params.id;
   if(!ObjectID.isValid(id)){
      return  res.status(404).send('Invalid ID');
   }
  Todo.findById(id).then((todo)=>{
        if(!todo){
          return res.status(404).send('No Todo found with that Id');
        }
       res.status(200).send({todo});
  })
      

}, (e)=>{
    res.status(400).send(e);
});

app.delete('/todos/:id', (req,res) =>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
       return  res.status(404).send('Invalid ID');
    }
   Todo.findByIdAndRemove(id).then((todo)=>{
         if(!todo){
           return res.status(404).send('No Todo found with that Id');
         }
        res.status(200).send({todo});
   }).catch((e)=>{
        res.status(400).send('Somethign went wrong ', e);
   })   
       
});

app.patch('/todos/:id', (req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text', 'completed']);
   
    if(!ObjectID.isValid(id)){
       return  res.status(404).send('Invalid ID');
    }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
   
    Todo.findByIdAndUpdate(id,{$set: body}, {new: true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    });
}); 


app.listen(port, ()=>{
    console.log(`Started on Port ${port}`);
});

module.exports = {app};


