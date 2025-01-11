export default function Footer(){
    return(
        <footer className="bg-dark text-light p-4">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-5">
                        <h5>Be Rectified Barber Shop</h5>
                        <p className="mb-0">1716 Niles St, Bakersfield, CA 93305</p>
                        <p>Phone: 661-448-0137 </p>
                        <div className="">
                            <img src=".//images/Horz_BR3_Yellow(Trans)2.png" alt="Be Rectified Barber Logo" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h5>Business Hours</h5>
                        <p className="mb-0">Mon-Tues: 8 AM - 1 PM</p>
                        <p className="mb-0">Wed: Closed</p>
                        <p className="mb-0">Thur-Fri: 8 AM - 5 PM</p>
                        <p className="mb-0">Sat: 8 AM - 1 PM</p>
                        <p>Sun: Closed</p>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    <p>&copy; 2025 Be Rectified Barber Shop. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}