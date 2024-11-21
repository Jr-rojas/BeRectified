import location from "../../assets/images/location.png"
import styles from "./Location.module.scss"

export default function Location(){

    return(
        <div className="container">
            <h1>Location</h1>
            <div className={`${styles.img} container-md my-3`}>
                <img src={location} alt="map of location of barbershop" className="img-fluid"/>
            </div>
        </div>
    )
}