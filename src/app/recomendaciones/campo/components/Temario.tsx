// components/Temario.tsx
import { useState } from 'react';
import styles from '../page.module.css';
type Props = {
  coverImage: string;
  temarioImgs: string[];
};

const Temario = ({ coverImage, temarioImgs }: Props) => {
  const [showTemario, setShowTemario] = useState(false);

  return (
    <div className={styles.temarioContainer}>
      <div className={styles.layer1}>
        {showTemario ? (
          <div className={styles.temarioImages}>
            {temarioImgs.map((img, index) => (
              <img key={index} src={img} alt={`temario ${index}`} />
            ))}
          </div>
        ) : (
          <img src={coverImage} alt="cover" />
        )}
      </div>
      <div className={styles.layer2}></div>
      <div className={styles.layer3}></div>
      <button onClick={() => setShowTemario(!showTemario)}>Ver Temario</button>
    </div>
  );
};

export default Temario;
