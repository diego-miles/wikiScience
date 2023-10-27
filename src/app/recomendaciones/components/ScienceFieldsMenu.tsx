"use client"
import React, { FC, useState } from 'react';

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
  return (
    <div>
      <h2 onClick={() => setIsOpen(!isOpen)}>{field.title}</h2>
      {isOpen &&
        field.subFields.map((subField, index) => (
          <SubField key={index} subField={subField} />
        ))}
    </div>
  );
};

interface SubFieldProps {
  subField: Wiki.SubTopic;
}

const SubField: FC<SubFieldProps> = ({ subField }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ marginLeft: '20px' }}>
      <h3 onClick={() => setIsOpen(!isOpen)}>{subField.mainField}</h3>
      {isOpen &&
        subField.subTopics.map((subTopic, index) => (
          <div key={index} style={{ marginLeft: '20px' }}>
            <p>{subTopic}</p>
          </div>
        ))}
    </div>
  );
};