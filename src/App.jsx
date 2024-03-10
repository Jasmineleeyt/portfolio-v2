// import './App.css'
// import Header from './components/Header';
import Navigation from './components/Navigation';
// import Footer from './components/Footer/Footer';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact/Contact';
// import Resume from './components/Resume';
// import Portfolio from './pages/Portfolio';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <Outlet/>
    </>
  );
}

export default App
