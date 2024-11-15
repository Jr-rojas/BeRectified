import { Navbar, NavbarBrand } from "reactstrap"

export default function CustomNavbar(){
    return(
        <Navbar
            className="my-0 py-0"
            fixed="top"
            style={{backgroundColor: "transparent"}}
        >
            <NavbarBrand href="/">
            <img
                alt="logo"
                src="/images/logo(Trans).png"
                style={{
                height: 100,
                width: 220
                }}
            />
            </NavbarBrand>
        </Navbar>
    )
}