import { StyledFooter } from "../styles";

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-top">
                <span />
                <h1>Street</h1>
            </div>
            <div className="footer-bottom">
                <div className="footer-links">
                    <div className="links">
                        <a href="/">Home</a>
                        <a href="/">Shop</a>
                        <a href="/">About</a>
                    </div>
                    <div className="links none">
                        <a href="/">FAQ</a>
                        <a href="/">Bookings</a>
                        <a href="/">Fundation</a>
                    </div>
                    <div className="links">
                        <a href="/">Facebook</a>
                        <a href="/">Instagram</a>
                        <a href="/">Twitter</a>
                    </div>
                    <div className="links none">
                        <a href="/">Terms & Privacy</a>
                        <a href="/">2022</a>
                    </div>
                </div>
                <h1>Shop</h1>
            </div>
        </StyledFooter>
    )
}

export default Footer;