export default function Footer(){
    return(
        <footer className="bg-dark text-light p-4">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-5">
                        <h5>Be Rectified Barber Shop</h5>
                        <p className="mb-0">1910 19th St Suite A Bakersfield, CA 93301</p>
                        <p>Phone: <a href="tel:661-448-0137">661-448-0137</a></p>
                        <div className="">
                            <img src=".//images/Horz_BR3_Yellow(Trans)2.png" alt="Be Rectified Barber Logo" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h5>Business Hours</h5>
                        <p className="mb-0">Mon: 8 AM - 10 AM & 2:30PM - 5 PM</p>
                        <p className="mb-0">Tues: 8 AM - 10 AM & 2:30PM - 5 PM</p>
                        <p className="mb-0">Wed: 8 AM - 10 AM & 2:30PM - 5 PM</p>
                        <p className="mb-0">Thur: 8 AM - 10 AM & 2:30PM - 5 PM</p>
                        <p className="mb-0">Frid: 8 AM - 10 AM & 2:30PM - 5 PM</p>
                        <p className="mb-0">Sat: 10 AM - 2 PM</p>
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