// The Header component is a functional component that renders the header section of the website.
// It includes a logo and a navigation menu with links to different sections of the site.
// The logo is displayed as an image and the navigation menu is created using an unordered list.
// The component is styled using CSS classes, and the logo image is sourced from a URL.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// The Header component is a functional component that renders the header section of the website.
// It includes a logo and a navigation menu with links to different sections of the site.
import { useState } from "react";

import { LOGO_URL } from "../utils/constants";
const Header=()=>{
   
    
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button  className="log-in" onClick={()=>{
                        setBtnName(btnName === "Login" ? "Logout" : "Login");
                        // setBtnName("Logout");
                    }}>{btnName}</button>
                </ul>

            </div>
        </div>
    )
};

export default Header;
