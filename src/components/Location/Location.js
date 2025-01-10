import { Button } from "reactstrap"
import location from "../../assets/images/location.png"
import styles from "./Location.module.scss"

export default function Location(){

    const googleMapsUrl="https://maps.app.goo.gl/dWxroRCr6AF5PoW46"

    return(
        <section>
            <div className="container-lg my-5">
                <h1 className="text-light">Location</h1>
                <div className="row justify-content-around">
                    <div className="col-lg-3">
                        <div className="pb-2">
                            <address className="col">
                                <strong>Be Rectified</strong>
                                <br/>
                                1716 Niles St,
                                <br/>
                                Bakersfield, CA 93305
                            </address>
                            <div className="col">
                                <Button
                                    color="primary"
                                    outline
                                    href={googleMapsUrl}
                                    tag="a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Get Directions
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg ${styles.img} my-3`}>
                        <img src={location} alt="map of location of barbershop" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    )
}