"use client"
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { FaListUl } from 'react-icons/fa';
import styles from '../components/ScienceFieldsMenu.module.css';

interface ScienceFieldsMenuProps {
  data: Wiki.ScienceField[];
}

export const ScienceFieldsMenu: FC<ScienceFieldsMenuProps> = ({ data }) => {
  return (
    <div>
      {data.map((field, index) => (
        <Field key={index} field={field} />
      ))}
    </div>
  );
};

interface FieldProps {
  field: Wiki.ScienceField;
}

const Field: FC<FieldProps> = ({ field }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isListOpen, setIsListOpen] = useState(false);  

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount < 1) {
      setIsOpen(!isOpen);
    } else {
      window.location.href = `/articles/${field.title}`;  // Navegar en el segundo clic
    }
  };

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();  // Detener la propagación del evento
    setIsListOpen(!isListOpen);  // Alternar la superposición de lista al hacer clic en el icono
  };


return (
    <div>
      <h2 onClick={handleClick}>
        {field.title}
        <FaListUl onClick={handleIconClick} className={styles.icon} />  {/* Icono con manejador de clic */}
      </h2>
      {isOpen &&
        field.subFields.map((subField, index) => (
          <SubField key={index} subField={subField} />
        ))}
      {isListOpen && (
        <div className={styles.listOverlay}>
          {/* Tu contenido de lista aquí */}
          <button onClick={() => setIsListOpen(false)} className={styles.closeButton}>Cerrar</button>  {/* Botón para cerrar la superposición */}
        </div>
      )}
    </div>
  );
};

interface SubFieldProps {
  subField: Wiki.SubTopic;
}

const SubField: FC<SubFieldProps> = ({ subField }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount < 1) {
      setIsOpen(!isOpen);
    } else {
      window.location.href = `/articles/${subField.mainField}`;  // Navegar en el segundo clic
    }
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <h3 onClick={handleClick}>{subField.mainField}</h3>
      {isOpen &&
        subField.subTopics.map((subTopic, index) => (
          <div key={index} style={{ marginLeft: '20px' }}>
            <Link href={`/articles/${subTopic}`}>
              <p>{subTopic}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};
