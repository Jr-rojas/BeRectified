import location from "../../assets/images/location.png"
import styles from "./Location.module.scss"

export default function Location(){

    return(
        <section>
            <div className="container-lg my-4">
                <h1 className="text-light">Location</h1>
                <div className={`${styles.img} my-3`}>
                    <img src={location} alt="map of location of barbershop" className="img-fluid"/>
                </div>
            </div>
        </section>
    )
}