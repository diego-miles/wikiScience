// ImageNavigator.server.js
import Image from 'next/image';
import styles from './Syllabus.module.css';

// This function should be implemented to check the existence of image URLs
const validateImageURLs = async (baseURL, count) => {
  // Implement your logic to validate image URLs
  // Return an array of URLs that are valid
};

const ImageNavigator = ({ currentImageIndex, navigateImage, temarioImgs }) => (
  <>
    <Image
      src={temarioImgs[currentImageIndex]}
      alt={`temario ${currentImageIndex}`}
      fill
      style={{ objectFit: 'contain' }}
      priority={false}
      quality={100}
    />
    {temarioImgs.length > 1 && (
      <div className={styles.navigationContainer}>
        <button onClick={() => navigateImage(-1)} className={styles.navigateButtonLeft}>{"<"}</button>
        <span className={styles.pageIndicator}>{currentImageIndex + 1}/{temarioImgs.length}</span>
        <button onClick={() => navigateImage(1)} className={styles.navigateButtonRight}>{">"}</button>
      </div>
    )}
  </>
);

export default ImageNavigator;
