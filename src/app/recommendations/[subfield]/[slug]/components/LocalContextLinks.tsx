// components/LocalContextLinks.tsx
import styles from './localContextLink.module.css';

type LocalContextLink = {
  text: string;
  id: string;
};

type LocalContextLinksProps = {
  links: LocalContextLink[];
};


const LocalContextLinks: React.FC<LocalContextLinksProps> = ({ links }) => (
  <div className={styles.localContextLinksContainer}>
    {links.map((link, index) => (
      <div key={index} className={styles.linkArrowRow}>
        <div className={styles.arrow} />
        <a href={`#${link.id}`} className={styles.link}>
          {link.text}
        </a>
      </div>
    ))}
  </div>
);



export default LocalContextLinks;