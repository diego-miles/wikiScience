// LinkContainer.tsx
import React from 'react';
// import { LocalContextLink } from './types';
import LinkItem from './LocalContextLink';
import styles from './localContextLinkTop.module.css';


// types.ts
export type LocalContextLink = {
  text: string;
  id: string;
};


type LinkContainerProps = {
  links: LocalContextLink[];
//   isVisible: boolean;
  dropdownActive: boolean;
  toggleDropdown: () => void;
};

const LinkContainer: React.FC<LinkContainerProps> = ({ links, dropdownActive, toggleDropdown }) => (
  <div
    className={`${styles.localContextLinksContainer} ${dropdownActive ? styles.dropdown : ''}`}
    style={{ display: dropdownActive  ? 'flex' : 'none' }}
  >
    {links.map((link, index) => (
      <LinkItem key={index} link={link} onClick={dropdownActive ? () => {} : toggleDropdown} />
    ))}
    <a className={styles.watchEverything} onClick={toggleDropdown}>
      {dropdownActive ? 'Close' : 'See All'}
    </a>
  </div>
);

export default LinkContainer;
