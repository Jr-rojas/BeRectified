import { Button } from "reactstrap"
import { motion } from "motion/react"
//import barberShop from "../../assets/images/inside_barber_shop.jpg"
import styles from "./Hero.module.scss"

export default function Hero(){
    const booksyURL = "https://booksy.com/en-us/dl/show-business/488886?utm_medium=c2c_referral"

    return(
        <section id="heroSection" className={`${styles.heroSection} bg-secondary`}>
            <div className="container-fluid h-100 p-1 m-1">
                <div className="container-lg row justify-content-around align-items-center h-100 mx-auto">
                    <motion.div 
                        className="col-md-4"
                        initial={{opacity: 0, x:-50}}
                        whileInView={{opacity: 1 , x:0}}
                        viewport={{amount: 0.2}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >
                        <div className="my-3">
                            <h1 className="display-1 lh-1 mb-0 pb-0 text-primary">Be Rectified</h1>
                            <h1 className="display-1 lh-1 mb-0 pb-0">Barber Shop</h1>
                            <h2>by Jose Solis</h2>
                        </div>
                        <div className="my-3">
                            <Button
                                block
                                color="primary"
                                size="lg"
                                href={booksyURL}
                                tag="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Book an appointment with Be Rectified Barber Shop on Booksy"
                                style={{color:"#fff"}}
                            >
                                Book Now
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div className={`${styles.heroImage} col-md-7 pt-3 `} 
                        loading="eager"
                        initial={{opacity: 0, x:50}}
                        whileInView={{opacity:1, x:0}}
                        viewport={{amount: 0.2}}
                        transition={{duration: .8 ,ease:"easeOut"}}
                    >
                    </motion.div>
                </div>
            </div>
        </section>
    )
}