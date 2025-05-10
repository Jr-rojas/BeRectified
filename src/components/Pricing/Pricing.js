import {useState, useEffect} from "react"
import { motion } from "motion/react"
import ServiceList from "./ServiceList"
import JoseCuttingHair from "../../assets/images/JoseCuttingHair.jpg"

export default function Pricing(){

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 992);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
            <section className="container-fluid" >
                {isLargeScreen ? (
                <div className="container row mx-auto my-3 p-3">
                    <motion.div className="col-5 my-2 pe-0" 
                    style={{height:"550px"}}
                    initial={{opacity:0, x:-50}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{amount:0.2}}
                    transition={{duration:0.8, ease:"easeOut"}}
                    >
                        <img
                            src={JoseCuttingHair}
                            alt="barber cutting hair"
                            className="w-100 h-100"
                            loading="lazy"
                            style={{ objectFit: "cover", boxShadow: "0 5px 8px rgba(0, 0, 0, 0.5)", position:"relative", zIndex:"1"}}
                        />
                    </motion.div>
                    <motion.div className="col-7 ps-5 p-3 my-5 d-flex flex-column justify-content-center text-light" 
                    style={{backgroundColor: "#2F2519"}}
                    initial={{opacity:0, x:50}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{amount:0.2}}
                    transition={{duration:0.8, ease:"easeOut"}}
                    >
                        <h1 className="mb-0">Barber Service</h1>
                        <hr className="border border-primary border-2 opacity-100 mt-0"/>
                            <ServiceList/>
                    </motion.div>
                </div> ) 
                : (
                <div className="container mx-auto my-2 p-2">
                    <motion.div className=" d-flex flex-column justify-content-center align-items-center px-5 "
                        style={{height:"450px"}}
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{amount:0.2}}
                        transition={{duration:0.8, ease:"easeOut"}}
                        >
                        <img
                            src={JoseCuttingHair}
                            alt="Jose barber cutting hair"
                            className="h-100 w-100 "
                            style={{ objectFit: "cover", boxShadow: "0 5px 8px rgba(0, 0, 0, 0.5)", position:"relative", zIndex:"1" }}
                        />
                    </motion.div>
                    <motion.div className="bg-secondary p-4 pt-5 mt-n5 mb-2 d-flex flex-column justify-content-center"
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{amount:0.2}}
                        transition={{duration:0.8, ease:"easeOut"}}
                    >
                        <h1 className="mb-0 mt-5">Barber Service</h1>
                        <hr className="border border-primary border-2 opacity-100 mt-0 mb-4"/>
                            <ServiceList/>
                    </motion.div>
                </div>
                )}
            </section>
    )
}