import { useState, useEffect } from "react";
import styles from "./Gallery.module.scss"
import galleryImages from "../../utils/loadImages"; 

const chunkArray = (array, chunkSize) => {
    return array.reduce((result, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
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

      useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                showPrevImage();
            } else if (event.key === "ArrowRight") {
                showNextImage();
            } else if (event.key === "Escape") {
                closeViewer();
            }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentImageIndex]);

    return(
        <section  style={{backgroundColor:"#201F1F"}}>
            <div className={`${styles.container} container-md`}>
                <h1>Gallery</h1>
                <div className={`${styles.container1} container-md`}>
                    {rows.map((rowImages, rowIndex) => (
                            <div key={rowIndex} className={styles.gallery}>
                                <div className={styles.grid}>
                                    {[...rowImages, ...rowImages].map((img, i) => (
                                        <img 
                                        key={`${rowIndex}-${i}`} 
                                        src={img} 
                                        alt={`Gallery ${i + 1}`} 
                                        onClick={() => openViewer((rowIndex * rowImages.length + (i % rowImages.length)) %galleryImages.length)} 
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            {/* Image Viewer */}
            {isViewerOpen && (
                <div className={styles.viewer} onClick={handleBackgroundClick}>
                <div 
                  className={styles.viewerContent} 
                  onClick={(e) => e.stopPropagation()}
                  aria-labelledby="image-viewer-title"
                  aria-describedby="image-viewer-description"
                  >
                    <button 
                      className={styles.closeButton} 
                      onClick={closeViewer} 
                      aria-label="Close Viewer"
                      aria-controls="image-viewer"
                    >
                        &times;
                    </button>
                    <button 
                      className={styles.prevButton} 
                      onClick={showPrevImage}
                      aria-label="Pevious image"
                      aria-disabled={currentImageIndex === 0}
                    >
                        &#8249;
                    </button>
                    <img 
                      src={galleryImages[currentImageIndex]} 
                      alt="Enlarged view"
                      id="image-viewer"
                    />
                    <button 
                      className={styles.nextButton} 
                      onClick={showNextImage}
                      aria-label="Next image"
                      aria-disabled={currentImageIndex === galleryImages.length - 1}
                    >
                        &#8250;
                    </button>
                </div>
                </div>
            )}
        </section>
    )
}