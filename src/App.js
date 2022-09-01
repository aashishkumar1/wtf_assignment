import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import GymSection from './components/GymSection/GymSection';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="app">
      <Navbar/> 
      <Dashboard/>
      <GymSection/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
