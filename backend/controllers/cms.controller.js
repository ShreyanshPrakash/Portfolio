const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

const dbUrl = "mongodb://localhost:27017";

async function getMongoDbClient(){

    try{
        return await mongoClient.connect( dbUrl, { useNewUrlParser: true, useUnifiedTopology: true } );
    }catch( err ){
        return new throwError( err )
    }

}


async function getDataFromCMS( documentID ){

    try{
        let client = await getMongoDbClient();
        if( client ){
            return await client.db('portfolio').collection('cms').find({ id : documentID } ).toArray();
        }
    }catch( err ){
        return new throwError( err )
    }

}

module.exports = {
    getDataFromCMS,
}