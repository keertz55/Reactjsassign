import { MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb://keerthikeyan55:Keertz55@ac-fvxhrtu-shard-00-00.mshcepa.mongodb.net:27017,ac-fvxhrtu-shard-00-01.mshcepa.mongodb.net:27017,ac-fvxhrtu-shard-00-02.mshcepa.mongodb.net:27017/?ssl=true&replicaSet=atlas-jjn4nk-shard-0&authSource=admin&retryWrites=true&w=majority";
const MONGODB_DB = "Reactjsassign";

if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB);

    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}
