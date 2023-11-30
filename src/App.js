import './App.css';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero'
import Highlights from './Highlights';
import Navigation from './Navigation';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Hero />} />
    </Routes>
    <Highlights/>
    <Header/>
    <Footer/>
    </>
  );
}

export default App;
