import React from 'react';
import {Container} from "react-bootstrap";
import "./Footer.css"

function Footer() {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <footer className="footer">
            <Container>
                <h3>WeBlog</h3>
                <br />
                Made with ❤️ by <a href="https://www.linkedin.com/in/shubham-patel-3b87141a7/" target="_blank">Shubham Patel</a>
                <br />
                Shubham Patel © {year}
            </Container>
        </footer>
    );
}

export default Footer;