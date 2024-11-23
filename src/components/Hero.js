import barberShop from "../assets/images/BARBER.jpg"

export default function Hero(){
    return(
        <>
            <div className="container-fluid row mx-0 px-0 bg-primary vh-100">
                <div 
                className="col h-100 d-flex align-items-end justify-content-center .d-sm-none .d-md-block" 
                style={{backgroundImage:"linear-gradient(to right, var(--background-color) , var(--primary-color)"}}>
                    <div className="container text-center text-light">
                        <h1 className="display-3 lh-1">Pricing</h1>
                        <h1 className="display-3 lh-1">Location</h1>
                        <h1 className="display-3 lh-1">gallery</h1>
                    </div>
                </div>
                <img
                src={barberShop}
                alt="inside barber shop"
                className="col-8 object-fit-cover px-0 h-100"
                />
            </div>
        </>
    )
}