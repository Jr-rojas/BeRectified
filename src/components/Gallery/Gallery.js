import styles from "./Gallery.module.scss"
import JoseCutting from "../../assets/images/JoseCuttingHair.jpg"

export default function Pricing(){
    return(
        <section className={`${styles.container}`} style={{backgroundColor:"#201F1F"}}>
            <h1>Gallery</h1>
            <div className={styles.container1}>
                <div className={`${styles.gallery} container-md`}>
                    <div className={styles.grid}>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                        <img src={JoseCutting} alt="Jose cutting hair"/>
                    </div>
                </div>
            </div>
        </section>
    )
}