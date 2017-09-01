const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find({
    //     _id: new ObjectID("59a7deb2dd5697e57f56c102")})
    //     .toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to retrieve Todos ' + err);
    // });
  //  db.close();

//   db.collection('Todos').count().then((count)=>{
//     console.log(`Todos Count: ${count}`);   
// },(err)=>{
//     console.log('Unable to retrieve Todos ' + err);
// });
  db.collection('Users').find({name: 'Keith'})
        .count().then((count)=>{
        console.log(`Num Users called Keith:${count}`);
       // console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log('Unable to retrieve Todos ' + err);
    });
   db.close();


});