require('dotenv').config();
// const { MongoClient } = require('mongodb');

const MONGO_URL = `mongodb+srv://${process.env.MONGO_USER}:P%40ndo__1234@sandbox.hliua.mongodb.net/sample_training`

console.log(MONGO_URL);
console.log('aaaaa');

// let  dbConnection;


// const connectToDB = (cb) =>{
//     MongoClient.connect(MONGO_URL)
//     .then((client)=>{
//         dbConnection = client.db()
//         return cb()
//     })
//     .catch(err =>{
//         console.log(err);
//         return cb(err)
//     })

// }

// const getDB = () =>{
// return dbConnection
// }


// async function connectToDB(){

//     const client = new MongoClient(process.env.MONGO_URL);
//     await client.connect();


//     try{
//         await client.connect();
//     }
//     catch(e){
//         console.log(e);
//     }
//     finally{
//         await client.close();
//     }
// }
// connectToDB()

// let dbConnection

// const connectToDB = (cb) => {
//     MongoClient.connect('process.env.MONGO_URL', {
//         useNewUrlParser: true, useUnifiedTopology: true,
//     })
//     .then((result) => {
//         console.log('connect to db');
//         dbConnection = result.db()
//         return cd()
//     })
//     .catch((err)=> {
//         console.log(err);
//         return cd(err);
//     })


// }

// const getDB = () => {
//  return dbConnection
// }

// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// module.eport = {
//     connectToDB,
//     getDB
// }


const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(client => {
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}