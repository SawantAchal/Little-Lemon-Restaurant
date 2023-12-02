import React, { useReducer } from 'react'
import './Assets/Header.css'
import Hero from './Hero'
import BookingPage from './Components/BookingPage'
import ConfirmedBooking from './Components/ConfirmedBooking'
import { Route, Routes, useNavigate } from 'react-router-dom'

const Headers = () => {

  const seededRandom = function (seed) {
    let m = 2**35 -31;
    let a = 185852;
    let s = seed % m;
    return function () {
      return (s = s* a % m)/m;
    }
  }

  const fetchAPI = function (date) {
    let result = [] ;
    let random = seededRandom(date.getDate())

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00')
      }

      if (random() < 0.5) {
        result.push(i + ':30')
      }
    }
    return result
  }

  const initialState = {availableTimes: fetchAPI(new Date())}
  const [state , dispatch] = useReducer(updateTimes , initialState)

  const submitAPI = function(formData){
    return true;
  }

  function updateTimes(state , date) {
    return{availableTimes: fetchAPI(new Date(date))}
  }

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed-booking")
    }
  }

  return (
    <>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/booking-page" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed-booking" element={<ConfirmedBooking/> } />
            </Routes>
    </>
  )
}

export default Headers

