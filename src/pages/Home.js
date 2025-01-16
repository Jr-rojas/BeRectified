
import CustomNavbar from "../components/Navbar/CustomNavbar"
import Hero from "../components/Hero/Hero"
import Pricing from "../components/Pricing/Pricing"
import ReviewLayout from "../components/ReviewCard/ReviewLayout"
import Gallery from "../components/Gallery/Gallery"
import Location from "../components/Location/Location"
import mobileImage from "../assets/images/inside_barber_shop_mobile.jpg"

export default function Home() {
    console.log(mobileImage)
    return (
        <>
            <CustomNavbar />
            <Hero />
            <Pricing />
            <ReviewLayout/>
            <Gallery/>
            <Location/>
        </>
    )
}

