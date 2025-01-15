import { useState } from "react";
import styles from "./Gallery.module.scss"
import galleryImages from "../../utils/loadImages"; 

const chunkArray = (array, chunkSize) => {
    return array.reduce((result, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!result[chunkIndex]) {
            result[chunkIndex] = []; // Start a new chunk
        }
        result[chunkIndex].push(item);
        return result;
    }, []);
};

export default function Pricing(){
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const rows = chunkArray(galleryImages, Math.ceil(galleryImages.length / 3));

    const openViewer = (index) => {
        document.body.classList.add("viewer-open");
        setCurrentImageIndex(index % galleryImages.length);
        setIsViewerOpen(true);
      };
    
    const closeViewer = () => {
        document.body.classList.remove("viewer-open");
        setIsViewerOpen(false);
      };

      const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
          closeViewer();
        }
      };

      const showNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
      };
    
      const showPrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex - 1 + galleryImages.length) % galleryImages.length
        );
      };

    return(
        <section  style={{backgroundColor:"#201F1F"}}>
            <div className={`${styles.container} container-md`}>
                <h1>Gallery</h1>
                <div className={`${styles.container1} container-md`}>
                    {rows.map((rowImages, rowIndex) => (
                            <div key={rowIndex} className={styles.gallery}>
                                <div className={styles.grid}>
                                    {[...rowImages, ...rowImages].map((img, i) => (
                                        <img key={`${rowIndex}-${i}`} src={img} alt={`Gallery ${i + 1}`} 
                                        onClick={() => openViewer((rowIndex * rowImages.length + (i % rowImages.length)) %galleryImages.length)} />
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            {/* Image Viewer */}
            {isViewerOpen && (
                <div className={styles.viewer} onClick={handleBackgroundClick}>
                <div className={styles.viewerContent} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={closeViewer} aria-label="Close Viewer">
                    &times;
                    </button>
                    <button className={styles.prevButton} onClick={showPrevImage}>
                    &#8249;
                    </button>
                    <img src={galleryImages[currentImageIndex]} alt="Enlarged view" />
                    <button className={styles.nextButton} onClick={showNextImage}>
                    &#8250;
                    </button>
                </div>
                </div>
            )}
        </section>
    )
}