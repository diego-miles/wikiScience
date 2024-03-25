// // Importa las dependencias necesarias
// import clientPromise from "../../lib/mongodb";

// // Función del handler de la API
// export default async function handler(req, res) {
//   try {
//     // Conexión a la base de datos MongoDB
//     const client = await clientPromise;
//     const db = client.db("tuBaseDeDatos");

//     // Consulta para obtener los datos
//     const posts = await db.collection("tuColeccion").find({}).toArray();

//     // Envía la respuesta en formato JSON
//     res.status(200).json(posts);
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ error: "Error al recuperar los datos" });
//   }
// }
