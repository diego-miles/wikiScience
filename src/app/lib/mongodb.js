// // lib/mongodb.js
// import mongoose from "mongoose"

// const MONGODB_URI = process.env.DATABASE_URI;

// const connect = async () => {
//     const connectionState = mongoose.connection.readyState;
//     if(connectionState === 1) {
//         console.log("already connected")
//         return;
//     }

//     if(connectionState === 2) {
//         console.log("Connecting...")
//         return;
//     }
//     try {
//         mongoose.connect(MONGODB_URI, {
//             dbName: "wikiScience",
//             bufferCommands: false
//         })
//         console.log("connected")
//     } catch (error) {
//         console.log("Error connecting to databse", error);
//         throw new Error("Error in connecting Database")
//     }
// };

// export default connect;






// const MONGODB_DB = process.env.MONGODB_DB;

// if (!MONGODB_URI) {
//   throw new Error('Por favor define la MONGODB_URI en tus variables de entorno');
// }

// if (!MONGODB_DB) {
//   throw new Error('Por favor define la MONGODB_DB en tus variables de entorno');
// }

// let cachedClient = null;
// let cachedDb = null;

// export async function connectToDatabase() {
//   if (cachedClient && cachedDb) {
//     // Si ya está en caché, reutiliza la conexión existente
//     return { client: cachedClient, db: cachedDb };
//   }

//   // Establece una nueva conexión
//   const client = await MongoClient.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const db = client.db(MONGODB_DB);

//   // Caché de la conexión para reutilizarla
//   cachedClient = client;
//   cachedDb = db;

//   return { client, db };
// }
