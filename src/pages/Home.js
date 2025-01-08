import CustomNavbar from "../components/CustomNavbar"
import Hero from "../components/Hero/Hero"
import Pricing from "../components/Pricing/Pricing"
import ReviewLayout from "../components/ReviewCard/ReviewLayout"
import Gallery from "../components/Gallery/Gallery"
import Location from "../components/Location/Location"

export default function Home() {
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

