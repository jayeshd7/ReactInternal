import { HEADER_URL } from "../utils/constant";

const Header = () => {
    return (
        <div className="header">
           <div className="logo-container">
            <img className="logo" src = {HEADER_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                </ul>

                </div>
        </div>
    )
}

export default Header
