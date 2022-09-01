import './Navbar.scss';
import logo from '../../assets/logo.png';

const Navbar = () => {
 
  return (
    <div className='navbar'>
      <div>
        <img src={logo} alt="logo"  className="navbar-logo"/>
      </div>
      <div className="navbar-tabs">
        <div>Fitness</div>
        <div>Nutrition</div>
        <div className="active-tab">Gyms</div>
        <div>Become WTF Partner</div>
        <div>About Us</div>
        <div className="login">Login</div>
      </div>
    </div>
  );
}

export default Navbar;
