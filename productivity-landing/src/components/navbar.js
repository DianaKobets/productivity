import logo from '../img/logo.svg';
import facebook from '../img/f.svg';
import telegram from '../img/Telegram_logo.svg';
import twitter from '../img/Vector.svg';
import medium from '../img/Medium_icon.svg';
import './navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} className="logo" alt="logo"/>
            <div className="inner-links">
                <p>Home</p>
                <p>Blog</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Documentation</p>
            </div>
            <div className="links"> 
                <img src={facebook} id="facebook" alt="facebook-logo"/>
                <img src={telegram} id="telegram" alt="telegram-logo"/>
                <img src={twitter} id="twitter" alt="twitter-logo"/>
                <img src={medium} id="Medium" alt="medium-logo"/>
                <button>Get started</button>
            </div>
        </div>
    )
}
export default Navbar