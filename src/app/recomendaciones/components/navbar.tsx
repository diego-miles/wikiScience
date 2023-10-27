// // index.tsx
// import React from 'react';
// import { Container, Icon, CamposCientificos, ScienceCategory, MainField, SubTopic } from './styles';

// interface Props {
//   scienceFields: Array<{
//     title: string;
//     subFields: Array<{
//       mainField: string;
//       subTopics: string[];
//     }>;
//   }>;
// }

// const HamburgerMenu: React.FC<Props> = ({ scienceFields }) => {
//   return (
//     <Container>
//       <Icon>
//         {/* Add the icon here */}
//       </Icon>
//       <CamposCientificos>
//         {scienceFields.map(category => (
//           <ScienceCategory key={category.title}>
//             <div>{category.title}</div>
//             {category.subFields.map(field => (
//               <MainField key={field.mainField}>
//                 <div>{field.mainField}</div>
//                 {field.subTopics.map(topic => (
//                   <SubTopic key={topic}>{topic}</SubTopic>
//                 ))}
//               </MainField>
//             ))}
//           </ScienceCategory>
//         ))}
//       </CamposCientificos>
//     </Container>
//   );
// };

// export default HamburgerMenu;
