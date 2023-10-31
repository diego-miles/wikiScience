// components/LocalContextLinks.tsx
import styles from './LocalContextLinks.module.css';

type Props = {
  links: string[];
};

const LocalContextLinks = ({ links }: Props) => {
  return (
    <div className={styles.localContextLinks}>
      <div className={styles.arrowContainer}>
        {/* Insert logic to create arrows */}
      </div>
      <div className={styles.linkContainer}>
        {links.map((link, index) => (
          <h5 key={index} className={styles.link}>{link}</h5>
        ))}
      </div>
      <div className={styles.arrowContainer}>
        {/* Insert logic to create arrows */}
      </div>
    </div>
  );
};

export default LocalContextLinks;
