const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var{Todo} = require('./../server/models/todo');
var{User} = require('./../server/models/user');

var id ='59a95bd7599c293fcc6f1f6f';

// if(!ObjectID.isValid(id)){
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e)=> console.log(e));

User.findById(id).then((user)=>{
    if(!user){
        return console.log('User not found for this ID');        
    }
    console.log('User by ID', user);
}).catch((e)=> console.log(e));