// LinkItem.tsx
import React from 'react';
// import { LocalContextLink } from './types';
import styles from './localContextLinkTop.module.css';

// types.ts
export type LocalContextLink = {
  text: string;
  id: string;
};


type LinkItemProps = {
  link: LocalContextLink;
  onClick: (id: string) => void;
};

const LinkItem: React.FC<LinkItemProps> = ({ link, onClick }) => (
  <a
    href={`#${link.id}`}
    className={`${styles.linkText} ${styles.link}`}
    onClick={(e) => {
      e.preventDefault();
      onClick(link.id);
    }}
  >
    {link.text}
  </a>
);

export default LinkItem;
