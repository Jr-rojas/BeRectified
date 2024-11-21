import styles from "./Gallery.module.scss"
import JoseCutting from "../../assets/images/JoseCuttingHair.jpg"
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

    const rows = chunkArray(galleryImages, Math.ceil(galleryImages.length / 3));

    return(
        <section className={`${styles.container}`} style={{backgroundColor:"#201F1F"}}>
            <h1>Gallery</h1>
            <div className={`${styles.container1} container-md`}>
                {rows.map((rowImages, rowIndex) => (
                        <div key={rowIndex} className={styles.gallery}>
                            <div className={styles.grid}>
                                {rowImages.concat(rowImages).map((img, i) => (
                                    <img key={`${rowIndex}-${i}`} src={img} alt={`Gallery Image ${i + 1}`} />
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}