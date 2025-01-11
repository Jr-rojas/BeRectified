import { useState, useEffect } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import styles from "./CustomNavbar.module.scss"; // Optional for additional styling

export default function CustomNavbar() {

    const booksyURL = "https://booksy.com/en-us/dl/show-business/488886?utm_medium=c2c_referral"
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const heroHeight = document.querySelector("#heroSection")?.offsetHeight || 0;
        const scrollOffset = heroHeight * .9;
        setIsScrolled(window.scrollY > scrollOffset);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar
        fixed="top"
        className={`my-0 py-2 ${isScrolled ? styles.solidNavbar : styles.transparentNavbar}`}
        >
        <NavbarBrand href="/">
            <img
            alt="logo"
            src="/images/Be_Rectified_logo.png"
            style={{
                height: 80,
                aspectRatio: "auto",
            }}
            />
        </NavbarBrand>
        {isScrolled && (
            <Button
            color="primary"
            className="ms-auto"
            href={booksyURL}
            style={{ marginRight: "1rem", color:"white"}}
            >
            Book Now
            </Button>
        )}
        </Navbar>
    );
}
