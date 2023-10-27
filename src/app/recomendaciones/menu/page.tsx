"use client"
import {
  MenuWrapper,
  Header,
  BranchContainer,
  TitleBranch,
  GridLayout,
  NavList,
  NavListItem,
  SubTopic,
  NavContainer
} from './styles'; 
import NavBarContainer from "@/NavBarContainer";



const page = () => {
  let data = [
  {
    title: 'Ciencias Naturales',
    subFields: [
      {
        mainField: 'Biología',
        subTopics: [
          'Genética',
          'Ecología',
          'Bioquímica',
          'Biología Evolutiva',
          'Botánica',
          'Zoología'
        ]
      },
      {
        mainField: 'Química',
        subTopics: [
          'Química Orgánica',
          'Química Inorgánica',
          'Química Analítica',
          'Química Física',
          'Electroquímica'
        ]
      },
      {
        mainField: 'Física',
        subTopics: [
          'Mecánica Clásica',
          'Electromagnetismo',
          'Termodinámica',
          'Física Cuántica',
          'Astrofísica'
        ]
      }
    ]
  },
  {
    title: 'Ciencias Formales',
    subFields: [
      {
        mainField: 'Matemáticas',
        subTopics: [
          'Álgebra',
          'Cálculo Diferencial e Integral',
          'Geometría y Topología',
          'Teoría de Números',
          'Estadística y Probabilidad',
          'Matemáticas Discretas',
          'Matemáticas Aplicadas'
        ]
      },
      {
        mainField: 'Lógica',
        subTopics: [
          'Lógica Proposicional',
          'Lógica de Primer Orden',
          'Lógica Modal',
          'Lógica Difusa',
          'Lógica Computacional'
        ]
      },
      {
        mainField: 'Teoría de la Computación',
        subTopics: [
          'Autómatas y Lenguajes Formales',
          'Complejidad Computacional',
          'Algoritmos y Estructuras de Datos',
          'Computación Cuántica',
          'Teoría de la Información'
        ]
      },
      {
        mainField: 'Lingüística Formal',
        subTopics: [
          'Gramáticas Generativas',
          'Semántica Formal',
          'Pragmática Formal',
          'Fonología Computacional'
        ]
      }
    ]
  },
  {
    title: 'Ciencias Sociales',
    subFields: [
      {
        mainField: 'Economía',
        subTopics: [
          'Microeconomía',
          'Macroeconomía',
          'Economía del Desarrollo',
          'Economía Conductual'
        ]
      },
      {
        mainField: 'Psicología de la Evolución',
        subTopics: [
          'Selección Natural y Comportamiento',
          'Evolución del Aprendizaje',
          'Evolución de la Cooperación',
          'Evolución de la Cognición'
        ]
      }
    ]
  },
  {
    title: 'Tecnología e Ingeniería',
    subFields: [
      {
        mainField: 'Tecnologías de Información y Comunicación (TICs)',
        subTopics: [
          'Desarrollo de Software',
          'Ciberseguridad',
          'Inteligencia Artificial',
          'Redes y Comunicaciones'
        ]
      },
      {
        mainField: 'Ingeniería Electrónica',
        subTopics: [
          'Ingeniería de Circuitos',
          'Robótica',
          'Electrónica de Potencia'
        ]
      },
      {
        mainField: 'Ingeniería de Energías',
        subTopics: [
          'Energía Solar',
          'Energía Eólica',
          'Energía Nuclear'
        ]
      },
      {
        mainField: 'Ingeniería Mecánica',
        subTopics: [
          'Dinámica de Fluidos',
          'Mecánica de Materiales',
          'Termodinámica Aplicada'
        ]
      },
      {
        mainField: 'Ingeniería Civil',
        subTopics: [
          'Ingeniería Estructural',
          'Ingeniería de Transporte',
          'Ingeniería Hidráulica'
        ]
      },
      {
        mainField: 'Ingeniería Química',
        subTopics: [
          'Procesos Químicos',
          'Ingeniería de Reactores',
          'Termodinámica Química'
        ]
      },
      {
        mainField: 'Ingeniería Ambiental',
        subTopics: [
          'Gestión de Residuos',
          'Tecnologías Limpias',
          'Conservación de Recursos'
        ]
      },
      {
        mainField: 'Automatización en Ingeniería',
        subTopics: [
          'Automatización de Procesos Industriales',
          'Control de Sistemas',
          'Robótica Industrial',
          'Internet de las Cosas (IoT) en Ingeniería'
        ]
      }
    ]
  },

]
  return (
    <div>
      <NavBarContainer title="Home"/>
      <MenuWrapper>
      <Header>
      </Header>
        <NavContainer>
          {data.map((field, idx) => (
            <BranchContainer key={idx}>
              <TitleBranch>
                <NavListItem>{field.title.toUpperCase()}</NavListItem>
              </TitleBranch>
              <GridLayout>
                {field.subFields.map((subField, sIdx) => (
                  <NavList key={sIdx}>
                    
                    <NavListItem>{subField.mainField}</NavListItem>
                    {subField.subTopics.map((topic, tIdx) => (
                      <SubTopic key={tIdx}>{topic}</SubTopic>
                    ))}
                  </NavList>
                ))}
              </GridLayout>
            </BranchContainer>
          ))}
        </NavContainer>
    </MenuWrapper>
    </div>
  )
}

export default page


