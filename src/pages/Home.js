import CustomCarosel from "../components/ReviewCard/CustomCarosel"
import CustomNavbar from "../components/CustomNavbar"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing/Pricing"
import ReviewLayout from "../components/ReviewCard/ReviewLayout"

export default function Home() {
    return (
        <>
            <CustomNavbar />
            <Hero />
            <Pricing />
            <ReviewLayout/>
        </>
    )
}

