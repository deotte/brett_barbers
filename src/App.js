import './App.css';
import Nav from './nav/nav';
import Landing from './landing/landing';
import Services from './services/services';
import Appointments from './appointments/appointments';
import About from './about/about';

function App() {
  return (
    <div className="app-wrapper">
      <Nav />
      <Landing />
      <Services />
      <Appointments />
      <About />
    </div>
  );
}

export default App;
