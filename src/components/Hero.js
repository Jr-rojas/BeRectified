import { Button } from "reactstrap"
import barberShop from "../assets/images/gallery/IMG_0607.jpg"

export default function Hero(){
    return(
        <section className="p-3  vh-100 bg-secondary" style={{maxHeight:"750px"}}>
            <div className="container-lg row justify-content-center align-items-center h-100 mx-auto">
                <div className="col-4 ">
                    <div className="my-3">
                        <h1 className="display-1 lh-1 mb-0 pb-0 text-primary">Be Rectified</h1>
                        <h1 className="display-1 lh-1 mb-0 pb-0">Barber Shop</h1>
                        <h3>by Jose Solis</h3>
                    </div>
                    <div className="my-3">
                        <Button
                            block
                            color="primary"
                            size="lg"
                            style={{color:"#f8f9fa"}}
                        >
                            Book Now
                        </Button>
                    </div>
                </div>
                <div className=" h-100 col-7 pt-3"
                    style={{
                        height: "200px",
                        backgroundImage: `url(${barberShop})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                  }}>
                </div>
            </div>
        </section>
    )
}