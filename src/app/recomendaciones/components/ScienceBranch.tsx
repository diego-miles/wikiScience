"use client";
import React, { useState } from 'react';
import styled from 'styled-components';

const BranchHeader = styled.h2`
  color: #444;
  font-size: 28px;
  margin-top: 40px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItemSpan = styled.span`
  color: #555;
  font-size: 24px;
  cursor: pointer;
  display: block;
  padding: 10px 0;
`;


type SubField = {
  mainField: string;
  subTopics: string[];
};

type Props = {
  title: string;
  subFields: SubField[];
};

const ScienceBranch: React.FC<Props> = ({ title, subFields }) => {
  const [openMainField, setOpenMainField] = useState<string | null>(null);

  // Function to toggle the visibility of subtopics based on mainField
  const toggleSubtopics = (mainField: string) => {
    if (openMainField === mainField) {
      setOpenMainField(null);  // if clicked on an open mainField, close it
    } else {
      setOpenMainField(mainField);  // otherwise, open the clicked mainField
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {subFields.map((field) => (
          <li key={field.mainField}>
            {/* Añadiendo role="button" para accesibilidad */}
            <span onClick={() => toggleSubtopics(field.mainField)} role="button" tabIndex={0}>
              {field.mainField}
            </span>
            {openMainField === field.mainField && (
              <ul>
                {Array.isArray(field.subTopics) && field.subTopics.map((topic, index) => (
                  <li key={`${topic}-${index}`}>{topic}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScienceBranch;
