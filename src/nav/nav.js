import logo from '../images/logo_landscape_double.jpg';

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="links">
        <a href="">Services</a>
        <a href="">Book an Appointment</a>
        <a href="">About</a>
      </div>
    </nav>
  )
}

export default Nav;
