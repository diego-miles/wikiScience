// components/LocalContextLinks.tsx
import styles from '../page.module.css';

type LocalContextLinksProps = {
  links: string[];
};

const LocalContextLinks: React.FC<LocalContextLinksProps> = ({ links }) => (
  <div className={styles.localContextLinksContainer}>
    <div className={styles.localContextLinkSide}>
      {/* Flechas generadas dinámicamente */}
    </div>
    <div className={styles.localContextLinkCenter}>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`} className={styles.localContextLinkItem}>
          {link}
        </a>
      ))}
    </div>
    <div className={styles.localContextLinkSide}>
      {/* Espacio en blanco o elementos adicionales */}
    </div>
  </div>
);

export default LocalContextLinks;