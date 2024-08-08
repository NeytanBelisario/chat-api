const {MongoClient, ObjectId} = require('mongodb');

let singleton;

async function connect(){
    if (singleton) return singleton;

    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = client.db(process.env.DB_DATABASE);
    return singleton
}

let findAll = async (collection)=>{
    const db = await connect();
    return await db.collection(collection).find().toArray();
}

async function insertOne(collection, objeto){
    const db = await connect();
    return db.collection(collection).insertOne(objeto);
}

module.exports = {findAll, insertOne}