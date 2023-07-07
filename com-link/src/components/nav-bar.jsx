import '../styles/nav-bar.css'
import logo from '../images/comlink-logo.png'
import city_icon from '../icons/city.png'
import menu_icon from '../icons/menu.png'

function NavBar() {
    return (
      <div className="nav-container">
         
        <div className="nav-logo-container">
            <img src={logo} alt='logo'/>
        </div>

        <div className="nav-search-bar-container">
            <div className='nav-search-bar'>
                <img src={city_icon} alt='city-icon' />
                <p>City</p>
                <div ></div>
                <p>State</p>
            </div>
        </div>
        <div className="nav-menu-container">
            <img src={menu_icon} alt='menu-icon' />
        </div>
        <div className="nav-sign-up-btn-container">
            <button type="button" > 
                <p>Sign Up</p>
            </button>
        </div>
    
      </div>
    );
  }
  
  export default NavBar;