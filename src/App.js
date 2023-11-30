import './App.css';
import BookingForm from './Components/BookingForm';
import BookingPage from './Components/BookingPage';
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
      <Route path='/booking-page' element={<BookingPage />} />
      <Route path='booking-form' element={<BookingForm/>} />
    </Routes>
    <Highlights/>
    <Header/>
    <Footer/>
    </>
  );
}

export default App;
