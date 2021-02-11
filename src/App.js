import './styles/main.scss';
import logo from './images/logo_landscape_double.jpg';
import Nav from './nav/nav';
import Landing from './landing/landing';
import Services from './services/services';
import Appointments from './appointments/appointments';
import About from './about/about';

function App() {
  return (
    <div className="app-wrapper">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <Nav />
      <Landing />
      
      <Services />
      <Appointments />
      <About />
    </div>
  );
}

export default App;
