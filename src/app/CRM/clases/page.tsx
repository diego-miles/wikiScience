
// import React from 'react'
// // import { input } from "./styles";
// import prisma from '../../../lib/db/prisma';

// async function addCourse (formData: FormData){
//   "use server";

//   const id  = formData.get("id")?.toString();
//   const title = formData.get("title")?.toString();
//   const subFieldsString = formData.get("subFields")?.toString();
//   const subFields = subFieldsString ? JSON.parse(subFieldsString) : [];

//   if(!id || !title || subFields) {
//     throw new Error("Missing Required fields");
//   }

//   await prisma.scienceFields.create({
//     data: {id, title, subFields}
//   })
// }


// export default function addCoursePage(): React.JSX.Element {
//   return (
//     <div>
//       <h1>Crear curso</h1>
//       <form action={addCourse}>
//         <input 
//           required 
//           name="id"
//           type='text' 
//           placeholder='fields' 
//         />
//         <input 
//           required
//           name="title"
//           type='text' 
//           placeholder='Descripción del curso' 
//         />
//         <input 
//           required 
//           name="subFields"
//           type='text' 
//           placeholder='Añadir video' 
//         />
//         <input 
//           type='text' 
//           placeholder='Imagen del curso' 
//         />
//         <button type="submit">Agregar Curso</button>
//       </form>
//     </div>
//   )
// }


import React from 'react'

export default function page() {
  return (
    <div>
      
    </div>
  )
}
