import { Button } from "reactstrap"
import { motion } from "motion/react"
import location from "../../assets/images/location2.png"
import styles from "./Location.module.scss"

export default function Location(){

    const googleMapsUrl="https://maps.app.goo.gl/TYQfpwTiMj3xsTa76"

    return(
        <section>
            <div className="container-lg my-5">
                <motion.h1 
                    className="text-light"
                    initial={{opacity:0, x:-50}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{amount:0.2}}
                    transition={{duration:0.8, ease:"easeOut"}}
                >Location</motion.h1>
                <div className="row justify-content-around">
                    <motion.div className="col-lg-3"
                    initial={{opacity:0, x:-50}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{amount:0.2}}
                    transition={{duration:0.8, ease:"easeOut"}}>
                        <div className="pb-2">
                            <address className="col">
                                <strong>Be Rectified</strong>
                                <br/>
                                1910 19th St Suite A,
                                <br/>
                                Bakersfield, CA 93301
                            </address>
                            <div className="col">
                                <Button
                                    color="primary"
                                    outline
                                    href={googleMapsUrl}
                                    tag="a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Get directions to Be Rectified Barber Shop on Google Maps"
                                >
                                    Get Directions
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={`col-lg ${styles.img} my-3`}
                    initial={{opacity:0, x:50}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{amount:0.2}}
                    transition={{duration:0.8, ease:"easeOut"}}>
                        <img src={location} alt="map of location of barbershop" className="img-fluid"/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}