import {useState, useEffect} from "react"
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
                    <div className="col-5 my-2 pe-0" 
                    style={{height:"550px"}}>
                        <img
                            src={JoseCuttingHair}
                            alt="barber cutting hair"
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-7 ps-5 p-3 my-5 d-flex flex-column justify-content-center text-light" style={{backgroundColor: "#2F2519"}}>
                        <h1 className="mb-0">Barber Service</h1>
                        <hr className="border border-primary border-2 opacity-100 mt-0"/>
                            <ServiceList/>
                    </div>
                </div> ) 
                : (
                <div className="container mx-auto my-2 p-2">
                    <div className=" d-flex flex-column justify-content-center align-items-center px-5"
                        style={{height:"450px"}}>
                        <img
                            src={JoseCuttingHair}
                            alt="barber cutting hair"
                            className="h-100 w-100"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="bg-primary p-4 pt-5 mt-n5 mb-2 d-flex flex-column justify-content-center">
                        <h1 className="mb-0 mt-5">Barber Service</h1>
                        <hr className="border border-secondary border-2 opacity-100 mt-0 mb-4"/>
                            <ServiceList/>
                    </div>
                </div>
                )}
            </section>
    )
}