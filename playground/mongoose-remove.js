const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var{Todo} = require('./../server/models/todo');
var{User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

Todo.findByIdAndRemove('59ad490e27cb8b7ac70b27ff').then((doc)=>{
    console.log(doc);
});

