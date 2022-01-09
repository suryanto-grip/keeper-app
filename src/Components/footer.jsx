import React from "react";

function Footer() {
    const getCurrentYear = new Date().getFullYear();
    return(
        <footer className="footer">
            <p>Copyright ⓒ {getCurrentYear}</p>
        </footer>
    );
}

export default Footer;