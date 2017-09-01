const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

 

    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID("59a909f5f168e8f2dde17715")},
    //     {
    //         $set :{
    //             completed : true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result)=>{
    //   console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users').findOneAndUpdate(
     {_id: new ObjectID("59a90e4df168e8f2dde17851")},
       {
           $set : {name: "Andrew"},
           $inc : { age: 1  }
       },{
           returnOriginal: false
       }
    ).then((result)=>{
        console.log(JSON.stringify(result, undefined, 2));
    });

  // db.close();


});